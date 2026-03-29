import styles from './Header.module.css'

import type { NavigationLink } from '../../config/navigation.i18n'
import type { LanguageCode } from '../../i18n/language'

interface HeaderProps {
  brandLabel: string
  navLinks: NavigationLink[]
  language: LanguageCode
  onLanguageChange: (language: LanguageCode) => void
}

function Header({ brandLabel, navLinks, language, onLanguageChange }: HeaderProps) {
  return (
    <header className={styles.header}>
      <a href="#top" className={styles.brand}>
        {brandLabel}
      </a>

      <nav aria-label={language === 'zh' ? '主导航' : 'Primary'} className={styles.nav}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>

      <div
        className={styles.languageToggle}
        role="group"
        aria-label={language === 'zh' ? '语言切换' : 'Language toggle'}
      >
        <button
          type="button"
          className={styles.languageButton}
          aria-pressed={language === 'en'}
          onClick={() => onLanguageChange('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={styles.languageButton}
          aria-pressed={language === 'zh'}
          onClick={() => onLanguageChange('zh')}
        >
          中文
        </button>
      </div>
    </header>
  )
}

export default Header
