import { render, screen } from '@testing-library/react'
import { siteContent } from '../data/siteContent'
import AppShell from './AppShell'

describe('AppShell', () => {
  it('renders the owner name and target role from structured content', () => {
    render(<AppShell />)

    expect(screen.getByRole('main')).toHaveAttribute('id', 'top')
    expect(screen.getByText(siteContent.profile.name)).toBeInTheDocument()
    expect(screen.getByText(siteContent.profile.targetRole)).toBeInTheDocument()
  })
})
