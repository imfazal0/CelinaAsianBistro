import { h } from 'preact'
import SectionTitle from '../../components/UI/SectionTitle.jsx'
import styles from './About.module.css'
import restaurantData from '../../data/restaurant.json'
import featuresData from '../../data/features.json'

export default function About() {
  return (
    <section class="section" style={{marginTop: '6rem'}}>
      <div class="container">
        <SectionTitle subtitle="Our Story" title={`About ${restaurantData.name}`} center />
        <div className={styles.content}>
          <div className={styles.image}>
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Restaurant Interior" loading="lazy" />
          </div>
          <div className={styles.text}>
            <h3>Authentic Asian Cuisine Since 1998</h3>
            <p>{restaurantData.description}</p>
            <p>Our mission is to provide high-quality, fresh meals that bring families together. With experienced chefs directly from Asia, we ensure authentic taste in every bite.</p>
            <div className={styles.features}>
              {featuresData.map(f => (
                <div className={styles.feature}><span class={styles.icon}>{f.icon}</span> {f.title}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
