import type { ContactLink } from '../../types/content'
import styles from './ContactInvitation.module.css'

interface ContactInvitationProps {
  contactLinks: ContactLink[]
}

function ContactInvitation({ contactLinks }: ContactInvitationProps) {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.container}>
        <h2 id="contact-title" className={styles.title}>Let's Connect</h2>
        <p className={styles.message}>
          I'd love to hear from you — whether it's a question, a collaboration, or just to say hello.
        </p>
        
        <div className={styles.links}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.link}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInvitation
