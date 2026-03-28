import { render, screen } from '@testing-library/react'
import ContactInvitation from './ContactInvitation'
import { siteContent } from '../../data/siteContent'

describe('ContactInvitation', () => {
  it('renders title and message', () => {
    render(<ContactInvitation contactLinks={siteContent.contact} />)

    expect(screen.getByText("Let's Connect")).toBeInTheDocument()
    expect(screen.getByText(/I'd love to hear from you/)).toBeInTheDocument()
  })

  it('renders all contact links', () => {
    render(<ContactInvitation contactLinks={siteContent.contact} />)

    siteContent.contact.forEach((link) => {
      const linkElement = screen.getByText(link.label)
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', link.href)
    })
  })

  it('applies external link attributes correctly', () => {
    render(<ContactInvitation contactLinks={siteContent.contact} />)

    const githubLink = screen.getByText('GitHub')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    const emailLink = screen.getByText('Email')
    expect(emailLink).not.toHaveAttribute('target')
  })
})
