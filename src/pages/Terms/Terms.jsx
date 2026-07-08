import { h } from 'preact'
import styles from '../Privacy/Legal.module.css'

export default function Terms() {
  return (
    <section class="section" style={{marginTop: '6rem'}}>
      <div class="container">
        <h1>Terms of Service</h1>
        <div className={styles.content}>
          <p>Effective Date: October 24, 2023</p>
          <p>Welcome to Sakura Gardens. By accessing our website, you agree to these Terms of Service.</p>
          <h2>Use of Our Website</h2>
          <p>You may use our website for lawful purposes only. You must not use it in any way that breaches local or international laws.</p>
          <h2>Reservations and Orders</h2>
          <p>All orders and reservations are subject to availability and confirmation. We reserve the right to refuse service.</p>
        </div>
      </div>
    </section>
  )
}
