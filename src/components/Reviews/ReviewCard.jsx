import { h } from 'preact'
import styles from './ReviewCard.module.css'

export default function ReviewCard({ review }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.avatar}>{review.name.charAt(0)}</div>
        <div>
          <h4>{review.name}</h4>
          <span className={styles.date}>{review.date}</span>
        </div>
      </div>
      <div className={styles.stars}>{'⭐'.repeat(review.rating)}</div>
      <p>{review.text}</p>
    </article>
  )
}
