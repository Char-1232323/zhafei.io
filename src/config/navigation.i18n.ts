import type { LanguageCode } from '../i18n/language'

export interface NavigationLink {
  label: string
  href: string
}

export const navigationEn: NavigationLink[] = [
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Publications', href: '#publications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
]

export const navigationZh: NavigationLink[] = [
  { label: '关于我', href: '#about' },
  { label: '经历', href: '#experience' },
  { label: '出版物', href: '#publications' },
  { label: '项目', href: '#projects' },
  { label: '联系我', href: '#contact' }
]

export function getNavigationLinks(language: LanguageCode): NavigationLink[] {
  return language === 'zh' ? navigationZh : navigationEn
}
