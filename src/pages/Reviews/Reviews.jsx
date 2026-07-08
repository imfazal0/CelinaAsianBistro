import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import SectionTitle from '../../components/UI/SectionTitle.jsx'
import ReviewCard from '../../components/Reviews/ReviewCard.jsx'
import styles from './Reviews.module.css'
import reviewsData from '../../data/reviews.json'

export default function Reviews() {
  const [filter, setFilter] = useState('Newest')
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    let sorted = [...reviewsData.reviews]
    if (filter === 'Highest Rated') sorted.sort((a, b) => b.rating - a.rating)
    if (filter === 'Lowest Rated') sorted.sort((a, b) => a.rating - b.rating)
    setReviews(sorted)
  }, [filter])

  return (
    <section class="section" style={{marginTop: '6rem'}}>
      <div class="container">
        <SectionTitle subtitle="What people say" title="Customer Reviews" center />
        <div className={styles.overall}>
          <h3>{reviewsData.averageRating} ⭐</h3>
          <p>{reviewsData.totalReviews} Reviews</p>
        </div>
        <div className={styles.filters}>
          {['Newest', 'Highest Rated', 'Lowest Rated'].map(f => (
            <button class={`${styles.filterBtn} ${filter === f ? styles.active : ''}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <div className={styles.grid}>{reviews.map(rev => <ReviewCard review={rev} />)}</div>
      </div>
    </section>
  )
}
