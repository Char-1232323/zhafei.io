import styles from './AppShell.module.css'
import { siteContent } from '../data/siteContent'
import { visualAssets } from '../data/visualAssets'
import { navigationLinks } from '../config/navigation'
import Header from '../components/Header/Header'
import HeroPoster from '../components/HeroPoster/HeroPoster'
import MoodSection from '../components/MoodSection/MoodSection'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'
import ExperienceHighlights from '../components/ExperienceHighlights/ExperienceHighlights'
import SkillsPanel from '../components/SkillsPanel/SkillsPanel'
import ContactInvitation from '../components/ContactInvitation/ContactInvitation'

function AppShell() {
  return (
    <div className={styles.page}>
      <main id="top" className={styles.main}>
        <Header brandLabel={siteContent.profile.name} navLinks={navigationLinks} />
        <HeroPoster content={siteContent.profile} heroImage={visualAssets.heroImage} />
        <MoodSection content={siteContent.mood} />
<FeaturedProjects projects={siteContent.projects} />
        <ExperienceHighlights experiences={siteContent.experience} />
        <SkillsPanel skills={siteContent.skills} />
        <ContactInvitation contactLinks={siteContent.contact} />
      </main>
    </div>
  )
}

export default AppShell
