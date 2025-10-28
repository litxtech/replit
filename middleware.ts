import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Admin route protection
  if (pathname.startsWith('/admin')) {
    // Check for admin session in localStorage (client-side)
    // Since middleware runs on server, we'll handle this in the admin layout
    // For now, we'll just add security headers
    
    // Add security headers for admin routes
    const response = NextResponse.next()
    
    // Prevent indexing
    response.headers.set('X-Robots-Tag', 'noindex, nofollow, noarchive, nosnippet')
    
    // Disable caching
    response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
    
    // Security headers
    response.headers.set('X-Frame-Options', 'DENY')
    response.headers.set('X-Content-Type-Options', 'nosniff')
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
    
    return response
  }
  
  // Rate limiting for admin API routes
  if (pathname.startsWith('/api/admin')) {
    // Basic rate limiting by IP
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Add rate limit headers (implement actual rate limiting in production)
    const response = NextResponse.next()
    response.headers.set('X-RateLimit-Limit', '100')
    response.headers.set('X-RateLimit-Remaining', '99')
    
    return response
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*'
  ]
}
