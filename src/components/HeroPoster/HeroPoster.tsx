import type { ImageAsset, ProfileContent } from '../../types/content'
import styles from './HeroPoster.module.css'

export type HeroPosterContent = Pick<
  ProfileContent,
  'name' | 'role' | 'targetRole' | 'intro' | 'emotionalTagline' | 'actions' | 'stats'
>

interface HeroPosterProps {
  content: HeroPosterContent
  heroImage: ImageAsset
}

function HeroPoster({ content, heroImage }: HeroPosterProps) {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className={styles.role}>{content.role}</p>
        <h1 id="hero-title" className={styles.title}>
          {content.name}
        </h1>
        <p className={styles.tagline}>{content.emotionalTagline}</p>
        <p className={styles.targetRole}>{content.targetRole}</p>
        <p className={styles.intro}>{content.intro}</p>
        <dl className={styles.stats} aria-label={content.name}>
          {content.stats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <dt className={styles.statLabel}>{stat.label}</dt>
              <dd className={styles.statValue}>{stat.value}</dd>
            </div>
          ))}
        </dl>
        <div className={styles.actions}>
          {content.actions.map((action) => (
            <a key={action.href} href={action.href} className={styles.action}>
              {action.label}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.posterFrame}>
        <img src={heroImage.src} alt={heroImage.alt} className={styles.image} />
      </div>
    </section>
  )
}

export default HeroPoster
