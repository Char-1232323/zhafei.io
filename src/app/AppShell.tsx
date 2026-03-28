import styles from './AppShell.module.css'
import { siteContent } from '../data/siteContent'
import { navigationLinks } from '../config/navigation'
import Header from '../components/Header/Header'

function AppShell() {
  return (
    <div className={styles.page}>
      <main id="top" className={styles.main}>
        <Header brandLabel={siteContent.profile.name} navLinks={navigationLinks} />
        <section id="hero" aria-label="Hero">
          <p>Hero placeholder</p>
        </section>
        <section id="mood" aria-label="Mood">
          <p>Mood placeholder</p>
        </section>
        <section id="projects" aria-label="Projects">
          <p>Projects placeholder</p>
        </section>
        <section id="experience" aria-label="Experience">
          <p>Experience placeholder</p>
        </section>
        <section id="skills" aria-label="Skills">
          <p>Skills placeholder</p>
        </section>
        <section id="contact" aria-label="Contact">
          <p>Contact placeholder</p>
        </section>
      </main>
    </div>
  )
}

export default AppShell
