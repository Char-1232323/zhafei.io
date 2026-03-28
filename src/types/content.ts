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

export interface ProfileContent {
  name: string
  role: string
  targetRole: string
  intro: string
  actions: HeroAction[]
  stats: HeroStat[]
}

export interface SiteContent {
  profile: ProfileContent
  experience: ExperienceItem[]
  projects: ProjectItem[]
  skills: SkillGroup[]
  education: EducationItem[]
  contact: ContactLink[]
}
