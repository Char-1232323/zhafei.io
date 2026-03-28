import { render, screen } from '@testing-library/react'
import MoodSection from './MoodSection'
import { siteContent } from '../../data/siteContent'

describe('MoodSection', () => {
  it('renders mood cards and tags', () => {
    render(<MoodSection content={siteContent.mood} />)

    expect(screen.getByText(siteContent.mood.intro)).toBeInTheDocument()

    siteContent.mood.cards.forEach((card) => {
      expect(screen.getByText(card.title)).toBeInTheDocument()
      expect(screen.getByText(card.description)).toBeInTheDocument()
    })

    siteContent.mood.tags.forEach((tag) => {
      expect(screen.getByText(tag)).toBeInTheDocument()
    })
  })
})
