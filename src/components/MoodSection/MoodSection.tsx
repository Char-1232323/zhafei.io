import type { MoodContent } from '../../types/content'
import styles from './MoodSection.module.css'

interface MoodSectionProps {
  content: MoodContent
}

function MoodSection({ content }: MoodSectionProps) {
  return (
    <section id="mood" className={styles.section} aria-labelledby="mood-title">
      <div className={styles.intro}>
        <p>{content.intro}</p>
      </div>

      <div className={styles.cards}>
        {content.cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDescription}>{card.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.tags}>
        {content.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}

export default MoodSection
