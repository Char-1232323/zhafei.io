import type { PublicationItem } from '../../types/content'
import styles from './PublicationsSection.module.css'

interface PublicationsSectionProps {
  publications: PublicationItem[]
  title: string
  subtitle: string
}

function PublicationsSection({ publications, title, subtitle }: PublicationsSectionProps) {
  return (
    <section id="publications" className={styles.section} aria-labelledby="publications-title">
      <div className={styles.header}>
        <h2 id="publications-title" className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <div className={styles.list}>
        {publications.map((paper) => (
          <article key={paper.title} className={styles.card}>
            <div className={styles.topRow}>
              <h3 className={styles.paperTitle}>{paper.title}</h3>
              <a href={paper.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                {paper.venue}
              </a>
            </div>
            <p className={styles.meta}>{paper.year}</p>
            <p className={styles.authors}>
              {paper.authors.map((author, index) => (
                <span key={`${paper.title}-${author}`}>
                  {author === 'Fei Zha' ? <strong>{author}</strong> : author}
                  {index < paper.authors.length - 1 ? ', ' : ''}
                </span>
              ))}
            </p>
            <p className={styles.abstract}>{paper.abstract}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PublicationsSection
