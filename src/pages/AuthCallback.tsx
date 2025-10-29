import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'

export function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    const handle = async () => {
      // Supabase will set session via URL hash automatically on this route
      // Just wait a tick and redirect
      await new Promise((r) => setTimeout(r, 500))
      const { data } = await supabase.auth.getUser()
      if (data.user) {
        navigate('/')
      } else {
        navigate('/auth')
      }
    }
    handle()
  }, [navigate])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Authentication</h1>
        <p className="text-gray-700 mb-6">
          Processing your authentication request...
        </p>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  )
}
