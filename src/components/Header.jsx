import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('.header')
      if (header) header.classList.toggle('scrolled', window.scrollY > 2)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="header">
      <div className="container nav">
        <Link className="brand" to="/">
          <img src="/images/logo-eagle.png" alt="Eagle HMO" />
          <span></span>
        </Link>
        <nav className="nav-links" aria-label="Primary">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/plans">Plans</NavLink>
          <NavLink to="/providers">Providers</NavLink>
          <NavLink to="/how-it-works">How it works</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <div className="nav-cta">
          <NavLink className="btn btn-outline" to="/plans">Get a quote</NavLink>
          {/* Removed mobile menu toggle button */}
        </div>
      </div>
      {/* Removed mobile menu container */}
    </header>
  )
}
