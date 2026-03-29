import { useEffect, useState } from 'react'
import styles from './AppShell.module.css'
import { getSiteContent } from '../data/siteContent.i18n'
import { visualAssets } from '../data/visualAssets'
import { getNavigationLinks } from '../config/navigation.i18n'
import Header from '../components/Header/Header'
import HeroPoster from '../components/HeroPoster/HeroPoster'
import MoodSection from '../components/MoodSection/MoodSection'
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects'
import PublicationsSection from '../components/PublicationsSection/PublicationsSection'
import ExperienceHighlights from '../components/ExperienceHighlights/ExperienceHighlights'
import ContactInvitation from '../components/ContactInvitation/ContactInvitation'
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_STORAGE_KEY,
  parseLanguageCode,
  type LanguageCode
} from '../i18n/language'

function getInitialLanguage(): LanguageCode {
  try {
    return parseLanguageCode(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)) ?? DEFAULT_LANGUAGE
  } catch {
    return DEFAULT_LANGUAGE
  }
}

function AppShell() {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
      // Ignore storage write failures in restricted environments.
    }
  }, [language])

  const siteContent = getSiteContent(language)
  const navigationLinks = getNavigationLinks(language)

  return (
    <div className={styles.page}>
      <main id="top" className={styles.main}>
        <Header
          brandLabel={siteContent.profile.name}
          navLinks={navigationLinks}
          language={language}
          onLanguageChange={setLanguage}
        />
        <HeroPoster content={siteContent.profile} heroImage={visualAssets.heroImage} />
        <MoodSection content={siteContent.mood} />
        <ExperienceHighlights
          experiences={siteContent.experience}
          title={siteContent.experienceSection.title}
          subtitle={siteContent.experienceSection.subtitle}
        />
        <PublicationsSection
          publications={siteContent.publications}
          title={siteContent.publicationsSection.title}
          subtitle={siteContent.publicationsSection.subtitle}
        />
        <FeaturedProjects
          projects={siteContent.projects}
          title={siteContent.projectsSection.title}
          subtitle={siteContent.projectsSection.subtitle}
          scrollerLabel={siteContent.projectsSection.scrollerLabel}
          scrollerRoleDescription={siteContent.projectsSection.scrollerRoleDescription}
        />
        <ContactInvitation
          contactLinks={siteContent.contact}
          title={siteContent.contactSection.title}
          message={siteContent.contactSection.message}
          copiedStatus={siteContent.contactSection.copiedStatus}
          copyFailedStatus={siteContent.contactSection.copyFailedStatus}
        />
      </main>
    </div>
  )
}

export default AppShell
