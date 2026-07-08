import { h } from 'preact'
import styles from './DishCard.module.css'

export default function DishCard({ dish }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={dish.image} alt={dish.name} loading="lazy" />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>{dish.name}</h3>
          <span className={styles.price}>{dish.price}</span>
        </div>
        <span className={styles.category}>{dish.category}</span>
        <p>{dish.description}</p>
      </div>
    </article>
  )
}
