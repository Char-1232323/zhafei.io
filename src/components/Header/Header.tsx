import styles from './Header.module.css'

import type { NavigationLink } from '../../config/navigation'

interface HeaderProps {
  brandLabel: string
  navLinks: NavigationLink[]
}

function Header({ brandLabel, navLinks }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a href="#top" className={styles.brand}>
        {brandLabel}
      </a>

      <nav aria-label="Primary" className={styles.nav}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
