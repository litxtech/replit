// Stripe checkout integration with fallback
// Try production first, fallback to localhost

const API_BASE_URL = 'https://www.litxtech.com'
const LOCALHOST_URL = 'http://localhost:3001'

export async function createCheckoutSession(priceId: string, packageName: string, packagePrice: number) {
  try {
    // Map Product ID to package ID
    let packageId = 'starter-website'
    
    // Map Product IDs to package IDs
    if (priceId === 'prod_TJx1tMK4kjAKYw') packageId = 'starter-website'
    if (priceId === 'prod_TJx2DQI2ya2TRE') packageId = 'professional-website-suite'
    if (priceId === 'prod_TJx3685vaECdcB') packageId = 'enterprise-saas-platform'
    if (priceId === 'prod_TJx4FeOKSgVjsY') packageId = 'ai-lite'
    if (priceId === 'prod_TJx7xGb2pBFQsA') packageId = 'ai-pro'
    if (priceId === 'prod_TJx85dkj0qblrw') packageId = 'ai-enterprise'
    if (priceId === 'prod_TJx8NFA5ektMlM') packageId = 'smart-hotel-suite'
    if (priceId === 'prod_TJx9mc9WGeeTS5') packageId = 'restaurant-pro'
    if (priceId === 'prod_TJxAosCL7gRfYQ') packageId = 'travel-agency-hub'
    if (priceId === 'prod_TJxAg8uJVRzthM') packageId = 'erp-crm-suite'
    if (priceId === 'prod_TJxBIgZuYnIadp') packageId = 'ecommerce-ultra'
    if (priceId === 'prod_TJcc3OTPPk4Uf9') packageId = 'custom-enterprise-solutions'
    if (priceId === 'prod_TJcac84nb1EnsO') packageId = 'ui-ux-design-suite'
    if (priceId === 'prod_TJxpyXo2HM4hkT') packageId = 'annual-maintenance-plan'
    if (priceId === 'prod_TJxoeD8wdnwC9c') packageId = 'custom-software-development'
    if (priceId === 'prod_TJcbY7ejfso2Yq') packageId = 'digital-suite'

    console.log('Mapped Product ID to package ID:', { priceId, packageId })

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
          packagePrice: packagePrice, // Frontend'den gelen fiyat (sadece referans için)
        }),
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Checkout response:', data) // Debug için
        return data
      } else {
        const errorData = await response.json()
        console.error('API Error:', errorData)
        throw new Error(errorData.error || 'API request failed')
      }
    } catch (error) {
      console.log('Production API failed, trying localhost...', error)
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
