import type { ImageAsset, ProfileContent } from '../../types/content'
import styles from './HeroPoster.module.css'

interface HeroPosterProps {
  profile: ProfileContent
  heroImage: ImageAsset
}

function HeroPoster({ profile, heroImage }: HeroPosterProps) {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className={styles.role}>{profile.role}</p>
        <h1 id="hero-title" className={styles.title}>
          {profile.name}
        </h1>
        <p className={styles.tagline}>{profile.emotionalTagline}</p>
        <p className={styles.intro}>{profile.intro}</p>
        <div className={styles.actions}>
          {profile.actions.map((action) => (
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
