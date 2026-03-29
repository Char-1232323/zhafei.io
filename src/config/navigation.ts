export interface NavigationLink {
  label: string
  href: string
}

export const navigationLinks: NavigationLink[] = [
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Publications', href: '#publications' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
]
