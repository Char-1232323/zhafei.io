import { render, screen } from '@testing-library/react'
import AppShell from './AppShell'
import { siteContent } from '../data/siteContent'

describe('AppShell bright redesign', () => {
  it('renders the main sections in the new order', () => {
    render(<AppShell />)

    const sections = screen.getAllByRole('region')
    expect(sections.map((section) => section.id)).toEqual([
      'hero',
      'about',
      'projects',
      'publications',
      'experience',
      'contact'
    ])
  })

  it('renders all sections with real content', () => {
    render(<AppShell />)

    const heroRegion = screen.getByRole('region', { name: siteContent.profile.name })

    expect(heroRegion).toHaveAttribute('id', 'hero')
    expect(heroRegion).toHaveTextContent(siteContent.profile.name)
    expect(heroRegion).toHaveTextContent(siteContent.profile.emotionalTagline)
    expect(screen.getByText(siteContent.mood.intro)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Publications' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Let's Connect" })).toBeInTheDocument()
  })
})
