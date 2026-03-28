import type { ImageAsset } from '../types/content'

export const visualAssets: {
  heroImage: ImageAsset
  accentImage: ImageAsset
} = {
  heroImage: {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    alt: 'Soft pink-toned placeholder artwork for the hero section',
    creditLabel: 'Temporary reference image',
    creditUrl: 'https://unsplash.com/'
  },
  accentImage: {
    src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=700&q=80',
    alt: 'Light atmospheric placeholder artwork for supporting sections',
    creditLabel: 'Temporary reference image',
    creditUrl: 'https://unsplash.com/'
  }
}
