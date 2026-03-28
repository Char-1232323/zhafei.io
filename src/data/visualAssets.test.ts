import { describe, expect, it } from 'vitest'
import { siteContent } from './siteContent'
import { visualAssets } from './visualAssets'

describe('bright redesign content model', () => {
  it('provides a hero image, mood content, and fuller draft sections', () => {
    expect(visualAssets.heroImage.src).toMatch(/^https?:\/\//)
    expect(siteContent.profile.emotionalTagline).toBeTruthy()
    expect(siteContent.mood.cards).toHaveLength(3)
    expect(siteContent.projects.length).toBeGreaterThanOrEqual(3)
    expect(siteContent.experience.length).toBeGreaterThanOrEqual(2)
  })
})
