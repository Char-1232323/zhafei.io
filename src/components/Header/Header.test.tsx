import { fireEvent, render, screen, within } from '@testing-library/react'
import { siteContentEn } from '../../data/siteContent.i18n'
import { navigationEn } from '../../config/navigation.i18n'
import Header from './Header'

describe('Header', () => {
  it('renders the shared brand and navigation links', () => {
    render(
      <Header
        brandLabel={siteContentEn.profile.name}
        navLinks={navigationEn}
        language="en"
        onLanguageChange={() => {}}
      />
    )

    expect(screen.getByRole('link', { name: siteContentEn.profile.name })).toHaveAttribute('href', '#top')

    const navigation = screen.getByRole('navigation', { name: 'Primary' })

    for (const link of navigationEn) {
      expect(within(navigation).getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('renders language toggle with accessible pressed state', () => {
    render(
      <Header
        brandLabel={siteContentEn.profile.name}
        navLinks={navigationEn}
        language="en"
        onLanguageChange={() => {}}
      />
    )

    expect(screen.getByRole('button', { name: 'EN' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: '中文' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('calls onLanguageChange when selecting a different language', () => {
    const onLanguageChange = vi.fn()

    render(
      <Header
        brandLabel={siteContentEn.profile.name}
        navLinks={navigationEn}
        language="en"
        onLanguageChange={onLanguageChange}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: '中文' }))

    expect(onLanguageChange).toHaveBeenCalledWith('zh')
  })
})
