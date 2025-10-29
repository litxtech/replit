// Vercel Serverless Function - Real Stripe Integration
// This will work on www.litxtech.com

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Real Stripe Products - 18 packages with actual Product IDs
const STRIPE_PRODUCTS = {
  'starter-website': {
    name: 'Starter Website',
    description: 'Perfect for individuals and small businesses.',
    priceId: 'prod_TJx1tMK4kjAKYw'
  },
  'professional-website-suite': {
    name: 'Professional Website Suite', 
    description: 'Best for growing startups needing automation.',
    priceId: 'prod_TJx2DQI2ya2TRE'
  },
  'enterprise-saas-platform': {
    name: 'Enterprise SaaS Platform',
    description: 'For SaaS products and scalable business platforms.', 
    priceId: 'prod_TJx3685vaECdcB'
  },
  'ai-lite': {
    name: 'AI Lite',
    description: 'Entry-level AI integration for websites or apps.',
    priceId: 'prod_TJx4FeOKSgVjsY'
  },
  'ai-pro': {
    name: 'AI Pro',
    description: 'Advanced automation & data-driven AI.',
    priceId: 'prod_TJx7xGb2pBFQsA'
  },
  'ai-enterprise': {
    name: 'AI Enterprise',
    description: 'For large-scale AI-driven businesses.',
    priceId: 'prod_TJx85dkj0qblrw'
  },
  'smart-hotel-suite': {
    name: 'Smart Hotel Suite',
    description: 'For hotels, villas, and B&Bs.',
    priceId: 'prod_TJx8NFA5ektMlM'
  },
  'restaurant-pro': {
    name: 'Restaurant Pro',
    description: 'For restaurants, cafés, and bars.',
    priceId: 'prod_TJx9mc9WGeeTS5'
  },
  'travel-agency-hub': {
    name: 'Travel & Agency Hub',
    description: 'For tourism agencies and transfer services.',
    priceId: 'prod_TJxAosCL7gRfYQ'
  },
  'corporate-site': {
    name: 'Corporate Site',
    description: 'For professional companies needing authority online.',
    priceId: 'prod_TJxAosCL7gRfYQ'
  },
  'erp-crm-suite': {
    name: 'ERP / CRM Suite',
    description: 'For businesses needing comprehensive management systems.',
    priceId: 'prod_TJxAg8uJVRzthM'
  },
  'ecommerce-ultra': {
    name: 'E-Commerce Ultra',
    description: 'For online stores and marketplaces.',
    priceId: 'prod_TJxBIgZuYnIadp'
  },
  'full-digital-suite': {
    name: 'Full Digital Suite',
    description: 'Complete digital transformation package.',
    priceId: 'prod_TJxBIgZuYnIadp'
  },
  'custom-enterprise-solutions': {
    name: 'Custom Enterprise Solutions',
    description: 'Tailored solutions for large enterprises.',
    priceId: 'prod_TJcc3OTPPk4Uf9'
  },
  'ui-ux-design-suite': {
    name: 'UI/UX Design Suite',
    description: 'Professional design and user experience services.',
    priceId: 'prod_TJcac84nb1EnsO'
  },
  'annual-maintenance-plan': {
    name: 'Annual Maintenance Plan',
    description: 'Yearly maintenance and support package.',
    priceId: 'prod_TJxpyXo2HM4hkT'
  },
  'custom-software-development': {
    name: 'Custom Software Development',
    description: 'Bespoke software solutions tailored to your needs.',
    priceId: 'prod_TJxoeD8wdnwC9c'
  },
  'digital-suite': {
    name: 'Digital Suite',
    description: 'Comprehensive digital transformation package.',
    priceId: 'prod_TJcbY7ejfso2Yq'
  }
}

export default async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method === 'GET') {
    return res.json({ 
      status: 'OK', 
      timestamp: new Date().toISOString(),
      message: 'Stripe API is ready for payments'
    })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { packageId, packageName, packagePrice } = req.body

    if (!packageId || !STRIPE_PRODUCTS[packageId]) {
      return res.status(400).json({ error: 'Invalid package ID' })
    }

    const product = STRIPE_PRODUCTS[packageId]

    console.log('Product found:', product)
    console.log('Price ID:', product.priceId)

    // Check if priceId is a Product ID (starts with prod_) and get the first price
    let stripePrice
    if (product.priceId && product.priceId.startsWith('prod_')) {
      console.log('Product ID detected, fetching prices...')
      try {
        const prices = await stripe.prices.list({
          product: product.priceId,
          active: true,
          limit: 100
        })
        
        if (prices.data.length === 0) {
          return res.status(400).json({ error: 'No active prices found for product: ' + product.priceId })
        }
        
        // Try to match by lookup_key or metadata.packageId first
        let matched = prices.data.find(p => p.lookup_key === packageId)
        if (!matched) {
          matched = prices.data.find(p => (p.metadata && p.metadata.packageId === packageId))
        }

        stripePrice = matched || prices.data[0]
        console.log('Found price:', stripePrice.id)
      } catch (priceError) {
        console.error('Error fetching prices for product:', priceError)
        return res.status(400).json({ error: 'Error fetching prices for product: ' + product.priceId })
      }
    } else {
      // Direct price ID
      try {
        stripePrice = await stripe.prices.retrieve(product.priceId)
        console.log('Stripe price retrieved:', stripePrice)
      } catch (priceError) {
        console.error('Error fetching Stripe price:', priceError)
        return res.status(400).json({ error: 'Invalid Stripe price ID: ' + product.priceId })
      }
    }

    // Create real Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: stripePrice.id, // Gerçek Price ID kullan
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.litxtech.com'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.litxtech.com'}/cancel`,
      metadata: {
        packageId,
        packageName: product.name,
        packagePrice: (stripePrice.unit_amount / 100).toString(), // Stripe'dan gelen gerçek fiyat
        stripePriceId: stripePrice.id
      },
      custom_fields: [
        {
          key: 'company_name',
          label: {
            type: 'custom',
            custom: 'Company Name',
          },
          type: 'text',
          optional: true,
        },
        {
          key: 'phone',
          label: {
            type: 'custom', 
            custom: 'Phone Number',
          },
          type: 'text',
          optional: true,
        },
      ],
    })

    res.json({ 
      url: session.url,
      price: stripePrice.unit_amount / 100, // Gerçek fiyatı da döndür
      currency: stripePrice.currency,
      packageName: product.name,
      packageId: packageId
    })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    res.status(500).json({ error: error.message || 'Checkout creation failed' })
  }
}