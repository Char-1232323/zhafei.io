import styles from './AppShell.module.css'
import { siteContent } from '../data/siteContent'
import { visualAssets } from '../data/visualAssets'
import { navigationLinks } from '../config/navigation'
import Header from '../components/Header/Header'
import HeroPoster from '../components/HeroPoster/HeroPoster'
import MoodSection from '../components/MoodSection/MoodSection'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'

function AppShell() {
  return (
    <div className={styles.page}>
      <main id="top" className={styles.main}>
        <Header brandLabel={siteContent.profile.name} navLinks={navigationLinks} />
        <HeroPoster content={siteContent.profile} heroImage={visualAssets.heroImage} />
        <MoodSection content={siteContent.mood} />
<FeaturedProjects projects={siteContent.projects} />
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
