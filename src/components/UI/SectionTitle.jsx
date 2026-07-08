import { h } from 'preact'
import styles from './SectionTitle.module.css'

export default function SectionTitle({ subtitle, title, center }) {
  return (
    <div className={`${styles.container} ${center ? styles.center : ''}`}>
      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.divider}></div>
    </div>
  )
}
