import { useState } from 'react'
import { userAuth } from '../lib/supabase'

export function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleProvider = async (provider: 'google' | 'twitch') => {
    try {
      setLoading(true)
      setMessage('')
      await userAuth.signInWithProvider(provider)
    } catch (e: any) {
      setMessage(e.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  const handleSignIn = async () => {
    try {
      setLoading(true)
      setMessage('')
      await userAuth.signInWithEmail(email, password)
      setMessage('Signed in successfully')
    } catch (e: any) {
      setMessage(e.message || 'Sign in failed')
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async () => {
    try {
      setLoading(true)
      setMessage('')
      await userAuth.signUpWithEmail(email, password)
      setMessage('Check your email to confirm your account')
    } catch (e: any) {
      setMessage(e.message || 'Sign up failed')
    } finally {
      setLoading(false)
    }
  }

  const handleMagicLink = async () => {
    try {
      setLoading(true)
      setMessage('')
      await userAuth.signInWithMagicLink(email)
      setMessage('Magic link sent! Check your email')
    } catch (e: any) {
      setMessage(e.message || 'Magic link failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Authentication</h1>
        <div className="space-y-4">
          <button disabled={loading} onClick={() => handleProvider('google')} className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-60">
            Continue with Google
          </button>
          <button disabled={loading} onClick={() => handleProvider('twitch')} className="w-full bg-purple-700 text-white py-2 px-4 rounded-md hover:bg-purple-800 transition-colors disabled:opacity-60">
            Continue with Twitch
          </button>
          <div className="text-center text-gray-500">or</div>
          <div className="space-y-4">
            <input 
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex gap-2">
              <button disabled={loading} onClick={handleSignIn} className="w-1/2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors disabled:opacity-60">
                Sign In
              </button>
              <button disabled={loading} onClick={handleSignUp} className="w-1/2 bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-black transition-colors disabled:opacity-60">
                Sign Up
              </button>
            </div>
            <button disabled={loading} onClick={handleMagicLink} className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-60">
              Send Magic Link
            </button>
            {message && (
              <div className="text-sm text-center text-gray-600">{message}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
