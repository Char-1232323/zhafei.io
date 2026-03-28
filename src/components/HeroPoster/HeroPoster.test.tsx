import { render, screen } from '@testing-library/react'
import HeroPoster from './HeroPoster'
import { siteContent } from '../../data/siteContent'
import { visualAssets } from '../../data/visualAssets'

describe('HeroPoster', () => {
  it('renders the emotional tagline and hero image', () => {
    render(<HeroPoster profile={siteContent.profile} heroImage={visualAssets.heroImage} />)

    expect(screen.getByText(siteContent.profile.emotionalTagline)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: visualAssets.heroImage.alt })).toHaveAttribute('src', visualAssets.heroImage.src)
  })
})
