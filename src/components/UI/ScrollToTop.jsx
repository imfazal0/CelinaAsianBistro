import { h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import styles from './ScrollToTop.module.css'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const toggleVisibility = () => window.pageYOffset > 300 ? setVisible(true) : setVisible(false)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <button 
      class={`${styles.button} ${visible ? styles.visible : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >↑</button>
  )
}
