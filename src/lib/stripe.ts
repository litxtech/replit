// Real Stripe checkout integration for production
// This connects to Vercel serverless function on www.litxtech.com

const API_BASE_URL = 'https://www.litxtech.com'

export async function createCheckoutSession(priceId: string, packageName: string, packagePrice: number) {
  try {
    // Map price ID to package ID
    let packageId = 'starter-web'
    if (priceId.includes('professional')) packageId = 'professional-web'
    if (priceId.includes('enterprise')) packageId = 'enterprise-web'
    if (priceId.includes('ai-lite')) packageId = 'ai-lite'
    if (priceId.includes('ai-pro')) packageId = 'ai-pro'
    if (priceId.includes('ai-enterprise')) packageId = 'ai-enterprise'
    if (priceId.includes('smart-hotel')) packageId = 'smart-hotel'
    if (priceId.includes('restaurant-pro')) packageId = 'restaurant-pro'
    if (priceId.includes('travel-agency-hub')) packageId = 'travel-agency-hub'
    if (priceId.includes('corporate-site')) packageId = 'corporate-site'
    if (priceId.includes('erp-crm-suite')) packageId = 'erp-crm-suite'
    if (priceId.includes('ecommerce-ultra')) packageId = 'ecommerce-ultra'
    if (priceId.includes('brand-launch-kit')) packageId = 'brand-launch-kit'
    if (priceId.includes('sales-automation-pro')) packageId = 'sales-automation-pro'
    if (priceId.includes('full-digital-suite')) packageId = 'full-digital-suite'
    if (priceId.includes('custom-software')) packageId = 'custom-software-development'
    if (priceId.includes('annual-maintenance')) packageId = 'annual-maintenance-plan'
    if (priceId.includes('ui-ux-design')) packageId = 'ui-ux-design-suite'

    // Connect to real Stripe API
    const response = await fetch(`${API_BASE_URL}/api/stripe-checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        packageId,
        packageName,
        packagePrice,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Checkout could not be created')
    }

    return data
  } catch (error: any) {
    console.error('Checkout error:', error)
    throw new Error(error.message || 'Payment process could not be started')
  }
}

// Health check function for production
export async function checkServerHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/stripe-checkout`, {
      method: 'GET',
    })
    return response.ok
  } catch (error) {
    console.error('Production API failed:', error)
    return false
  }
}
