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
        id: 'starter',
        name: 'STARTER',
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
        stripePriceId: 'price_starter_990'
      },
      {
        id: 'professional',
        name: 'PROFESSIONAL',
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
        stripePriceId: 'price_professional_2490'
      },
      {
        id: 'enterprise',
        name: 'ENTERPRISE',
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
        stripePriceId: 'price_enterprise_4990'
      }
    ]
  },
  aiIntegration: {
    title: "Artificial Intelligence Integration",
    description: "AI destekli otomasyon ve akıllı sistemler",
    packages: [
      {
        id: 'ai-lite',
        name: 'AI LITE',
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
        stripePriceId: 'price_ai_lite_1490'
      },
      {
        id: 'ai-pro',
        name: 'AI PRO',
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
        stripePriceId: 'price_ai_pro_3490'
      },
      {
        id: 'ai-enterprise',
        name: 'AI ENTERPRISE',
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
        stripePriceId: 'price_ai_enterprise_8990'
      }
    ]
  },
  hospitality: {
    title: "Hospitality & Booking Systems",
    description: "Otel, restoran ve turizm çözümleri",
    packages: [
      {
        id: 'smart-hotel',
        name: 'SMART HOTEL',
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
        stripePriceId: 'price_smart_hotel_2990'
      },
      {
        id: 'restaurant-pro',
        name: 'RESTAURANT PRO',
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
        stripePriceId: 'price_restaurant_pro_1790'
      },
      {
        id: 'travel-agency-hub',
        name: 'TRAVEL & AGENCY HUB',
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
        stripePriceId: 'price_travel_agency_hub_3790'
      }
    ]
  },
  corporate: {
    title: "Corporate & Enterprise Solutions",
    description: "Kurumsal ve büyük işletme çözümleri",
    packages: [
      {
        id: 'corporate-site',
        name: 'CORPORATE SITE',
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
        stripePriceId: 'price_corporate_site_1590'
      },
      {
        id: 'erp-crm-suite',
        name: 'ERP / CRM SUITE',
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
        stripePriceId: 'price_erp_crm_suite_5490'
      },
      {
        id: 'ecommerce-ultra',
        name: 'ECOMMERCE ULTRA',
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
        stripePriceId: 'price_ecommerce_ultra_3990'
      }
    ]
  },
  marketing: {
    title: "Marketing & Branding Tools",
    description: "Pazarlama ve marka yönetimi araçları",
    packages: [
      {
        id: 'brand-launch-kit',
        name: 'BRAND LAUNCH KIT',
        price: 1290,
        description: 'For new businesses.',
        features: [
          'Logo & color identity',
          'Basic website (1-page)',
          'Landing page copywriting (AI-assisted)',
          'SEO meta setup',
          'Google Analytics'
        ],
        color: 'text-violet-400',
        stripePriceId: 'price_brand_launch_kit_1290'
      },
      {
        id: 'sales-automation-pro',
        name: 'SALES AUTOMATION PRO',
        price: 2990,
        description: 'Boost conversions with smart tools.',
        features: [
          'Email automation system',
          'AI-based lead qualification',
          'Stripe + CRM connection',
          'Analytics dashboard',
          '1-month support'
        ],
        color: 'text-rose-400',
        stripePriceId: 'price_sales_automation_pro_2990'
      },
      {
        id: 'full-digital-suite',
        name: 'FULL DIGITAL SUITE',
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
        stripePriceId: 'price_full_digital_suite_5990'
      }
    ]
  },
  custom: {
    title: "Custom Enterprise Solutions",
    description: "Özel kurumsal çözümler",
    packages: [
      {
        id: 'custom-software',
        name: 'CUSTOM SOFTWARE DEVELOPMENT',
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
        stripePriceId: 'price_custom_software_9990'
      },
      {
        id: 'annual-maintenance',
        name: 'ANNUAL MAINTENANCE PLAN',
        price: 1200,
        description: 'Yearly maintenance and support.',
        features: [
          'Monthly backups',
          'Security & patch updates',
          'Performance optimization',
          'Technical support priority'
        ],
        color: 'text-zinc-400',
        stripePriceId: 'price_annual_maintenance_1200'
      },
      {
        id: 'ui-ux-design',
        name: 'UI/UX DESIGN SUITE',
        price: 1590,
        description: 'Full design system and components.',
        features: [
          'Full design system (Figma + Tailwind)',
          'Component library',
          'Mobile & web responsive layouts',
          'Brand alignment review'
        ],
        color: 'text-stone-400',
        stripePriceId: 'price_ui_ux_design_1590'
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
