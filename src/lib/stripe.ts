// Mock Stripe checkout for development
// In production, this would be a real API endpoint

export async function createCheckoutSession(priceId: string, packageName: string, packagePrice: number) {
  try {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For development, redirect to success page
    // In production, this would create a real Stripe checkout session
    const mockSessionId = `cs_test_${Date.now()}`
    
    // Log parameters for debugging
    console.log('Creating checkout session:', { priceId, packageName, packagePrice })
    
    return {
      url: `${window.location.origin}/success?session_id=${mockSessionId}`,
      sessionId: mockSessionId
    }
  } catch (error: any) {
    throw new Error(error.message || 'Checkout oluşturulamadı')
  }
}

// Production Stripe integration would look like this:
/*
export async function createCheckoutSession(priceId: string, packageName: string, packagePrice: number) {
  const response = await fetch('/api/stripe/checkout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      priceId,
      packageName,
      packagePrice,
    }),
  })

  const data = await response.json()
  
  if (!response.ok) {
    throw new Error(data.error || 'Checkout oluşturulamadı')
  }

  return data
}
*/
