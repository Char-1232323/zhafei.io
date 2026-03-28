import type { SkillGroup } from '../../types/content'
import styles from './SkillsPanel.module.css'

interface SkillsPanelProps {
  skills: SkillGroup[]
}

function SkillsPanel({ skills }: SkillsPanelProps) {
  return (
    <section id="skills" className={styles.section} aria-labelledby="skills-title">
      <div className={styles.header}>
        <h2 id="skills-title" className={styles.title}>Skills & Interests</h2>
        <p className={styles.subtitle}>
          The tools and qualities I bring to every project.
        </p>
      </div>

      <div className={styles.groups}>
        {skills.map((group) => (
          <div key={group.title} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.items}>
              {group.items.map((item) => (
                <li key={item} className={styles.item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsPanel
