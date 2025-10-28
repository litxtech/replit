import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from '../contexts/LanguageContext'

// Floating Code Elements Component
export function FloatingCodeElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const codeElements = [
      '<div>', '</div>', 'function()', 'const', 'let', 'if', 'else', 'return',
      'React', 'Vue', 'Angular', 'Node.js', 'Python', 'JavaScript', 'TypeScript',
      'API', 'Database', 'Server', 'Client', 'Component', 'Hook', 'State',
      'async', 'await', 'Promise', 'fetch', 'JSON', 'CSS', 'HTML'
    ]

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      text: string
      opacity: number
      size: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        text: codeElements[Math.floor(Math.random() * codeElements.length)],
        opacity: Math.random() * 0.3 + 0.1,
        size: Math.random() * 12 + 8
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around screen
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = '#60a5fa'
        ctx.font = `${particle.size}px 'Fira Code', monospace`
        ctx.fillText(particle.text, particle.x, particle.y)
        ctx.restore()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

// Animated Code Block Component
export function AnimatedCodeBlock() {
  const codeLines = [
    "const createApp = () => {",
    "  return {",
    "    name: 'LitxTech',",
    "    type: 'Software Solutions',",
    "    features: ['AI', 'Web', 'Mobile'],",
    "    build: () => 'Amazing Apps'",
    "  }",
    "}"
  ]

  return (
    <div className="relative">
      <motion.div
        className="bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 font-mono text-sm border border-blue-500/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 ml-2">litxtech.js</span>
        </div>
        <div className="space-y-1">
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className="text-blue-300"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <span className="text-gray-500">{String(index + 1).padStart(2, '0')}</span>
              <span className="ml-4">{line}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-4 text-green-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          ✓ App created successfully!
        </motion.div>
      </motion.div>
    </div>
  )
}

// Tech Stack Icons Component
export function TechStackShowcase() {
  const techStack = [
    { name: 'React', icon: '⚛️', color: 'text-blue-400' },
    { name: 'Node.js', icon: '🟢', color: 'text-green-400' },
    { name: 'TypeScript', icon: '🔷', color: 'text-blue-500' },
    { name: 'Python', icon: '🐍', color: 'text-yellow-400' },
    { name: 'AI/ML', icon: '🤖', color: 'text-purple-400' },
    { name: 'Cloud', icon: '☁️', color: 'text-cyan-400' },
    { name: 'Database', icon: '🗄️', color: 'text-orange-400' },
    { name: 'Mobile', icon: '📱', color: 'text-pink-400' }
  ]

  return (
    <div className="grid grid-cols-4 gap-4 md:grid-cols-8">
      {techStack.map((tech, index) => (
        <motion.div
          key={tech.name}
          className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -5 }}
        >
          <div className={`text-3xl mb-2 ${tech.color}`}>
            {tech.icon}
          </div>
          <span className="text-xs text-gray-300 font-medium">
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
  )
}

// Animated Stats Component
export function AnimatedStats() {
  const t = useTranslation()
  
  const stats = [
    { number: '500+', label: t.stats.projectsDelivered, icon: '🚀' },
    { number: '50+', label: t.stats.happyClients, icon: '😊' },
    { number: '24/7', label: t.stats.support, icon: '🛠️' },
    { number: '99%', label: t.stats.successRate, icon: '✅' }
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="text-4xl mb-2">{stat.icon}</div>
          <motion.div
            className="text-3xl font-bold text-white mb-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
          >
            {stat.number}
          </motion.div>
          <div className="text-gray-300 text-sm">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
