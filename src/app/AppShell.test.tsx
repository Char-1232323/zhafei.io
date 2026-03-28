import { render, screen } from '@testing-library/react'
import AppShell from './AppShell'
import { siteContent } from '../data/siteContent'

describe('AppShell bright redesign', () => {
  it('renders the main sections in the new order', () => {
    render(<AppShell />)

    const sections = screen.getAllByRole('region')
    expect(sections.map((section) => section.id)).toEqual([
      'hero',
      'mood',
      'projects',
      'experience',
      'skills',
      'contact'
    ])
  })

  it('renders the real hero section and keeps placeholders for unfinished regions', () => {
    render(<AppShell />)

    const heroRegion = screen.getByRole('region', { name: siteContent.profile.name })

    expect(heroRegion).toHaveAttribute('id', 'hero')
    expect(heroRegion).toHaveTextContent(siteContent.profile.name)
    expect(heroRegion).toHaveTextContent(siteContent.profile.emotionalTagline)
    expect(screen.getByText(siteContent.mood.intro)).toBeInTheDocument()
    expect(screen.getByText('Projects placeholder')).toBeInTheDocument()
    expect(screen.getByText('Experience placeholder')).toBeInTheDocument()
    expect(screen.getByText('Skills placeholder')).toBeInTheDocument()
    expect(screen.getByText('Contact placeholder')).toBeInTheDocument()
  })
})
