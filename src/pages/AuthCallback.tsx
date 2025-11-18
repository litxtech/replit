import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { openMyTrabzonDeepLink } from '../lib/utils'
import { Loader2 } from 'lucide-react'

export function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    const handle = async () => {
      if (!supabase) {
        navigate('/auth')
        return
      }

      // Deep link veya web URL kontrolü
      const currentUrl = window.location.href
      const isDeepLink = currentUrl.startsWith('mytrabzon://') || currentUrl.startsWith('litxtech://')
      
      // Deep link için özel işleme
      if (isDeepLink) {
        console.log('Deep link detected:', currentUrl)
        // Deep link'ten hash parametrelerini al
        const urlParts = currentUrl.split('#')
        if (urlParts.length > 1) {
          // Hash'i window.location.hash'a set et (Supabase için)
          window.location.hash = urlParts[1]
        }
      }

      // Supabase will set session via URL hash automatically on this route
      await new Promise((r) => setTimeout(r, 500))

      try {
        const { data: { user }, error } = await supabase.auth.getUser()
        
        if (error || !user) {
          navigate('/auth')
          return
        }

        const hashSuffix = window.location.hash || ''

        // URL hash'ini kontrol et
        const hash = window.location.hash
        const hashParams = new URLSearchParams(hash.substring(1))
        const type = hashParams.get('type')

        // Eğer email confirmation ise
        if (type === 'signup' || type === 'email') {
          // Onboarding'e yönlendir (eğer tamamlanmamışsa)
          if (!user.user_metadata?.onboarding_completed) {
            if (openMyTrabzonDeepLink('auth/onboarding', hashSuffix)) return
            navigate('/auth/onboarding')
          } else {
            if (openMyTrabzonDeepLink('auth/callback', hashSuffix)) return
            navigate('/')
          }
        } 
        // Eğer password recovery ise
        else if (type === 'recovery') {
          if (openMyTrabzonDeepLink('auth/reset-password', hashSuffix)) return
          navigate('/auth/reset-password')
        }
        // Normal giriş
        else {
          // Onboarding tamamlanmamışsa onboarding'e yönlendir
          if (!user.user_metadata?.onboarding_completed) {
            if (openMyTrabzonDeepLink('auth/onboarding', hashSuffix)) return
            navigate('/auth/onboarding')
          } else {
            if (openMyTrabzonDeepLink('auth/callback', hashSuffix)) return
            navigate('/')
          }
        }
      } catch (error) {
        console.error('Auth callback error:', error)
        navigate('/auth')
      }
    }
    
    handle()

    // Auth state değişikliklerini dinle
    if (!supabase) return
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session?.user) {
        const hash = window.location.hash
        const hashParams = new URLSearchParams(hash.substring(1))
        const type = hashParams.get('type')

        if (type === 'signup' || type === 'email') {
          if (!session.user.user_metadata?.onboarding_completed) {
            if (openMyTrabzonDeepLink('auth/onboarding', window.location.hash || '')) return
            navigate('/auth/onboarding')
          } else {
            if (openMyTrabzonDeepLink('auth/callback', window.location.hash || '')) return
            navigate('/')
          }
        } else if (type === 'recovery') {
          if (openMyTrabzonDeepLink('auth/reset-password', window.location.hash || '')) return
          navigate('/auth/reset-password')
        } else {
          if (!session.user.user_metadata?.onboarding_completed) {
            if (openMyTrabzonDeepLink('auth/onboarding', window.location.hash || '')) return
            navigate('/auth/onboarding')
          } else {
            if (openMyTrabzonDeepLink('auth/callback', window.location.hash || '')) return
            navigate('/')
          }
        }
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [navigate])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 text-center">
        <Loader2 className="w-12 h-12 text-white animate-spin mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Kimlik Doğrulanıyor</h1>
        <p className="text-gray-300">
          İşleminiz gerçekleştiriliyor, lütfen bekleyin...
        </p>
      </div>
    </div>
  )
}
