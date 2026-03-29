export interface ImageAsset {
  src: string
  alt: string
  creditLabel?: string
  creditUrl?: string
}

export interface VisualAssets {
  heroImage: ImageAsset
  accentImage: ImageAsset
}

export interface HeroAction {
  label: string
  href: string
}

export interface HeroStat {
  label: string
  value: string
}

export interface ExperienceItem {
  role: string
  organization: string
  period: string
  technologies: string[]
  summary: string
  outcomes: string[]
}

export interface ProjectItem {
  name: string
  purpose: string
  contribution: string
  techStack: string[]
  result: string
  mood?: string
  imageUrl?: string
  imageAlt?: string
  codeUrl?: string
  demoUrl?: string
}

export interface SkillGroup {
  title: string
  items: string[]
}

export interface EducationItem {
  school: string
  program: string
  period: string
  highlights: string[]
}

export interface ContactLink {
  label: string
  href: string
}

export interface PublicationItem {
  title: string
  venue: string
  year: string
  link: string
  authors: string[]
  abstract: string
}

export interface MoodCard {
  title: string
  description: string
}

export interface ProfileContent {
  name: string
  role: string
  targetRole: string
  intro: string
  emotionalTagline: string
  actions: HeroAction[]
  stats: HeroStat[]
}

export interface MoodContent {
  sectionLabel: string
  intro: string
  cards: MoodCard[]
  tags: string[]
}

export interface ExperienceSectionContent {
  title: string
  subtitle: string
}

export interface PublicationsSectionContent {
  title: string
  subtitle: string
}

export interface ProjectsSectionContent {
  title: string
  subtitle: string
  scrollerLabel: string
  scrollerRoleDescription: string
}

export interface ContactSectionContent {
  title: string
  message: string
  copiedStatus: string
  copyFailedStatus: string
}

export interface SiteContent {
  profile: ProfileContent
  mood: MoodContent
  experienceSection: ExperienceSectionContent
  experience: ExperienceItem[]
  publicationsSection: PublicationsSectionContent
  projects: ProjectItem[]
  projectsSection: ProjectsSectionContent
  publications: PublicationItem[]
  skills?: SkillGroup[]
  education?: EducationItem[]
  contactSection: ContactSectionContent
  contact: ContactLink[]
}
