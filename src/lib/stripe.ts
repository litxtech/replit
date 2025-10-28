// Stripe checkout integration with fallback
// Try production first, fallback to localhost

const API_BASE_URL = 'https://www.litxtech.com'
const LOCALHOST_URL = 'http://localhost:3001'

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

    // Try production API first
    try {
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

      if (response.ok) {
        const data = await response.json()
        return data
      }
    } catch (error) {
      console.log('Production API failed, trying localhost...')
    }

    // Fallback to localhost
    const localhostResponse = await fetch(`${LOCALHOST_URL}/api/stripe/checkout`, {
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

    const localhostData = await localhostResponse.json()

    if (!localhostResponse.ok) {
      throw new Error(localhostData.error || 'Checkout could not be created')
    }

    return localhostData
  } catch (error: any) {
    console.error('Checkout error:', error)
    throw new Error(error.message || 'Payment process could not be started')
  }
}

// Health check function with fallback
export async function checkServerHealth() {
  try {
    // Try production API first
    const productionResponse = await fetch(`${API_BASE_URL}/api/stripe-checkout`, {
      method: 'GET',
    })
    if (productionResponse.ok) {
      return true
    }
  } catch (error) {
    console.log('Production API not available, trying localhost...')
  }

  try {
    // Fallback to localhost
    const localhostResponse = await fetch(`${LOCALHOST_URL}/api/health`, {
      method: 'GET',
    })
    return localhostResponse.ok
  } catch (error) {
    console.error('Both APIs failed:', error)
    return false
  }
}
