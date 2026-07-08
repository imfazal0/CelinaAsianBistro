import { h } from 'preact'
import SectionTitle from '../../components/UI/SectionTitle.jsx'
import DishCard from '../../components/Cards/DishCard.jsx'
import styles from './Menu.module.css'
import menuData from '../../data/menu.json'

export default function Menu() {
  return (
    <section class="section" style={{marginTop: '6rem'}}>
      <div class="container">
        <SectionTitle subtitle="Delicious Selections" title="Our Menu" center />
        {menuData.categories.map(category => (
          <div className={styles.categorySection}>
            <h2 className={styles.categoryTitle}>{category.name}</h2>
            <div className={styles.dishGrid}>
              {category.items.map(item => <DishCard dish={{...item, category: category.name}} />)}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
