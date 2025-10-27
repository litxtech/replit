// Development Stripe checkout integration
// This connects to localhost server for testing

export async function createCheckoutSession(priceId: string, packageName: string, packagePrice: number) {
  try {
    // Determine package ID from price ID
    let packageId = 'starter'
    if (priceId.includes('professional')) packageId = 'professional'
    if (priceId.includes('enterprise')) packageId = 'enterprise'
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
    if (priceId.includes('custom-software')) packageId = 'custom-software'
    if (priceId.includes('annual-maintenance')) packageId = 'annual-maintenance'
    if (priceId.includes('ui-ux-design')) packageId = 'ui-ux-design'

    // Use localhost for development
    const response = await fetch('http://localhost:3001/api/stripe/checkout', {
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

// Health check function - check localhost for development
export async function checkServerHealth() {
  try {
    // Check localhost server for development
    const localhostResponse = await fetch('http://localhost:3001/api/health', {
      method: 'GET',
    })
    return localhostResponse.ok
  } catch (error) {
    console.error('Localhost API failed:', error)
    return false
  }
}
