import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Plans from './pages/Plans.jsx'
import Providers from './pages/Providers.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  const location = useLocation()

  // Global reveal animations and observers similar to assets/js/main.js
  useEffect(() => {
    function addGroup(selector, baseDelay = 0, inc = 100, extra = []) {
      const nodes = document.querySelectorAll(selector)
      let i = 0
      nodes.forEach(n => {
        if (!n.classList.contains('reveal')) n.classList.add('reveal', ...extra)
        n.style.setProperty('--reveal-delay', `${baseDelay + i * inc}ms`)
        i++
      })
    }
    function autoReveal() {
      addGroup('.section .container > *', 0, 80, ['reveal--up'])
      addGroup('.grid > *', 0, 80, ['reveal--up'])
      addGroup('.card', 0, 90, ['reveal--up'])
      addGroup('.hero-media', 120, 100, ['reveal--right'])
      addGroup('h1, h2, h3, p', 0, 60, ['reveal--up'])
      addGroup('.checklist li', 0, 50, ['reveal--up'])
      addGroup('table.table thead, table.table tbody tr', 0, 40, ['reveal--up'])
      addGroup('.form-row > *', 0, 80, ['reveal--up'])
      addGroup('.footer .grid > *', 0, 80, ['reveal--up'])
    }
    autoReveal()

    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.reveal').forEach(el => io.observe(el))

    return () => io.disconnect()
  }, [location.pathname])

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/providers" element={<Providers />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
