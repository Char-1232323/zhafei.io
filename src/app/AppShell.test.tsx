import { render, screen } from '@testing-library/react'
import AppShell from './AppShell'

describe('AppShell bright redesign', () => {
  it('renders the main sections in the new order', () => {
    render(<AppShell />)

    const sections = screen.getAllByRole('region')
    expect(sections[0]).toHaveAttribute('id', 'hero')
    expect(sections[1]).toHaveAttribute('id', 'mood')
    expect(sections[2]).toHaveAttribute('id', 'projects')
  })
})
