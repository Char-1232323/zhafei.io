import { describe, expect, expectTypeOf, it } from 'vitest'
import { siteContent } from './siteContent'
import { visualAssets } from './visualAssets'
import type { VisualAssets } from '../types/content'

describe('bright redesign content model', () => {
  it('uses the shared visual assets shape', () => {
    expectTypeOf<typeof visualAssets>().toEqualTypeOf<VisualAssets>()
  })

  it('keeps visual and content data internally consistent', () => {
    expect(visualAssets.heroImage.src).toBeTruthy()
    expect(visualAssets.heroImage.alt).toBeTruthy()
    expect(visualAssets.accentImage.src).toMatch(/^https?:\/\//)
    expect(visualAssets.accentImage.alt).toBeTruthy()
    expect(visualAssets.heroImage.creditLabel).toBeTruthy()
    expect(visualAssets.accentImage.creditLabel).toBeTruthy()

    expect(siteContent.profile.emotionalTagline).toBeTruthy()
    expect(siteContent.mood.cards.length).toBeGreaterThan(0)
    expect(
      siteContent.mood.cards.every(
        (card) => card.title.trim().length > 0 && card.description.trim().length > 0
      )
    ).toBe(true)
    expect(siteContent.mood.tags.length).toBeGreaterThan(0)

    expect(siteContent.projects.length).toBeGreaterThan(0)
    expect(siteContent.projects.every((project) => project.name === 'MoEPOT')).toBe(true)
    expect(
      siteContent.projects.every(
        (project) => Boolean(project.codeUrl) && Boolean(project.imageUrl)
      )
    ).toBe(true)

    expect(siteContent.experience.length).toBeGreaterThan(0)
    expect(siteContent.experience.some((item) => item.summary.trim().length > 0)).toBe(true)
  })
})
