import type { ExperienceItem } from '../../types/content'
import styles from './ExperienceHighlights.module.css'

interface ExperienceHighlightsProps {
  experiences: ExperienceItem[]
}

function ExperienceHighlights({ experiences }: ExperienceHighlightsProps) {
  return (
    <section id="experience" className={styles.section} aria-labelledby="experience-title">
      <div className={styles.header}>
        <h2 id="experience-title" className={styles.title}>Experience</h2>
        <p className={styles.subtitle}>
          Where I've had the chance to build, learn, and grow alongside talented people.
        </p>
      </div>

      <div className={styles.timeline}>
        {experiences.map((exp) => (
          <article key={exp.organization + exp.period} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.roleInfo}>
                <h3 className={styles.role}>{exp.role}</h3>
                <span className={styles.organization}>{exp.organization}</span>
              </div>
              <span className={styles.period}>{exp.period}</span>
            </div>

            <p className={styles.summary}>{exp.summary}</p>

            <ul className={styles.outcomes}>
              {exp.outcomes.map((outcome, idx) => (
                <li key={idx} className={styles.outcome}>
                  {outcome}
                </li>
              ))}
            </ul>

            <div className={styles.technologies}>
              {exp.technologies.map((tech) => (
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

export default ExperienceHighlights
