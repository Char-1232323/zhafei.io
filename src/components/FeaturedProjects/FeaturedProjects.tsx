import type { ProjectItem } from '../../types/content'
import styles from './FeaturedProjects.module.css'

interface FeaturedProjectsProps {
  projects: ProjectItem[]
  title: string
  subtitle: string
  scrollerLabel: string
  scrollerRoleDescription: string
}

function FeaturedProjects({
  projects,
  title,
  subtitle,
  scrollerLabel,
  scrollerRoleDescription
}: FeaturedProjectsProps) {
  return (
    <section id="projects" className={styles.section} aria-labelledby="projects-title">
      <div className={styles.header}>
        <h2 id="projects-title" className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div
        className={styles.cards}
        role="group"
        aria-label={scrollerLabel}
        aria-roledescription={scrollerRoleDescription}
        tabIndex={0}
      >
        {projects.map((project, index) => {
          const projectKey = project.codeUrl ?? project.demoUrl ?? `${project.name}-${index}`

          return (
            <article key={projectKey} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.projectName}>
                  {project.codeUrl ? (
                    <a
                      className={styles.projectLink}
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                {project.mood && (
                  <span className={styles.moodLabel}>{project.mood}</span>
                )}
              </div>

              {project.imageUrl && (
                <img
                  className={styles.projectImage}
                  src={project.imageUrl}
                  alt={project.imageAlt ?? `${project.name} preview`}
                  loading="lazy"
                />
              )}

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
          )
        })}
      </div>
    </section>
  )
}

export default FeaturedProjects
