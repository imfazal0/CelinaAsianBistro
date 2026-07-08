import { h } from 'preact'
import Router from 'preact-router'
import { useState, useEffect } from 'preact/hooks'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from './components/UI/ScrollToTop.jsx'
import Home from './pages/Home/Home.jsx'
import Menu from './pages/Menu/Menu.jsx'
import About from './pages/About/About.jsx'
import Gallery from './pages/Gallery/Gallery.jsx'
import Reviews from './pages/Reviews/Reviews.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Privacy from './pages/Privacy/Privacy.jsx'
import Terms from './pages/Terms/Terms.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

export function App() {
  const [route, setRoute] = useState(window.location.pathname)

  useEffect(() => {
    const onRouteChange = (e) => {
      setRoute(e.url)
      window.scrollTo(0, 0)
    }
    window.addEventListener('popstate', () => setRoute(window.location.pathname))
    return () => window.removeEventListener('popstate', () => setRoute(window.location.pathname))
  }, [])

  return (
    <>
      <Header currentPath={route} />
      <main>
        <Router onChange={e => setRoute(e.url)}>
          <Home path="/" />
          <Menu path="/menu" />
          <About path="/about" />
          <Gallery path="/gallery" />
          <Reviews path="/reviews" />
          <Contact path="/contact" />
          <Privacy path="/privacy" />
          <Terms path="/terms" />
          <NotFound default />
        </Router>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

export default App
