import type { PublicationItem } from '../../types/content'
import styles from './PublicationsSection.module.css'

interface PublicationsSectionProps {
  publications: PublicationItem[]
}

function PublicationsSection({ publications }: PublicationsSectionProps) {
  return (
    <section id="publications" className={styles.section} aria-labelledby="publications-title">
      <div className={styles.header}>
        <h2 id="publications-title" className={styles.title}>Publications</h2>
        <p className={styles.subtitle}>
          Selected research papers with author list and abstracts.
        </p>
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
            <p className={styles.authors}>{paper.authors.join(', ')}</p>
            <p className={styles.abstract}>{paper.abstract}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default PublicationsSection
