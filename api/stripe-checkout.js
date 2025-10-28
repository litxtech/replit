// Vercel Serverless Function - Real Stripe Integration
// This will work on www.litxtech.com

import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Real Stripe Products - 15 packages with new Price IDs
const STRIPE_PRODUCTS = {
  'starter-website': {
    name: 'Starter Website',
    description: 'Perfect for individuals and small businesses.',
    price: 990, // $990
    priceId: process.env.STRIPE_STARTER_WEBSITE_PRICE_ID
  },
  'professional-website-suite': {
    name: 'Professional Website Suite', 
    description: 'Best for growing startups needing automation.',
    price: 2490, // $2490
    priceId: process.env.STRIPE_PROFESSIONAL_WEBSITE_SUITE_PRICE_ID
  },
  'enterprise-saas-platform': {
    name: 'Enterprise SaaS Platform',
    description: 'For SaaS products and scalable business platforms.', 
    price: 4990, // $4990
    priceId: process.env.STRIPE_ENTERPRISE_SAAS_PLATFORM_PRICE_ID
  },
  'ai-lite': {
    name: 'AI Lite',
    description: 'Entry-level AI integration for websites or apps.',
    price: 1490, // $1490
    priceId: process.env.STRIPE_AI_LITE_PRICE_ID
  },
  'ai-pro': {
    name: 'AI Pro',
    description: 'Advanced automation & data-driven AI.',
    price: 3490, // $3490
    priceId: process.env.STRIPE_AI_PRO_PRICE_ID
  },
  'ai-enterprise': {
    name: 'AI Enterprise',
    description: 'For large-scale AI-driven businesses.',
    price: 8990, // $8990
    priceId: process.env.STRIPE_AI_ENTERPRISE_PRICE_ID
  },
  'smart-hotel-suite': {
    name: 'Smart Hotel Suite',
    description: 'For hotels, villas, and B&Bs.',
    price: 2990, // $2990
    priceId: process.env.STRIPE_SMART_HOTEL_SUITE_PRICE_ID
  },
  'restaurant-pro': {
    name: 'Restaurant Pro',
    description: 'For restaurants, cafés, and bars.',
    price: 1790, // $1790
    priceId: process.env.STRIPE_RESTAURANT_PRO_PRICE_ID
  },
  'travel-agency-hub': {
    name: 'Travel & Agency Hub',
    description: 'For tourism agencies and transfer services.',
    price: 3790, // $3790
    priceId: process.env.STRIPE_TRAVEL_AGENCY_HUB_PRICE_ID
  },
  'corporate-site': {
    name: 'Corporate Site',
    description: 'For professional companies needing authority online.',
    price: 1590, // $1590
    priceId: process.env.STRIPE_CORPORATE_SITE_PRICE_ID
  },
  'erp-crm-suite': {
    name: 'ERP / CRM Suite',
    description: 'Internal management software.',
    price: 5490, // $5490
    priceId: process.env.STRIPE_ERP_CRM_SUITE_PRICE_ID
  },
  'ecommerce-ultra': {
    name: 'E-Commerce Ultra',
    description: 'For online stores & product platforms.',
    price: 3990, // $3990
    priceId: process.env.STRIPE_ECOMMERCE_ULTRA_PRICE_ID
  },
  'full-digital-suite': {
    name: 'Full Digital Suite',
    description: 'For marketing agencies or corporate teams.',
    price: 5990, // $5990
    priceId: process.env.STRIPE_FULL_DIGITAL_SUITE_PRICE_ID
  },
  'custom-enterprise-solutions': {
    name: 'Custom Enterprise Solutions',
    description: 'Tailored solutions for corporations & startups.',
    price: 9990, // $9990
    priceId: process.env.STRIPE_CUSTOM_ENTERPRISE_SOLUTIONS_PRICE_ID
  },
  'ui-ux-design-suite': {
    name: 'UI/UX Design Suite',
    description: 'Full design system and components.',
    price: 1590, // $1590
    priceId: process.env.STRIPE_UI_UX_DESIGN_SUITE_PRICE_ID
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

    // Create real Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: product.name,
              description: product.description,
            },
            unit_amount: product.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.litxtech.com'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.litxtech.com'}/cancel`,
      metadata: {
        packageId,
        packageName: product.name,
        packagePrice: product.price.toString(),
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

    res.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    res.status(500).json({ error: error.message || 'Checkout creation failed' })
  }
}