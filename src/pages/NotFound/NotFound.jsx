import { h } from 'preact'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <section class="section" style={{marginTop: '6rem', textAlign: 'center'}}>
      <div class="container">
        <h1 className={styles.title}>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <a href="/" class="btn btn-primary" style={{marginTop: '2rem'}}>Go Home</a>
      </div>
    </section>
  )
}
