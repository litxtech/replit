import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase, userAuth } from '../lib/supabase'
import { User, Mail, Settings, Heart, Eye, EyeOff, LogOut, ArrowLeft, MapPin } from 'lucide-react'
import { UserBadge } from '../components/UserBadge'

export function ProfilePage() {
  const navigate = useNavigate()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [badges, setBadges] = useState<any[]>([])

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const currentUser = await userAuth.getUser()
        if (!currentUser) {
          navigate('/auth')
          return
        }

        setUser(currentUser)

        // Kullanıcının etiketlerini getir
        if (supabase) {
          const { data, error } = await supabase
            .from('user_badges')
            .select('*')
            .eq('user_id', currentUser.id)
            .order('created_at', { ascending: false })

          if (!error && data) {
            setBadges(data)
          }
        }
      } catch (error) {
        console.error('Error fetching user:', error)
        navigate('/auth')
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [navigate])

  const toggleBadgeVisibility = async (badgeType: string, currentVisibility: boolean) => {
    if (!supabase || !user) return

    try {
      const { error } = await supabase
        .from('user_badges')
        .update({ is_visible: !currentVisibility })
        .eq('user_id', user.id)
        .eq('badge_type', badgeType)

      if (error) throw error

      // Local state'i güncelle
      setBadges(badges.map(badge => 
        badge.badge_type === badgeType 
          ? { ...badge, is_visible: !currentVisibility }
          : badge
      ))
    } catch (error) {
      console.error('Error toggling badge:', error)
      alert('Etiket görünürlüğü değiştirilemedi')
    }
  }

  const handleLogout = async () => {
    try {
      await userAuth.signOut()
      navigate('/auth')
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white">Yükleniyor...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Geri
          </button>
          <h1 className="text-4xl font-bold text-white mb-2">Profil</h1>
        </div>

        {/* Profile Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20 mb-6">
          {/* Avatar & Basic Info */}
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
              <User className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-1">
                {user.user_metadata?.full_name || user.email?.split('@')[0] || 'Kullanıcı'}
              </h2>
              <p className="text-gray-300 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {user.email}
              </p>
            </div>
          </div>

          {/* Badges Section */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-400" />
              Etiketlerim
            </h3>
            {badges.length > 0 ? (
              <div className="space-y-3">
                {badges.map((badge) => (
                  <div
                    key={badge.id}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        badge.badge_color === 'pink' ? 'bg-pink-500/20' :
                        badge.badge_color === 'blue' ? 'bg-blue-500/20' :
                        'bg-purple-500/20'
                      }`}>
                        {badge.badge_icon === 'heart' ? (
                          <Heart className={`w-5 h-5 ${
                            badge.badge_color === 'pink' ? 'text-pink-400' :
                            badge.badge_color === 'blue' ? 'text-blue-400' :
                            'text-purple-400'
                          }`} />
                        ) : (
                          <MapPin className={`w-5 h-5 ${
                            badge.badge_color === 'pink' ? 'text-pink-400' :
                            badge.badge_color === 'blue' ? 'text-blue-400' :
                            'text-purple-400'
                          }`} />
                        )}
                      </div>
                      <div>
                        <p className="text-white font-medium">{badge.badge_name}</p>
                        <p className="text-gray-400 text-sm">
                          {badge.badge_type === 'supporter' ? 'Destekçi etiketi' : 'İlçe etiketi'}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleBadgeVisibility(badge.badge_type, badge.is_visible)}
                      className={`p-2 rounded-lg transition-colors ${
                        badge.is_visible
                          ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                          : 'bg-gray-500/20 text-gray-400 hover:bg-gray-500/30'
                      }`}
                      title={badge.is_visible ? 'Etiketi gizle' : 'Etiketi göster'}
                    >
                      {badge.is_visible ? (
                        <Eye className="w-5 h-5" />
                      ) : (
                        <EyeOff className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-400">
                <Heart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Henüz etiketiniz yok</p>
                <p className="text-sm mt-2">
                  <a href="/donation" className="text-purple-400 hover:text-purple-300">
                    Destek ol
                  </a> ve "Destekçi" etiketi kazan!
                </p>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="space-y-3">
            <button
              onClick={() => navigate('/donation')}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Destek Ol
            </button>
            <button
              onClick={handleLogout}
              className="w-full bg-red-500/20 border border-red-500/30 text-red-300 py-3 px-4 rounded-lg font-semibold hover:bg-red-500/30 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <LogOut className="w-5 h-5" />
              Çıkış Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

