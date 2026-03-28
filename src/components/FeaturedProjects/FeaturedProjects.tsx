import type { ProjectItem } from '../../types/content'
import styles from './FeaturedProjects.module.css'

interface FeaturedProjectsProps {
  projects: ProjectItem[]
}

function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <div className={styles.header}>
        <h2 id="projects-title" className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A collection of projects where I got to shape both the feeling and the function.
        </p>
      </div>

      <div className={styles.cards}>
        {projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.projectName}>{project.name}</h3>
              {project.mood && (
                <span className={styles.moodLabel}>{project.mood}</span>
              )}
            </div>

            <div className={styles.story}>
              <p className={styles.purpose}>{project.purpose}</p>
              <p className={styles.contribution}>{project.contribution}</p>
              <p className={styles.result}>{project.result}</p>
            </div>

            <div className={styles.techStack}>
              {project.techStack.map((tech) => (
                <span key={tech} className={styles.techPill}>
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
