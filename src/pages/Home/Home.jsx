import { h } from 'preact'
import Hero from '../../components/Hero/Hero.jsx'
import SectionTitle from '../../components/UI/SectionTitle.jsx'
import DishCard from '../../components/Cards/DishCard.jsx'
import InfoCard from '../../components/Cards/InfoCard.jsx'
import ReviewCard from '../../components/Reviews/ReviewCard.jsx'
import styles from './Home.module.css'
import restaurantData from '../../data/restaurant.json'
import menuData from '../../data/menu.json'
import reviewsData from '../../data/reviews.json'
import featuresData from '../../data/features.json'
import galleryData from '../../data/gallery.json'

export default function Home() {
  const popularDishes = menuData.categories.flatMap(cat => cat.items).filter(item => item.isPopular).slice(0, 6)

  return (
    <>
      <Hero />
      <section class="section">
        <div class="container">
          <div className={styles.infoGrid}>
            <InfoCard icon="⭐" label="Rating" value={`${restaurantData.rating} / 5`} />
            <InfoCard icon="💵" label="Price" value={restaurantData.priceRange} />
            <InfoCard icon="🍣" label="Cuisine" value="Asian / Sushi" />
            <InfoCard icon="🚗" label="Drive Through" value="Available" />
            <InfoCard icon="🌱" label="Vegetarian" value="Options" />
            <InfoCard icon="📍" label="Location" value={restaurantData.address.split(',')[0]} />
          </div>
        </div>
      </section>
      <section class="section" style={{backgroundColor: '#fff'}}>
        <div class="container">
          <SectionTitle subtitle="Most Ordered" title="Popular Dishes" center />
          <div className={styles.dishGrid}>{popularDishes.map(dish => <DishCard dish={dish} />)}</div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <SectionTitle subtitle="Our Promise" title="Why Choose Us" center />
          <div className={styles.featuresGrid}>
            {featuresData.map(feat => (
              <div className={styles.feature}>
                <div className={styles.icon}>{feat.icon}</div>
                <h4>{feat.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="section" style={{backgroundColor: '#fff'}}>
        <div class="container">
          <SectionTitle subtitle="Testimonials" title="Customer Reviews" center />
          <div className={styles.reviewsGrid}>{reviewsData.reviews.slice(0, 3).map(rev => <ReviewCard review={rev} />)}</div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}><a href="/reviews" class="btn btn-secondary">Read More Reviews</a></div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <SectionTitle subtitle="Visuals" title="Gallery Preview" center />
          <div className={styles.galleryGrid}>
            {galleryData.slice(0, 4).map(img => (
              <div className={styles.galleryItem}><img src={img.url} alt={img.alt} loading="lazy" /></div>
            ))}
          </div>
          <div style={{textAlign: 'center', marginTop: '2rem'}}><a href="/gallery" class="btn btn-primary">View Gallery</a></div>
        </div>
      </section>
      <section class={`${styles.ctaSection} section`}>
        <div class="container">
          <div className={styles.ctaContent}>
            <h2>Visit Us Today</h2>
            <p>{restaurantData.address}</p>
            <p>{restaurantData.phone}</p>
            <p>{restaurantData.hours[0]}</p>
            <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
              <a href={`tel:${restaurantData.phone}`} class="btn btn-primary">Call</a>
              <a href={restaurantData.mapsLink} target="_blank" rel="noopener" class="btn btn-secondary">Directions</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
