import { render, screen } from '@testing-library/react'
import AppShell from './AppShell'

describe('AppShell', () => {
  it('renders the homepage landmark', () => {
    render(<AppShell />)

    expect(screen.getByRole('main')).toHaveAttribute('id', 'top')
  })
})
