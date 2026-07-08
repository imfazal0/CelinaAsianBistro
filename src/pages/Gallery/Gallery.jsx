import { h } from 'preact'
import { useState } from 'preact/hooks'
import SectionTitle from '../../components/UI/SectionTitle.jsx'
import styles from './Gallery.module.css'
import galleryData from '../../data/gallery.json'

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightbox, setLightbox] = useState(null)
  const categories = ['All', ...new Set(galleryData.map(img => img.category))]
  const filteredImages = activeCategory === 'All' ? galleryData : galleryData.filter(img => img.category === activeCategory)

  return (
    <section class="section" style={{marginTop: '6rem'}}>
      <div class="container">
        <SectionTitle subtitle="Atmosphere & Food" title="Gallery" center />
        <div className={styles.filters}>
          {categories.map(cat => (
            <button class={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`} onClick={() => setActiveCategory(cat)}>{cat}</button>
          ))}
        </div>
        <div className={styles.grid}>
          {filteredImages.map((img, idx) => (
            <button className={styles.gridItem} onClick={() => setLightbox(img)} style={{height: idx % 3 === 0 ? '300px' : '250px'}}>
              <img src={img.url} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <span className={styles.close}>&times;</span>
          <img src={lightbox.url} alt={lightbox.alt} />
        </div>
      )}
    </section>
  )
}
