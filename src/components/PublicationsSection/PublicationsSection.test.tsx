import { render, screen } from '@testing-library/react'
import { siteContent } from '../../data/siteContent'
import PublicationsSection from './PublicationsSection'

describe('PublicationsSection', () => {
  it('renders publication titles, authors, and abstracts', () => {
    render(<PublicationsSection publications={siteContent.publications} />)

    expect(screen.getByText('Mixture-of-Experts Operator Transformer for Large-Scale PDE Pre-Training')).toBeInTheDocument()
    expect(screen.getByText('Easy3E: Feed-Forward 3D Asset Editing via Rectified Voxel Flow')).toBeInTheDocument()
    expect(screen.getByText('Shimin Hu, Yuanyi Wei, Fei Zha, Yudong Guo, Juyong Zhang')).toBeInTheDocument()
    expect(screen.getByText(/Easy3E proposes a feed-forward 3D editing framework/)).toBeInTheDocument()
  })
})
