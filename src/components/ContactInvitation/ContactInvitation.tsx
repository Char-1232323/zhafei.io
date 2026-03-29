import { useEffect, useRef, useState } from 'react'
import type { ContactLink } from '../../types/content'
import styles from './ContactInvitation.module.css'

interface ContactInvitationProps {
  contactLinks: ContactLink[]
  title: string
  message: string
  copiedStatus: string
  copyFailedStatus: string
}

const MAILTO_PREFIX = 'mailto:'
const FALLBACK_DELAY_MS = 600
const STATUS_CLEAR_DELAY_MS = 1800

function extractEmailFromMailto(href: string): string | null {
  if (!href.startsWith(MAILTO_PREFIX)) {
    return null
  }

  const email = href.slice(MAILTO_PREFIX.length).split(/[?#]/)[0]?.trim()
  return email || null
}

async function copyTextToClipboard(value: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(value)
      return true
    }
  } catch {
    // fall back to execCommand path
  }

  const textarea = document.createElement('textarea')
  textarea.value = value
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'absolute'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()

  const copied = typeof document.execCommand === 'function' && document.execCommand('copy')

  document.body.removeChild(textarea)
  return copied
}

function ContactInvitation({
  contactLinks,
  title,
  message,
  copiedStatus,
  copyFailedStatus
}: ContactInvitationProps) {
  const [statusMessage, setStatusMessage] = useState('')
  const fallbackTimerRef = useRef<number | null>(null)
  const clearMessageTimerRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (fallbackTimerRef.current !== null) {
        window.clearTimeout(fallbackTimerRef.current)
      }

      if (clearMessageTimerRef.current !== null) {
        window.clearTimeout(clearMessageTimerRef.current)
      }
    }
  }, [])

  const handleEmailClick = (href: string) => {
    const email = extractEmailFromMailto(href)

    if (!email) {
      return
    }

    if (fallbackTimerRef.current !== null) {
      window.clearTimeout(fallbackTimerRef.current)
    }

    fallbackTimerRef.current = window.setTimeout(async () => {
      if (document.visibilityState !== 'visible' || !document.hasFocus()) {
        return
      }

      const copied = await copyTextToClipboard(email)

      setStatusMessage(
        copied
          ? copiedStatus
          : copyFailedStatus
      )

      if (clearMessageTimerRef.current !== null) {
        window.clearTimeout(clearMessageTimerRef.current)
      }

      clearMessageTimerRef.current = window.setTimeout(() => {
        setStatusMessage('')
      }, STATUS_CLEAR_DELAY_MS)
    }, FALLBACK_DELAY_MS)
  }

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.container}>
        <h2 id="contact-title" className={styles.title}>{title}</h2>
        <p className={styles.message}>{message}</p>
        
        <div className={styles.links}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              onClick={link.href.startsWith(MAILTO_PREFIX) ? () => handleEmailClick(link.href) : undefined}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className={styles.fallbackHint} role="status" aria-live="polite">
          {statusMessage}
        </p>
      </div>
    </section>
  )
}

export default ContactInvitation
