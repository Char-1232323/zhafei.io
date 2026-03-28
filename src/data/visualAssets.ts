import type { VisualAssets } from '../types/content'

const heroImageUrl = new URL('../assets/hero-illustration.webp', import.meta.url).href

export const visualAssets: VisualAssets = {
  heroImage: {
    src: heroImageUrl,
    alt: 'Furina character illustration',
    creditLabel: 'Fan art',
  },
  accentImage: {
    src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=700&q=80',
    alt: 'Light atmospheric placeholder artwork for supporting sections',
    creditLabel: 'Temporary reference image',
    creditUrl: 'https://unsplash.com/'
  }
}
