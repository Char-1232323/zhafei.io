import { fireEvent, render, screen } from '@testing-library/react'
import AppShell from './AppShell'
import { siteContentEn, siteContentZh } from '../data/siteContent.i18n'
import { LANGUAGE_STORAGE_KEY } from '../i18n/language'

describe('AppShell bright redesign', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
    window.localStorage.clear()
    document.documentElement.lang = ''
  })

  it('renders the main sections in the new order', () => {
    render(<AppShell />)

    const sections = screen.getAllByRole('region')
    expect(sections.map((section) => section.id)).toEqual([
      'hero',
      'about',
      'experience',
      'publications',
      'projects',
      'contact'
    ])
  })

  it('defaults to english content on first load', () => {
    render(<AppShell />)

    const heroRegion = screen.getByRole('region', { name: siteContentEn.profile.name })

    expect(heroRegion).toHaveAttribute('id', 'hero')
    expect(heroRegion).toHaveTextContent(siteContentEn.profile.name)
    expect(heroRegion).toHaveTextContent(siteContentEn.profile.emotionalTagline)
    expect(screen.getByText(siteContentEn.mood.intro)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Publications' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Experience' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: "Let's Connect" })).toBeInTheDocument()
    expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en')
  })

  it('switches user-facing copy to chinese when toggle is clicked', () => {
    render(<AppShell />)

    fireEvent.click(screen.getByRole('button', { name: '中文' }))

    expect(screen.getByRole('link', { name: '关于我' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '精选项目' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '联系我' })).toBeInTheDocument()
    expect(screen.getByText(siteContentZh.profile.emotionalTagline)).toBeInTheDocument()
    expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('zh')
  })

  it('restores persisted language from localStorage', () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, 'zh')

    render(<AppShell />)

    expect(screen.getByRole('button', { name: '中文' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { name: '出版物' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '联系我' })).toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute('lang', 'zh')
  })

  it('falls back to english for invalid stored language', () => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, 'invalid')

    render(<AppShell />)

    expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument()
    expect(window.localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en')
    expect(document.documentElement).toHaveAttribute('lang', 'en')
  })

  it('keeps rendering when localStorage access fails', () => {
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
      throw new Error('Storage blocked')
    })
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('Storage blocked')
    })

    expect(() => render(<AppShell />)).not.toThrow()
    expect(screen.getByRole('heading', { name: 'Featured Projects' })).toBeInTheDocument()

    expect(() => fireEvent.click(screen.getByRole('button', { name: '中文' }))).not.toThrow()
    expect(screen.getByRole('heading', { name: '精选项目' })).toBeInTheDocument()
  })

  it('synchronizes the html lang attribute with language toggle', () => {
    render(<AppShell />)

    expect(document.documentElement).toHaveAttribute('lang', 'en')

    fireEvent.click(screen.getByRole('button', { name: '中文' }))
    expect(document.documentElement).toHaveAttribute('lang', 'zh')

    fireEvent.click(screen.getByRole('button', { name: 'EN' }))
    expect(document.documentElement).toHaveAttribute('lang', 'en')
  })
})
