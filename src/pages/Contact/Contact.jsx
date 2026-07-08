import { h } from 'preact'
import SectionTitle from '../../components/UI/SectionTitle.jsx'
import styles from './Contact.module.css'
import restaurantData from '../../data/restaurant.json'

export default function Contact() {
  return (
    <section class="section" style={{marginTop: '6rem'}}>
      <div class="container">
        <SectionTitle subtitle="Get in touch" title="Contact Us" center />
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3>Visit Our Restaurant</h3>
            <p><strong>Address:</strong> {restaurantData.address}</p>
            <p><strong>Phone:</strong> <a href={`tel:${restaurantData.phone}`}>{restaurantData.phone}</a></p>
            <h4 style={{marginTop: '1.5rem'}}>Opening Hours</h4>
            {restaurantData.hours.map(h => <p>{h}</p>)}
            <div style={{marginTop: '2rem', display: 'flex', gap: '1rem'}}>
              <a href={`tel:${restaurantData.phone}`} class="btn btn-primary">Call</a>
              <a href={restaurantData.mapsLink} target="_blank" rel="noopener" class="btn btn-secondary">Directions</a>
            </div>
            <div className={styles.map} style={{marginTop: '2rem'}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.6150555555555!2d-122.4194156846815!3d37.77492977975867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858087f7b0c1b1%3A0x7c0c3b0c1b0c1b0c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" width="100%" height="250" style={{border:0, borderRadius: '8px'}} allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <h3>Send a Message</h3>
            <div className={styles.formGroup}><label for="name">Name</label><input type="text" id="name" name="name" required /></div>
            <div className={styles.formGroup}><label for="email">Email</label><input type="email" id="email" name="email" required /></div>
            <div className={styles.formGroup}><label for="message">Message</label><textarea id="message" name="message" rows="5" required></textarea></div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
