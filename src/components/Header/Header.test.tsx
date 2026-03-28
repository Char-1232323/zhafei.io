import { render, screen, within } from '@testing-library/react'
import { siteContent } from '../../data/siteContent'
import { navigationLinks } from '../../config/navigation'
import Header from './Header'

describe('Header', () => {
  it('renders the shared brand and navigation links', () => {
    render(<Header brandLabel={siteContent.profile.name} navLinks={navigationLinks} />)

    expect(screen.getByRole('link', { name: siteContent.profile.name })).toHaveAttribute('href', '#top')

    const navigation = screen.getByRole('navigation', { name: 'Primary' })

    for (const link of navigationLinks) {
      expect(within(navigation).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })
})
