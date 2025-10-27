import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Zap, Rocket, Shield, Star, Building2, Users, Bot, Play, Monitor } from 'lucide-react'

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showDemo, setShowDemo] = useState(false)

  // Particle animation effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div')
      particle.className = 'particle'
      particle.style.left = Math.random() * 100 + '%'
      particle.style.animationDelay = Math.random() * 15 + 's'
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's'
      document.querySelector('.particles')?.appendChild(particle)

      setTimeout(() => {
        particle.remove()
      }, 25000)
    }

    const interval = setInterval(createParticle, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
      <div className="min-h-screen relative">
        {/* Animated Background */}
        <div className="animated-bg"></div>
        <div className="bg-overlay"></div>
        <div className="particles"></div>

      {/* Navigation */}
      <nav className="glass fixed top-0 left-0 right-0 z-50 mx-4 mt-4">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  LitxTech
                </Link>
                <p className="text-xs text-gray-400">Build. Automate. Scale.</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <Link to="/" className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium">Home</Link>
                  <Link to="/packages" className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium">Packages</Link>
                  <Link to="/about" className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium">About</Link>
                  <Link to="/contact" className="text-zinc-700 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium">Contact</Link>
                  <Link to="/packages" className="glow-button">
                    Get Started
                  </Link>
                </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden glass-card mx-4 mt-2 p-4">
            <div className="space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-white">Home</Link>
              <Link to="/packages" className="block text-gray-300 hover:text-white">Packages</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white">About</Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white">Contact</Link>
              <Link to="/packages" className="glow-button block text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
            <div className="max-w-6xl mx-auto text-center">
              {/* Animated Code Lines Background */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <div className="absolute top-20 left-10 text-green-400 font-mono text-sm animate-pulse">
                  <div className="animate-bounce">const app = createApp()</div>
                  <div className="animate-bounce delay-100">app.use(router)</div>
                  <div className="animate-bounce delay-200">app.mount('#app')</div>
                </div>
                <div className="absolute top-40 right-20 text-blue-400 font-mono text-sm animate-pulse">
                  <div className="animate-bounce delay-300">npm run build</div>
                  <div className="animate-bounce delay-400">✅ Production ready</div>
                </div>
                <div className="absolute bottom-40 left-20 text-purple-400 font-mono text-sm animate-pulse">
                  <div className="animate-bounce delay-500">deploy: success</div>
                  <div className="animate-bounce delay-600">🚀 Live in 2 minutes</div>
                </div>
              </div>

              {/* Main Hero Content */}
              <div className="relative z-10">
                {/* Trust Badge */}
                <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8 fade-in">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 text-sm font-medium">✓ Verified U.S. Company • D-U-N-S® 144849529</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    We Build Fast, Secure,
                  </span>
                  <br />
                  <span className="text-zinc-900 dark:text-white">and Scalable Software</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-zinc-700 dark:text-zinc-200/90 mb-8 max-w-4xl mx-auto fade-in">
                  From AI-powered apps to automation dashboards — LitxTech delivers production-ready systems in days, not weeks.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 mb-12 fade-in">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">24h</div>
                    <div className="text-sm text-gray-300">Project Start</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">7 Days</div>
                    <div className="text-sm text-gray-300">Average Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400">100%</div>
                    <div className="text-sm text-gray-300">Success Rate</div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center fade-in">
                  <Link 
                    to="/packages" 
                    className="glow-button text-lg px-8 py-4 neon-blue"
                  >
                    View Packages
                  </Link>
                  <Link 
                    to="/contact" 
                    className="glass-card text-lg px-8 py-4 text-white hover:bg-white/10 transition-all duration-300"
                  >
                    Start a Project
                  </Link>
                </div>
              </div>
            </div>
          </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                How It Works
              </span>
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Get your software solution in 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 tilt-card group text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:neon-blue transition-all duration-300">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Choose Your Package</h3>
              <p className="text-gray-100 leading-relaxed">
                Select from LITE, PRO, or ULTRA packages. Each designed for different business needs and budgets.
              </p>
            </div>
            
            <div className="glass-card p-8 tilt-card group text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:neon-purple transition-all duration-300">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">We Start Instantly</h3>
              <p className="text-gray-100 leading-relaxed">
                Your project manager contacts you within 24 hours. Development begins immediately with daily updates.
              </p>
            </div>
            
            <div className="glass-card p-8 tilt-card group text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:neon-green transition-all duration-300">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Deliver in Days</h3>
              <p className="text-gray-100 leading-relaxed">
                Receive your production-ready system with full documentation, hosting, and ongoing support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Why Choose LitxTech?
              </span>
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              We provide cutting-edge technology solutions that scale with your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 tilt-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 group-hover:neon-blue transition-all duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Lightning Fast</h3>
              <p className="text-gray-100 leading-relaxed">
                Deploy your software solutions in days, not months. Our streamlined process gets you to market faster.
              </p>
            </div>
            
            <div className="glass-card p-8 tilt-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mb-6 group-hover:neon-purple transition-all duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">AI-Powered</h3>
              <p className="text-gray-100 leading-relaxed">
                Leverage cutting-edge AI and automation to build smarter, more efficient applications.
              </p>
            </div>
            
            <div className="glass-card p-8 tilt-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mb-6 group-hover:neon-green transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Enterprise Ready</h3>
              <p className="text-gray-100 leading-relaxed">
                Built with security and scalability in mind. Your solutions grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Powered by Modern Tech
              </span>
            </h2>
            <p className="text-xl text-gray-100">
              Our software solutions are built with the latest technologies
            </p>
          </div>
          
          {/* Marquee Effect */}
          <div className="glass-card p-8 overflow-hidden">
            <div className="flex animate-marquee">
              {['React', 'Next.js', 'Supabase', 'Stripe', 'OpenAI', 'AWS', 'TypeScript', 'Tailwind', 'Expo', 'Framer', 'Vercel', 'PostgreSQL'].map((tech, index) => (
                <div key={index} className="flex items-center space-x-2 px-6 py-3 glass rounded-lg mx-4 flex-shrink-0">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {['React', 'Next.js', 'Supabase', 'Stripe', 'OpenAI', 'AWS', 'TypeScript', 'Tailwind', 'Expo', 'Framer', 'Vercel', 'PostgreSQL'].map((tech, index) => (
                <div key={`duplicate-${index}`} className="flex items-center space-x-2 px-6 py-3 glass rounded-lg mx-4 flex-shrink-0">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-white font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Solutions Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Industries We Serve
              </span>
            </h2>
            <p className="text-xl text-gray-100">
              Custom solutions for every business sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card p-6 tilt-card group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:neon-blue transition-all duration-300">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Hotels & Booking</h3>
              <p className="text-gray-200 text-sm mb-4">Reservation automation systems</p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Online booking platforms</li>
                <li>• Room management systems</li>
                <li>• Payment processing</li>
                <li>• Guest communication</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 tilt-card group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:neon-purple transition-all duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Agencies</h3>
              <p className="text-gray-200 text-sm mb-4">CRM dashboards & automation</p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Client management systems</li>
                <li>• Project tracking tools</li>
                <li>• Invoice automation</li>
                <li>• Team collaboration</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 tilt-card group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:neon-green transition-all duration-300">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Startups</h3>
              <p className="text-gray-200 text-sm mb-4">MVP SaaS applications</p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Rapid prototyping</li>
                <li>• User authentication</li>
                <li>• Payment integration</li>
                <li>• Analytics dashboards</li>
              </ul>
            </div>
            
            <div className="glass-card p-6 tilt-card group text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:neon-green transition-all duration-300">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI Tools</h3>
              <p className="text-gray-200 text-sm mb-4">Chatbots & AI assistants</p>
              <ul className="text-gray-300 text-xs space-y-1">
                <li>• Customer support bots</li>
                <li>• Data analysis tools</li>
                <li>• Content generation</li>
                <li>• Process automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                What Our Clients Say
              </span>
            </h2>
            <p className="text-xl text-gray-100">
              Real results from real businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 tilt-card group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">SL</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Sarah L.</h4>
                  <p className="text-gray-300 text-sm">Startup Founder, NYC</p>
                </div>
              </div>
              <p className="text-gray-100 leading-relaxed mb-4">
                "LitxTech built our entire automation backend in under a week. The quality and speed exceeded all expectations."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            
            <div className="glass-card p-8 tilt-card group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">MJ</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Michael J.</h4>
                  <p className="text-gray-300 text-sm">Agency Owner, London</p>
                </div>
              </div>
              <p className="text-gray-100 leading-relaxed mb-4">
                "From concept to deployment in 5 days. LitxTech's AI-powered approach saved us months of development time."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            
            <div className="glass-card p-8 tilt-card group">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">AC</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Alex C.</h4>
                  <p className="text-gray-300 text-sm">Hotel Manager, Miami</p>
                </div>
              </div>
              <p className="text-gray-100 leading-relaxed mb-4">
                "The booking automation system they built increased our efficiency by 300%. ROI was immediate and impressive."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                See It In Action
              </span>
            </h2>
            <p className="text-xl text-gray-100">
              Experience our software solutions before you buy
            </p>
          </div>
          
          <div className="glass-card p-8 tilt-card group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Interactive Dashboard Preview</h3>
                <p className="text-gray-100 mb-6 leading-relaxed">
                  Get a hands-on experience with our AI-powered dashboard. See how easy it is to manage your business with our automation tools.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-200">Real-time analytics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-200">Automated workflows</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-200">User management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span className="text-gray-200">Payment processing</span>
                  </div>
                </div>
                <button 
                  onClick={() => setShowDemo(!showDemo)}
                  className="glow-button text-lg px-8 py-4 neon-blue flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>{showDemo ? 'Hide Demo' : 'Try Demo'}</span>
                </button>
              </div>
              
              <div className="relative">
                <div className="glass-card p-4 bg-gradient-to-br from-gray-800 to-gray-900">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-4">dashboard.litxtech.com</span>
                  </div>
                  
                  {showDemo ? (
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-blue-500/20 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-400">1,247</div>
                          <div className="text-xs text-gray-300">Active Users</div>
                        </div>
                        <div className="bg-green-500/20 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-400">$12.4K</div>
                          <div className="text-xs text-gray-300">Revenue</div>
                        </div>
                        <div className="bg-purple-500/20 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-purple-400">98%</div>
                          <div className="text-xs text-gray-300">Uptime</div>
                        </div>
                      </div>
                      <div className="bg-gray-700/50 p-3 rounded-lg">
                        <div className="text-sm text-gray-300 mb-2">Recent Activity</div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-xs text-gray-300">New user registered</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-xs text-gray-300">Payment processed</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span className="text-xs text-gray-300">Automation triggered</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-48">
                      <div className="text-center">
                        <Monitor className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                        <p className="text-gray-400">Click "Try Demo" to see the preview</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Trust & Compliance
              </span>
            </h2>
            <p className="text-xl text-gray-100">
              Your security and trust are our top priorities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="glass-card p-6 text-center tilt-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:neon-green transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Stripe Secure Payments</h3>
              <p className="text-gray-300 text-sm">Bank-level security for all transactions</p>
            </div>
            
            <div className="glass-card p-6 text-center tilt-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:neon-blue transition-all duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">SSL Certified</h3>
              <p className="text-gray-300 text-sm">256-bit encryption for all data</p>
            </div>
            
            <div className="glass-card p-6 text-center tilt-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:neon-purple transition-all duration-300">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Verified U.S. Company</h3>
              <p className="text-gray-300 text-sm">D-U-N-S® 144849529</p>
            </div>
            
            <div className="glass-card p-6 text-center tilt-card group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:neon-green transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">GDPR Compliant</h3>
              <p className="text-gray-300 text-sm">Full data protection compliance</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="glass-card p-6 max-w-4xl mx-auto">
              <p className="text-gray-200 text-sm">
                <strong className="text-white">LITXTECH LLC</strong> is verified through Dun & Bradstreet (D-U-N-S®: 144849529) — ensuring transparent, compliant global operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="glass-card mx-4 mb-4 mt-20">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">LitxTech</h3>
                  <p className="text-xs text-gray-400">Build. Automate. Scale.</p>
                </div>
              </div>
              <p className="text-gray-200 text-sm mb-4">
                Leading technology solutions for modern businesses worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">GH</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">LI</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-bold">X</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-200">
                <li><Link to="/packages" className="hover:text-white transition-colors">Software Packages</Link></li>
                <li><Link to="/ai-builder" className="hover:text-white transition-colors">AI Builder</Link></li>
                <li><Link to="/investment" className="hover:text-white transition-colors">Custom Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-200">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-200">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact Info</h4>
              <div className="space-y-2 text-gray-200 text-sm">
                <p><strong className="text-white">LITXTECH LLC</strong></p>
                <p>D-U-N-S®: 144849529</p>
                <p>15442 Ventura Blvd., STE 201-1834</p>
                <p>Sherman Oaks, California 91403</p>
                <p>📞 +1 (307) 271-5151</p>
                <p>✉️ support@litxtech.com</p>
                <p className="text-xs text-gray-400 mt-2">United States • litxtech.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-200">
            <p>&copy; 2025 LitxTech LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
