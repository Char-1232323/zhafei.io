import styles from './AppShell.module.css'

function AppShell() {
  return (
    <div className={styles.page}>
      <main id="top" className={styles.main}>
        <h1 className={styles.placeholder}>Personal Homepage</h1>
      </main>
    </div>
  )
}

export default AppShell
