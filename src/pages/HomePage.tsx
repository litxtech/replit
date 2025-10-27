import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap, Rocket, Shield, Star, Users, Bot, Play, Monitor, ArrowRight, Globe, Phone, Mail, ChevronDown } from 'lucide-react'
import { PackageCard } from '../components/PackageCard'

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDemo, setShowDemo] = useState(false)

  // Paket tanımları
  const packages = [
    {
      id: 'lite',
      name: 'LITE',
      description: 'Basit web site (kurumsal / portföy)',
      price: 199,
      features: [
        '1 sayfa, mobil uyumlu',
        'Teslim 3 gün',
        'Temel SEO optimizasyonu',
        'SSL sertifikası'
      ],
      color: 'text-blue-400',
      stripePriceId: 'price_lite_199'
    },
    {
      id: 'pro',
      name: 'PRO',
      description: 'Otomasyonlu SaaS / API entegrasyonlu site',
      price: 499,
      features: [
        '3 sayfa + Dashboard',
        'Hosting dahil',
        'API entegrasyonu',
        'Admin paneli',
        '30 gün destek'
      ],
      color: 'text-purple-400',
      popular: true,
      stripePriceId: 'price_pro_499'
    },
    {
      id: 'ultra',
      name: 'ULTRA',
      description: 'Tam sistem + kullanıcı yönetimi + ödeme entegrasyonu',
      price: 999,
      features: [
        'Admin paneli',
        'Stripe entegrasyonu',
        'Mail sistemi',
        'Supabase veritabanı',
        '90 gün destek'
      ],
      color: 'text-pink-400',
      stripePriceId: 'price_ultra_999'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <Link to="/" className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  LitxTech
                </Link>
                <p className="text-sm text-gray-300 font-medium">Build. Automate. Scale.</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors font-medium">Ana Sayfa</Link>
              <Link to="/about" className="text-white hover:text-blue-400 transition-colors font-medium">Hakkımızda</Link>
              <div className="relative group">
                <button className="text-white hover:text-blue-400 transition-colors font-medium flex items-center space-x-1">
                  <span>Çözümler</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4">
                  <div className="space-y-2">
                    <Link to="/solutions/hotels" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">🏨 Oteller için Çözüm</Link>
                    <Link to="/solutions/restaurants" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">🍽️ Restoran & Kafeler</Link>
                    <Link to="/solutions/construction" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">🏗️ İnşaat & Emlak</Link>
                    <Link to="/solutions/pharma" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors">💊 Eczaneler & Klinikler</Link>
                  </div>
                </div>
              </div>
              <Link to="/packages" className="text-white hover:text-blue-400 transition-colors font-medium">💰 Fiyatlarımız</Link>
              <Link to="/blog" className="text-white hover:text-blue-400 transition-colors font-medium">📰 Blog</Link>
              <Link to="/contact" className="text-white hover:text-blue-400 transition-colors font-medium">📞 İletişim</Link>
            </div>

            {/* Right Side */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button className="text-white hover:text-blue-400 transition-colors text-sm">TR</button>
                <span className="text-gray-400">|</span>
                <button className="text-gray-400 hover:text-white transition-colors text-sm">EN</button>
              </div>
              <Link to="/auth" className="text-white hover:text-blue-400 transition-colors font-medium">🔑 Giriş</Link>
              <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                🚀 Teklif Al
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
              <div className="space-y-4">
                <Link to="/" className="block text-white hover:text-blue-400 transition-colors">Ana Sayfa</Link>
                <Link to="/about" className="block text-white hover:text-blue-400 transition-colors">Hakkımızda</Link>
                <Link to="/packages" className="block text-white hover:text-blue-400 transition-colors">Fiyatlarımız</Link>
                <Link to="/blog" className="block text-white hover:text-blue-400 transition-colors">Blog</Link>
                <Link to="/contact" className="block text-white hover:text-blue-400 transition-colors">İletişim</Link>
                <div className="pt-4 border-t border-white/20">
                  <Link to="/auth" className="block text-white hover:text-blue-400 transition-colors mb-2">Giriş Yap</Link>
                  <Link to="/contact" className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center">Teklif Al</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Smart Software
                </span>
                <br />
                <span className="text-white">Solutions for a</span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Fast World
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                Custom systems, automation tools, and cloud apps — all powered by LitxTech.
                <br />
                <span className="text-lg text-gray-400">Transform your business with AI-driven solutions.</span>
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link 
                to="/packages" 
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-2"
              >
                <span>View Packages</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button 
                onClick={() => setShowDemo(!showDemo)}
                className="group border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center space-x-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-300 font-medium">Uptime Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-pink-400 mb-2">24/7</div>
                <div className="text-gray-300 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">LitxTech</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just sell software, we scale your business with cutting-edge technology and AI-powered solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300 leading-relaxed">
                Deploy your applications in minutes, not months. Our optimized infrastructure ensures maximum performance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered</h3>
              <p className="text-gray-300 leading-relaxed">
                Leverage advanced AI and machine learning to automate processes and gain intelligent insights.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Bank-level security with GDPR, CCPA, and KVKK compliance. Your data is always protected.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300 leading-relaxed">
                Work with experienced developers and designers who understand your business needs.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Monitor className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scalable Solutions</h3>
              <p className="text-gray-300 leading-relaxed">
                From startup to enterprise, our solutions grow with your business needs and requirements.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Support</h3>
              <p className="text-gray-300 leading-relaxed">
                24/7 dedicated support team ready to help you succeed with your digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Package</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to meet your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-white/5 backdrop-blur-md border-t border-white/20 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white">LitxTech</div>
                  <div className="text-sm text-gray-400">Build. Automate. Scale.</div>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                LitxTech LLC - Wyoming, United States
                <br />
                D-U-N-S®: 144849529
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Access</h3>
              <div className="space-y-2">
                <Link to="/packages" className="block text-gray-300 hover:text-blue-400 transition-colors">Fiyatlarımız</Link>
                <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">Hakkımızda</Link>
                <Link to="/blog" className="block text-gray-300 hover:text-blue-400 transition-colors">Blog</Link>
                <Link to="/contact" className="block text-gray-300 hover:text-blue-400 transition-colors">İletişim</Link>
              </div>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Legal</h3>
              <div className="space-y-2">
                <Link to="/privacy-policy" className="block text-gray-300 hover:text-blue-400 transition-colors">Privacy Policy</Link>
                <Link to="/terms-of-service" className="block text-gray-300 hover:text-blue-400 transition-colors">Terms of Service</Link>
                <Link to="/commercial-agreement" className="block text-gray-300 hover:text-blue-400 transition-colors">Commercial Agreement</Link>
                <Link to="/subprocessors" className="block text-gray-300 hover:text-blue-400 transition-colors">Subprocessors</Link>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <a href="tel:+13072715151" className="text-gray-300 hover:text-blue-400 transition-colors">+1 307 271 5151</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <a href="mailto:support@litxtech.com" className="text-gray-300 hover:text-blue-400 transition-colors">support@litxtech.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <a href="https://www.litxtech.com" className="text-gray-300 hover:text-blue-400 transition-colors">www.litxtech.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 LitxTech LLC. All rights reserved. | 
              <span className="text-blue-400 ml-1">Powered by DeepSeek AI • Hosted on Vercel • Database: Supabase</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}