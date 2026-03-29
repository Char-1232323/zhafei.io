export interface NavigationLink {
  label: string
  href: string
}

export const navigationLinks: NavigationLink[] = [
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]
