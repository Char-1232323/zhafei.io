import { act, fireEvent, render, screen } from '@testing-library/react'
import ContactInvitation from './ContactInvitation'
import { siteContent } from '../../data/siteContent'

const emailHref = siteContent.contact.find((link) => link.label === 'Email')?.href ?? ''
const expectedEmail = emailHref.replace(/^mailto:/, '').split(/[?#]/)[0]

const originalClipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, 'clipboard')
const originalExecCommandDescriptor = Object.getOwnPropertyDescriptor(document, 'execCommand')
const originalVisibilityStateDescriptor = Object.getOwnPropertyDescriptor(document, 'visibilityState')

describe('ContactInvitation', () => {
  const renderContactInvitation = (contactLinks = siteContent.contact) =>
    render(
      <ContactInvitation
        contactLinks={contactLinks}
        title={siteContent.contactSection.title}
        message={siteContent.contactSection.message}
        copiedStatus={siteContent.contactSection.copiedStatus}
        copyFailedStatus={siteContent.contactSection.copyFailedStatus}
      />
    )

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()

    if (originalClipboardDescriptor) {
      Object.defineProperty(navigator, 'clipboard', originalClipboardDescriptor)
    } else {
      // @ts-expect-error test cleanup for patched global
      delete navigator.clipboard
    }

    if (originalExecCommandDescriptor) {
      Object.defineProperty(document, 'execCommand', originalExecCommandDescriptor)
    } else {
      // @ts-expect-error test cleanup for patched global
      delete document.execCommand
    }

    if (originalVisibilityStateDescriptor) {
      Object.defineProperty(document, 'visibilityState', originalVisibilityStateDescriptor)
    } else {
      // @ts-expect-error test cleanup for patched global
      delete document.visibilityState
    }
  })

  it('renders title and message', () => {
    renderContactInvitation()

    expect(screen.getByText(siteContent.contactSection.title)).toBeInTheDocument()
    expect(screen.getByText(siteContent.contactSection.message)).toBeInTheDocument()
  })

  it('renders all contact links', () => {
    renderContactInvitation()

    siteContent.contact.forEach((link) => {
      const linkElement = screen.getByText(link.label)
      expect(linkElement).toBeInTheDocument()
      expect(linkElement).toHaveAttribute('href', link.href)
    })
  })

  it('applies external link attributes correctly', () => {
    renderContactInvitation()

    const githubLink = screen.getByText('GitHub')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    const cvLink = screen.getByText('CV')
    expect(cvLink).toHaveAttribute('target', '_blank')
    expect(cvLink).toHaveAttribute('rel', 'noopener noreferrer')

    const emailLink = screen.getByText('Email')
    expect(emailLink).not.toHaveAttribute('target')
    expect(emailLink).toHaveAttribute('href', expect.stringMatching(/^mailto:/))
  })

  it('copies email and shows fallback message when no mail app handoff is detected', async () => {
    vi.useFakeTimers()
    vi.spyOn(document, 'hasFocus').mockReturnValue(true)

    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText }
    })

    renderContactInvitation()

    const emailLink = screen.getByText('Email')
    emailLink.addEventListener('click', (event) => event.preventDefault())
    fireEvent.click(emailLink)
    await act(async () => {
      vi.advanceTimersByTime(600)
      await Promise.resolve()
    })

    expect(writeText).toHaveBeenCalledWith(expectedEmail)

    expect(screen.getByText(siteContent.contactSection.copiedStatus)).toBeInTheDocument()
  })

  it('shows manual-copy message when fallback copy fails', async () => {
    vi.useFakeTimers()
    vi.spyOn(document, 'hasFocus').mockReturnValue(true)

    const writeText = vi.fn().mockRejectedValue(new Error('clipboard unavailable'))
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText }
    })

    const execCommandMock = vi.fn().mockReturnValue(false)
    Object.defineProperty(document, 'execCommand', {
      configurable: true,
      value: execCommandMock
    })

    renderContactInvitation()

    const emailLink = screen.getByText('Email')
    emailLink.addEventListener('click', (event) => event.preventDefault())
    fireEvent.click(emailLink)
    await act(async () => {
      vi.advanceTimersByTime(600)
      await Promise.resolve()
    })

    expect(writeText).toHaveBeenCalledWith(expectedEmail)

    expect(execCommandMock).toHaveBeenCalledWith('copy')
    expect(screen.getByText(siteContent.contactSection.copyFailedStatus)).toBeInTheDocument()
  })

  it('does not auto-copy when tab is visible but unfocused', async () => {
    vi.useFakeTimers()

    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText }
    })

    Object.defineProperty(document, 'visibilityState', {
      configurable: true,
      value: 'visible'
    })
    vi.spyOn(document, 'hasFocus').mockReturnValue(false)

    renderContactInvitation()

    const emailLink = screen.getByText('Email')
    emailLink.addEventListener('click', (event) => event.preventDefault())
    fireEvent.click(emailLink)
    await act(async () => {
      vi.advanceTimersByTime(600)
      await Promise.resolve()
    })

    expect(writeText).not.toHaveBeenCalled()
    expect(screen.queryByText(siteContent.contactSection.copiedStatus)).not.toBeInTheDocument()
  })

  it('copies only pure email when mailto includes query and hash', async () => {
    vi.useFakeTimers()
    vi.spyOn(document, 'hasFocus').mockReturnValue(true)

    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText }
    })

    render(
      <ContactInvitation
        contactLinks={[
          { label: 'Email', href: 'mailto:person@example.com?subject=Hello#compose' }
        ]}
        title={siteContent.contactSection.title}
        message={siteContent.contactSection.message}
        copiedStatus={siteContent.contactSection.copiedStatus}
        copyFailedStatus={siteContent.contactSection.copyFailedStatus}
      />
    )

    const emailLink = screen.getByText('Email')
    emailLink.addEventListener('click', (event) => event.preventDefault())
    fireEvent.click(emailLink)
    await act(async () => {
      vi.advanceTimersByTime(600)
      await Promise.resolve()
    })

    expect(writeText).toHaveBeenCalledWith('person@example.com')
  })

  it('clears status message after timeout', async () => {
    vi.useFakeTimers()
    vi.spyOn(document, 'hasFocus').mockReturnValue(true)

    const writeText = vi.fn().mockResolvedValue(undefined)
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText }
    })

    renderContactInvitation()

    const emailLink = screen.getByText('Email')
    emailLink.addEventListener('click', (event) => event.preventDefault())
    fireEvent.click(emailLink)

    await act(async () => {
      vi.advanceTimersByTime(600)
      await Promise.resolve()
    })

    expect(screen.getByText(siteContent.contactSection.copiedStatus)).toBeInTheDocument()

    await act(async () => {
      vi.advanceTimersByTime(1800)
      await Promise.resolve()
    })

    expect(screen.queryByText(siteContent.contactSection.copiedStatus)).not.toBeInTheDocument()
  })
})
