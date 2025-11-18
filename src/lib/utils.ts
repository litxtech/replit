import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openMyTrabzonDeepLink(path: string, hash?: string) {
  if (typeof window === 'undefined') return false
  const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)
  if (!isMobile) return false

  const normalizedPath = path.replace(/^\/+/, '')
  const suffix = hash || ''
  const deepLink = `mytrabzon://${normalizedPath}${suffix}`

  try {
    window.location.href = deepLink
    return true
  } catch (error) {
    console.warn('Deep link failed:', error)
    return false
  }
}
