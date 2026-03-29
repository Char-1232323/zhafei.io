import { render, screen } from '@testing-library/react'
import { siteContent } from '../../data/siteContent'
import PublicationsSection from './PublicationsSection'

describe('PublicationsSection', () => {
  it('renders publication titles, authors, and abstracts', () => {
    render(
      <PublicationsSection
        publications={siteContent.publications}
        title={siteContent.publicationsSection.title}
        subtitle={siteContent.publicationsSection.subtitle}
      />
    )

    expect(screen.getByText('Mixture-of-Experts Operator Transformer for Large-Scale PDE Pre-Training')).toBeInTheDocument()
    expect(screen.getByText('Easy3E: Feed-Forward 3D Asset Editing via Rectified Voxel Flow')).toBeInTheDocument()
    expect(screen.getByText(/Shimin Hu/)).toBeInTheDocument()
    expect(screen.getAllByText('Fei Zha', { selector: 'strong' })).toHaveLength(2)
    expect(screen.getByText(/Easy3E proposes a feed-forward 3D editing framework/)).toBeInTheDocument()
  })
})
