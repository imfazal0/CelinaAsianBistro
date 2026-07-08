import { h } from 'preact'
import styles from './InfoCard.module.css'

export default function InfoCard({ icon, label, value }) {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <span className={styles.label}>{label}</span>
      <strong className={styles.value}>{value}</strong>
    </div>
  )
}
