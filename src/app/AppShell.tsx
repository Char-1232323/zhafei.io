import styles from './AppShell.module.css'
import { siteContent } from '../data/siteContent'

function AppShell() {
  return (
    <div className={styles.page}>
      <main id="top" className={styles.main}>
        <p className={styles.kicker}>{siteContent.profile.role}</p>
        <h1 className={styles.placeholder}>{siteContent.profile.name}</h1>
        <p className={styles.subtitle}>{siteContent.profile.targetRole}</p>
      </main>
    </div>
  )
}

export default AppShell
