import styles from './AppShell.module.css'
import { siteContent } from '../data/siteContent'
import { visualAssets } from '../data/visualAssets'
import { navigationLinks } from '../config/navigation'
import Header from '../components/Header/Header'
import HeroPoster from '../components/HeroPoster/HeroPoster'
import MoodSection from '../components/MoodSection/MoodSection'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'
import PublicationsSection from '../components/PublicationsSection/PublicationsSection'
import ExperienceHighlights from '../components/ExperienceHighlights/ExperienceHighlights'
import ContactInvitation from '../components/ContactInvitation/ContactInvitation'

function AppShell() {
  return (
    <div className={styles.page}>
      <main id="top" className={styles.main}>
        <Header brandLabel={siteContent.profile.name} navLinks={navigationLinks} />
        <HeroPoster content={siteContent.profile} heroImage={visualAssets.heroImage} />
        <MoodSection content={siteContent.mood} />
        <ExperienceHighlights experiences={siteContent.experience} />
        <PublicationsSection publications={siteContent.publications} />
        <FeaturedProjects projects={siteContent.projects} />
        <ContactInvitation contactLinks={siteContent.contact} />
      </main>
    </div>
  )
}

export default AppShell
