import styles from './Header.module.css'

const links = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
]

function Header() {
  return (
    <header className={styles.header}>
      <a href="#top" className={styles.brand}>
        Fey
      </a>

      <nav aria-label="Primary" className={styles.nav}>
        {links.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
