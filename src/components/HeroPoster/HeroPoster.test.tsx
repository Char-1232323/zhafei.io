import { render, screen } from '@testing-library/react'
import HeroPoster, { type HeroPosterContent } from './HeroPoster'
import { siteContent } from '../../data/siteContent'
import { visualAssets } from '../../data/visualAssets'

describe('HeroPoster', () => {
  it('renders the hero-specific content contract and hero image', () => {
    const heroContent: HeroPosterContent = {
      name: siteContent.profile.name,
      role: siteContent.profile.role,
      targetRole: siteContent.profile.targetRole,
      intro: siteContent.profile.intro,
      emotionalTagline: siteContent.profile.emotionalTagline,
      actions: siteContent.profile.actions,
      stats: siteContent.profile.stats
    }

    render(<HeroPoster content={heroContent} heroImage={visualAssets.heroImage} />)

    expect(screen.getByText(siteContent.profile.emotionalTagline)).toBeInTheDocument()
    expect(screen.getByText(siteContent.profile.targetRole)).toBeInTheDocument()
    expect(screen.getByText(siteContent.profile.stats[0].value)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: visualAssets.heroImage.alt })).toHaveAttribute('src', visualAssets.heroImage.src)
  })
})
