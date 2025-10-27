// Real Stripe checkout integration
// This connects to our Express.js backend API

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export async function createCheckoutSession(priceId: string, packageName: string, packagePrice: number) {
  try {
    // Determine package ID from price ID
    let packageId = 'lite'
    if (priceId.includes('pro')) packageId = 'pro'
    if (priceId.includes('ultra')) packageId = 'ultra'
    
    const response = await fetch(`${API_BASE_URL}/api/stripe/checkout`, {
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
      throw new Error(data.error || 'Checkout oluşturulamadı')
    }

    return data
  } catch (error: any) {
    console.error('Checkout error:', error)
    throw new Error(error.message || 'Ödeme işlemi başlatılamadı')
  }
}

// Health check function
export async function checkServerHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`)
    const data = await response.json()
    return data.status === 'OK'
  } catch (error) {
    console.error('Server health check failed:', error)
    return false
  }
}
