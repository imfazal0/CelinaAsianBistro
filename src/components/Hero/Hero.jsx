import { h } from 'preact'
import styles from './Hero.module.css'
import restaurantData from '../../data/restaurant.json'

export default function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${restaurantData.heroImage})` }}>
      <div className={styles.overlay}>
        <div class="container">
          <h1>{restaurantData.name}</h1>
          <p>{restaurantData.description}</p>
          <div className={styles.buttons}>
            <a href="/menu" class="btn btn-primary">View Menu</a>
            <a href={`tel:${restaurantData.phone}`} class="btn btn-secondary">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  )
}
