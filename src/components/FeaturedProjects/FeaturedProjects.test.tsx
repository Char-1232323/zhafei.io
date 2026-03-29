import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import FeaturedProjects from './FeaturedProjects'
import { siteContent } from '../../data/siteContent'

const moepotImageUrl =
  'https://raw.githubusercontent.com/haiyangxin/MoEPOT/main/resources/MoE-POT.png'
const moepotRepoUrl = 'https://github.com/haiyangxin/MoEPOT'

describe('FeaturedProjects', () => {
  it('renders only one project title and links that title', () => {
    render(<FeaturedProjects projects={siteContent.projects} />)

    const title = screen.getByRole('heading', { level: 3, name: 'MoEPOT' })
    const titleLink = screen.getByRole('link', { name: 'MoEPOT' })

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1)
    expect(title).toContainElement(titleLink)
  })

  it('uses distinct React keys when project names repeat', () => {
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const duplicatedNameProjects = [
      {
        ...siteContent.projects[0],
        codeUrl: 'https://github.com/example/moepot-a'
      },
      {
        ...siteContent.projects[0],
        codeUrl: 'https://github.com/example/moepot-b'
      }
    ]

    try {
      render(<FeaturedProjects projects={duplicatedNameProjects} />)

      expect(consoleErrorSpy).not.toHaveBeenCalledWith(
        expect.stringContaining('Encountered two children with the same key')
      )
    } finally {
      consoleErrorSpy.mockRestore()
    }
  })

  it('renders project image and repository link', () => {
    render(<FeaturedProjects projects={siteContent.projects} />)

    const image = screen.getByRole('img', { name: 'MoEPOT project preview' })
    const link = screen.getByRole('link', { name: 'MoEPOT' })

    expect(image).toHaveAttribute('src', moepotImageUrl)
    expect(link).toHaveAttribute('href', moepotRepoUrl)
  })

  it('renders all tech stack items', () => {
    render(<FeaturedProjects projects={siteContent.projects} />)

    siteContent.projects[0].techStack.forEach((tech) => {
      expect(screen.getByText(tech)).toBeInTheDocument()
    })
  })

  it('renders keyboard-focusable horizontal scroller region', () => {
    render(<FeaturedProjects projects={siteContent.projects} />)

    const cardsRegion = screen.getByRole('group', {
      name: 'Featured projects horizontal scroller',
    })

    expect(cardsRegion).toBeInTheDocument()
    expect(cardsRegion).toHaveAttribute('tabindex', '0')
  })

  it('renders project body text for purpose, contribution, and result', () => {
    render(<FeaturedProjects projects={siteContent.projects} />)

    const project = siteContent.projects[0]

    expect(screen.getByText(project.purpose)).toBeInTheDocument()
    expect(screen.getByText(project.contribution)).toBeInTheDocument()
    expect(screen.getByText(project.result)).toBeInTheDocument()
  })
})
