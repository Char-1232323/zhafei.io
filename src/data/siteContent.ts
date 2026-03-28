import type { SiteContent } from '../types/content'

export const siteContent: SiteContent = {
  profile: {
    name: 'Fey',
    role: 'Developer / Student',
    targetRole: 'Seeking frontend or full-stack internship opportunities',
    intro:
      'I build polished interfaces and practical products, with a focus on readable engineering, strong execution, and clear communication.',
    actions: [
      { label: 'View Projects', href: '#projects' },
      { label: 'See Experience', href: '#experience' },
      { label: 'Contact Me', href: '#contact' }
    ],
    stats: [
      { label: 'Status', value: 'Open to internship' },
      { label: 'Focus', value: 'Frontend + Product Engineering' },
      { label: 'Location', value: 'China' },
      { label: 'Availability', value: '2026' }
    ]
  },
  experience: [],
  projects: [],
  skills: [],
  education: [],
  contact: []
}
