import styles from './AppShell.module.css'
import { siteContent } from '../data/siteContent'
import Header from '../components/Header/Header'

function AppShell() {
  return (
    <div className={styles.page}>
      <main id="top" className={styles.main}>
        <Header />
        <p className={styles.kicker}>{siteContent.profile.role}</p>
        <h1 className={styles.placeholder}>{siteContent.profile.name}</h1>
        <p className={styles.subtitle}>{siteContent.profile.targetRole}</p>
      </main>
    </div>
  )
}

export default AppShell
