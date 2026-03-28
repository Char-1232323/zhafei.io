export interface NavigationLink {
  label: string
  href: string
}

export const navigationLinks: NavigationLink[] = [
  { label: 'Mood', href: '#mood' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' }
]
