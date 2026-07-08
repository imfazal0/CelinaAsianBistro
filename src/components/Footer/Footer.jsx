import { h } from 'preact'
import styles from './Footer.module.css'
import restaurantData from '../../data/restaurant.json'

const base = import.meta.env.BASE_URL;

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div class="container">
        <div className={styles.grid}>
          <div>
            <h3>{restaurantData.name}</h3>
            <p>{restaurantData.description}</p>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Twitter">TW</a>
            </div>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href={`${base}menu`}>Menu</a></li>
              <li><a href={`${base}about`}>About Us</a></li>
              <li><a href={`${base}gallery`}>Gallery</a></li>
              <li><a href={`${base}contact`}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Opening Hours</h4>
            <ul>{restaurantData.hours.map(h => <li>{h}</li>)}</ul>
          </div>
          <div>
            <h4>Contact</h4>
            <p>{restaurantData.address}</p>
            <p><a href={`tel:${restaurantData.phone}`}>{restaurantData.phone}</a></p>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} {restaurantData.name}. All rights reserved.</p>
          <div><a href={`${base}privacy`}>Privacy Policy</a> | <a href={`${base}terms`}>Terms of Service</a></div>
        </div>
      </div>
    </footer>
  )
}