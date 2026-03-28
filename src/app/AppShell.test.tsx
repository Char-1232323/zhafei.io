import { render, screen } from '@testing-library/react'
import AppShell from './AppShell'

describe('AppShell', () => {
  it('renders the owner name and target role from structured content', () => {
    render(<AppShell />)

    expect(screen.getByText('Fey')).toBeInTheDocument()
    expect(screen.getByText(/seeking frontend or full-stack internship/i)).toBeInTheDocument()
  })
})
