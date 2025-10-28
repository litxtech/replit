// Yeni paket fiyatlandırması - 6 kategori
interface Package {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  color: string
  popular?: boolean
  stripePriceId: string
}

interface PackageCategory {
  title: string
  description: string
  packages: Package[]
}

export const PACKAGE_CATEGORIES: Record<string, PackageCategory> = {
  webSaaS: {
    title: "Web & SaaS Development",
    description: "Modern web uygulamaları ve SaaS platformları",
    packages: [
      {
        id: 'starter-website',
        name: 'Starter Website',
        price: 990,
        description: 'Perfect for individuals and small businesses.',
        features: [
          '1 responsive landing page',
          'Basic branding setup',
          'Contact form integration',
          'SEO setup (Lite)',
          '7-day delivery',
          '1 revision included',
          'Hosting setup'
        ],
        color: 'text-blue-400',
        stripePriceId: 'price_starter_website'
      },
      {
        id: 'professional-website-suite',
        name: 'Professional Website Suite',
        price: 2490,
        description: 'Best for growing startups needing automation.',
        features: [
          'Up to 5 dynamic pages',
          'Admin dashboard',
          'API integrations',
          'Authentication system',
          'Database setup (Supabase / PostgreSQL)',
          'Stripe integration',
          'Priority support',
          '2 revisions',
          '10-day delivery'
        ],
        color: 'text-purple-400',
        popular: true,
        stripePriceId: 'price_professional_website_suite'
      },
      {
        id: 'enterprise-saas-platform',
        name: 'Enterprise SaaS Platform',
        price: 4990,
        description: 'For SaaS products and scalable business platforms.',
        features: [
          'Unlimited pages',
          'Full user management',
          'Role-based access control',
          'Payment system + subscriptions',
          'AI automation (DeepSeek / OpenAI)',
          'Custom dashboard & analytics',
          'Email automation',
          'Source code included',
          'Dedicated developer',
          '15-day delivery'
        ],
        color: 'text-pink-400',
        stripePriceId: 'price_enterprise_saas_platform'
      }
    ]
  },
  aiIntegration: {
    title: "Artificial Intelligence Integration",
    description: "AI destekli otomasyon ve akıllı sistemler",
    packages: [
      {
        id: 'ai-lite',
        name: 'AI Lite',
        price: 1490,
        description: 'Entry-level AI integration for websites or apps.',
        features: [
          'Chatbot setup (OpenAI or DeepSeek)',
          'FAQ + lead capture integration',
          'Custom prompt tuning',
          'API configuration',
          '5-day delivery'
        ],
        color: 'text-green-400',
        stripePriceId: 'price_ai_lite'
      },
      {
        id: 'ai-pro',
        name: 'AI Pro',
        price: 3490,
        description: 'Advanced automation & data-driven AI.',
        features: [
          'Multi-agent system setup',
          'AI form assistant / text generator',
          'CRM + automation bridge',
          'Database memory for AI',
          'Stripe billing integration',
          '10-day delivery'
        ],
        color: 'text-yellow-400',
        stripePriceId: 'price_ai_pro'
      },
      {
        id: 'ai-enterprise',
        name: 'AI Enterprise',
        price: 8990,
        description: 'For large-scale AI-driven businesses.',
        features: [
          'Private AI model training',
          'Data pipeline setup (Supabase + Vercel Edge)',
          'Multilingual support (LangChain)',
          'Voice input & transcription',
          'Team analytics dashboard',
          'Full data compliance (GDPR-ready)',
          '20-day delivery'
        ],
        color: 'text-red-400',
        stripePriceId: 'price_ai_enterprise'
      }
    ]
  },
  hospitality: {
    title: "Hospitality & Booking Systems",
    description: "Otel, restoran ve turizm çözümleri",
    packages: [
      {
        id: 'smart-hotel-suite',
        name: 'Smart Hotel Suite',
        price: 2990,
        description: 'For hotels, villas, and B&Bs.',
        features: [
          'Dynamic room booking system',
          'Stripe & PayPal integration',
          'Admin management panel',
          'Calendar & availability sync',
          'Invoice automation',
          'WhatsApp booking bot',
          'SEO optimization'
        ],
        color: 'text-indigo-400',
        stripePriceId: 'price_smart_hotel_suite'
      },
      {
        id: 'restaurant-pro',
        name: 'Restaurant Pro',
        price: 1790,
        description: 'For restaurants, cafés, and bars.',
        features: [
          'Menu + order system',
          'Payment gateway integration',
          'Reservation panel',
          'Multi-language support',
          'AI menu recommendation',
          'Customer loyalty module'
        ],
        color: 'text-orange-400',
        stripePriceId: 'price_restaurant_pro'
      },
      {
        id: 'travel-agency-hub',
        name: 'Travel & Agency Hub',
        price: 3790,
        description: 'For tourism agencies and transfer services.',
        features: [
          'Destination management system',
          'Partner/vendor portal',
          'Auto-invoice & dynamic pricing',
          'Multi-language dashboard',
          'CRM integration'
        ],
        color: 'text-teal-400',
        stripePriceId: 'price_travel_agency_hub'
      }
    ]
  },
  corporate: {
    title: "Corporate & Enterprise Solutions",
    description: "Kurumsal ve büyük işletme çözümleri",
    packages: [
      {
        id: 'corporate-site',
        name: 'Corporate Site',
        price: 1590,
        description: 'For professional companies needing authority online.',
        features: [
          'Corporate design system',
          'Team & services sections',
          'Blog + news dashboard',
          'Contact & map integrations',
          'SEO boost plan',
          'Analytics setup'
        ],
        color: 'text-gray-400',
        stripePriceId: 'price_corporate_site'
      },
      {
        id: 'erp-crm-suite',
        name: 'ERP / CRM Suite',
        price: 5490,
        description: 'Internal management software.',
        features: [
          'Client management system',
          'Employee & HR module',
          'Finance + invoice automation',
          'API-ready for external systems',
          'Dashboard analytics',
          'Secure authentication',
          'Cloud backup'
        ],
        color: 'text-cyan-400',
        stripePriceId: 'price_erp_crm_suite'
      },
      {
        id: 'ecommerce-ultra',
        name: 'E-Commerce Ultra',
        price: 3990,
        description: 'For online stores & product platforms.',
        features: [
          'Product management',
          'Payment gateway (Stripe, PayPal, Iyzico)',
          'Admin & order dashboard',
          'Customer accounts',
          'Cart, wishlist, coupon system',
          'AI product recommendations'
        ],
        color: 'text-emerald-400',
        stripePriceId: 'price_ecommerce_ultra'
      }
    ]
  },
  custom: {
    title: "Custom Enterprise Solutions",
    description: "Özel kurumsal çözümler",
    packages: [
      {
        id: 'full-digital-suite',
        name: 'Full Digital Suite',
        price: 5990,
        description: 'For marketing agencies or corporate teams.',
        features: [
          'Multi-channel campaign panel',
          'API-based analytics integration',
          'AI content generation',
          'Customer segmentation tools',
          'Dedicated strategy dashboard'
        ],
        color: 'text-amber-400',
        stripePriceId: 'price_full_digital_suite'
      },
      {
        id: 'custom-enterprise-solutions',
        name: 'Custom Enterprise Solutions',
        price: 9990,
        description: 'Tailored solutions for corporations & startups.',
        features: [
          'Full product lifecycle management',
          'Advanced cloud architecture',
          'AI integrations (OpenAI, DeepSeek)',
          'Multi-language dashboards',
          '24/7 support',
          'Source code ownership guaranteed'
        ],
        color: 'text-slate-400',
        stripePriceId: 'price_custom_enterprise_solutions'
      },
      {
        id: 'ui-ux-design-suite',
        name: 'UI/UX Design Suite',
        price: 1590,
        description: 'Full design system and components.',
        features: [
          'Full design system (Figma + Tailwind)',
          'Component library',
          'Mobile & web responsive layouts',
          'Brand alignment review'
        ],
        color: 'text-stone-400',
        stripePriceId: 'price_ui_ux_design_suite'
      }
    ]
  }
}

// Tüm paketleri tek listede topla
export const ALL_PACKAGES = Object.values(PACKAGE_CATEGORIES).flatMap(category => 
  category.packages.map(pkg => ({
    ...pkg,
    category: category.title,
    categoryDescription: category.description
  }))
)

// Popüler paketleri al
export const POPULAR_PACKAGES = ALL_PACKAGES.filter(pkg => pkg.popular === true)

// Kategori başına en popüler paketi al
export const FEATURED_PACKAGES = Object.values(PACKAGE_CATEGORIES).map(category => 
  category.packages.find(pkg => pkg.popular === true) || category.packages[0]
)
