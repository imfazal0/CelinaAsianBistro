import { h } from 'preact'
import styles from './Legal.module.css'

export default function Privacy() {
  return (
    <section class="section" style={{marginTop: '6rem'}}>
      <div class="container">
        <h1>Privacy Policy</h1>
        <div className={styles.content}>
          <p>Effective Date: October 24, 2023</p>
          <p>This Privacy Policy describes how Sakura Gardens ("we," "us," or "our") collects, uses, and discloses your information when you visit our website.</p>
          <h2>Information We Collect</h2>
          <p>We collect personal information you voluntarily provide, such as name and email when you fill out our contact form.</p>
          <h2>How We Use Your Information</h2>
          <p>We use your information to respond to your inquiries, improve our services, and send promotional emails if opted in.</p>
        </div>
      </div>
    </section>
  )
}
