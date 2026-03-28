import { render, screen } from '@testing-library/react'
import AppShell from './AppShell'

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

  it('renders placeholder labels for each scaffolded section', () => {
    render(<AppShell />)

    expect(screen.getByText('Hero placeholder')).toBeInTheDocument()
    expect(screen.getByText('Mood placeholder')).toBeInTheDocument()
    expect(screen.getByText('Projects placeholder')).toBeInTheDocument()
    expect(screen.getByText('Experience placeholder')).toBeInTheDocument()
    expect(screen.getByText('Skills placeholder')).toBeInTheDocument()
    expect(screen.getByText('Contact placeholder')).toBeInTheDocument()
  })
})
