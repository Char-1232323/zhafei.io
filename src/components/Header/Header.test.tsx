import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders anchor links for all homepage sections', () => {
    render(<Header />)

    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience')
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills')
    expect(screen.getByRole('link', { name: 'Education' })).toHaveAttribute('href', '#education')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })
})
