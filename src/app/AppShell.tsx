import styles from './AppShell.module.css'
import { siteContent } from '../data/siteContent'
import { navigationLinks } from '../config/navigation'
import Header from '../components/Header/Header'

function AppShell() {
  return (
    <div className={styles.page}>
      <main id="top" className={styles.main}>
        <Header brandLabel={siteContent.profile.name} navLinks={navigationLinks} />
        <section id="hero" aria-label="Hero" />
        <section id="mood" aria-label="Mood" />
        <section id="projects" aria-label="Projects" />
        <section id="experience" aria-label="Experience" />
        <section id="skills" aria-label="Skills" />
        <section id="contact" aria-label="Contact" />
      </main>
    </div>
  )
}

export default AppShell
