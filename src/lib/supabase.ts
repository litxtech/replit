import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Admin authentication fonksiyonları
export const adminAuth = {
  async login(email: string, password: string) {
    try {
      // Şifre hash'ini kontrol et
      const { data, error } = await supabase
        .from('admin_users')
        .select('*')
        .eq('email', email)
        .eq('is_active', true)
        .single()

      if (error || !data) {
        throw new Error('Invalid credentials')
      }

      // Şifre kontrolü (bcrypt ile hash'lenmiş)
      const bcrypt = await import('bcryptjs')
      const isValid = await bcrypt.compare(password, data.password_hash)
      
      if (!isValid) {
        throw new Error('Invalid credentials')
      }

      // Session token oluştur
      const sessionToken = crypto.randomUUID()
      const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 saat

      // Session kaydet
      const { error: sessionError } = await supabase
        .from('admin_sessions')
        .insert({
          admin_user_id: data.id,
          session_token: sessionToken,
          expires_at: expiresAt.toISOString(),
          ip_address: null, // Client-side'da IP alamayız
          user_agent: navigator.userAgent
        })

      if (sessionError) {
        throw new Error('Session creation failed')
      }

      // Session token'ı localStorage'a kaydet
      localStorage.setItem('admin_session_token', sessionToken)
      localStorage.setItem('admin_user', JSON.stringify({
        id: data.id,
        email: data.email,
        role: data.role,
        full_name: data.full_name
      }))

      return { user: data, sessionToken }
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  },

  async logout() {
    try {
      const sessionToken = localStorage.getItem('admin_session_token')
      
      if (sessionToken) {
        await supabase
          .from('admin_sessions')
          .delete()
          .eq('session_token', sessionToken)
      }

      localStorage.removeItem('admin_session_token')
      localStorage.removeItem('admin_user')
    } catch (error) {
      console.error('Logout error:', error)
    }
  },

  async validateSession() {
    try {
      const sessionToken = localStorage.getItem('admin_session_token')
      
      if (!sessionToken) {
        return null
      }

      const { data, error } = await supabase
        .rpc('validate_admin_session', { token: sessionToken })

      if (error || !data || data.length === 0) {
        this.logout()
        return null
      }

      return data[0]
    } catch (error) {
      console.error('Session validation error:', error)
      this.logout()
      return null
    }
  },

  async getCurrentUser() {
    try {
      const session = await this.validateSession()
      if (!session) return null

      const userData = localStorage.getItem('admin_user')
      return userData ? JSON.parse(userData) : null
    } catch (error) {
      console.error('Get current user error:', error)
      return null
    }
  }
}

// Admin paneli için veri çekme fonksiyonları
export const adminData = {
  async getDashboardStats() {
    try {
      const { data, error } = await supabase
        .from('admin_dashboard_stats')
        .select('*')
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Dashboard stats error:', error)
      return null
    }
  },

  async getCustomerOrders(limit = 10) {
    try {
      const { data, error } = await supabase
        .from('customer_orders')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return data
    } catch (error) {
      console.error('Customer orders error:', error)
      return []
    }
  },

  async getContactMessages(limit = 10) {
    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return data
    } catch (error) {
      console.error('Contact messages error:', error)
      return []
    }
  },

  async getBlogPosts(limit = 10) {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return data
    } catch (error) {
      console.error('Blog posts error:', error)
      return []
    }
  },

  async updateSiteSetting(key: string, value: any) {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .update({ value })
        .eq('key', key)

      if (error) throw error
      return data
    } catch (error) {
      console.error('Update site setting error:', error)
      throw error
    }
  },

  async getSiteSettings() {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')

      if (error) throw error
      return data
    } catch (error) {
      console.error('Get site settings error:', error)
      return []
    }
  }
}