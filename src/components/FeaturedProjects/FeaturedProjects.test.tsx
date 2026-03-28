import { render, screen } from '@testing-library/react'
import FeaturedProjects from './FeaturedProjects'
import { siteContent } from '../../data/siteContent'

describe('FeaturedProjects', () => {
  it('renders project names and mood labels', () => {
    render(<FeaturedProjects projects={siteContent.projects} />)

    siteContent.projects.forEach((project) => {
      expect(screen.getByText(project.name)).toBeInTheDocument()
      
      if (project.mood) {
        expect(screen.getByText(project.mood)).toBeInTheDocument()
      }
    })
  })

  it('renders all tech stack items', () => {
    render(<FeaturedProjects projects={siteContent.projects} />)

    siteContent.projects.forEach((project) => {
      project.techStack.forEach((tech) => {
        expect(screen.getAllByText(tech).length).toBeGreaterThan(0)
      })
    })
  })
})
