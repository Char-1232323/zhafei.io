import { describe, expect, expectTypeOf, it } from 'vitest'
import { siteContent } from './siteContent'
import { visualAssets } from './visualAssets'
import type { VisualAssets } from '../types/content'

describe('bright redesign content model', () => {
  it('uses the shared visual assets shape', () => {
    expectTypeOf<typeof visualAssets>().toEqualTypeOf<VisualAssets>()
  })

  it('provides a hero image, mood content, and fuller draft sections', () => {
    expect(visualAssets.heroImage.src).toBeTruthy()
    expect(visualAssets.accentImage.src).toMatch(/^https?:\/\//)
    expect(visualAssets.heroImage.creditLabel).toBeTruthy()
    expect(visualAssets.accentImage.creditLabel).toBeTruthy()
    expect(siteContent.profile.emotionalTagline).toBeTruthy()
    expect(siteContent.mood.cards).toHaveLength(3)
    expect(siteContent.mood.tags.length).toBeGreaterThan(0)
    expect(siteContent.projects.length).toBeGreaterThanOrEqual(3)
    expect(siteContent.experience.length).toBeGreaterThanOrEqual(2)
  })
})
