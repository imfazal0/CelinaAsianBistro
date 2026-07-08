import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import styles from './Header.module.css'
import restaurantData from '../../data/restaurant.json'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About', path: '/about' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Contact', path: '/contact' }
]

export default function Header({ currentPath }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div class={`container ${styles.navContainer}`}>
        <a href="/" class={styles.logo}>{restaurantData.name}</a>
        
        <nav class={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map(link => (
            <a 
              href={link.path} 
              class={currentPath === link.path ? styles.active : ''}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div class={styles.mobileCta}>
            <a href={`tel:${restaurantData.phone}`} class="btn btn-primary">Call Now</a>
          </div>
        </nav>

        <div class={styles.desktopCta}>
          <a href={`tel:${restaurantData.phone}`} class="btn btn-primary">Call Now</a>
          <a href={restaurantData.mapsLink} target="_blank" rel="noopener" class="btn btn-secondary">Directions</a>
        </div>

        <button 
          class={styles.menuToggle} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
