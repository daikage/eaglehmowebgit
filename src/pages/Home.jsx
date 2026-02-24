import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  // Enhanced stats counters
  useEffect(() => {
    const animatedCounters = new WeakSet()
    function animateCounter(el, to, duration = 2200) {
      const suffix = el.dataset.suffix ? ` ${el.dataset.suffix}` : ''
      const startTime = performance.now()
      const easeOutCubic = t => 1 - Math.pow(1 - t, 3)
      function tick(now) {
        const p = Math.min(1, (now - startTime) / duration)
        const val = Math.round(easeOutCubic(p) * to)
        el.textContent = val.toLocaleString() + suffix
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    const counterEls = document.querySelectorAll('.counter[data-count]')
    if (counterEls.length) {
      const counterObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target
            if (!animatedCounters.has(el)) {
              const target = parseInt(el.dataset.count, 10)
              const duration = el.dataset.duration ? parseInt(el.dataset.duration, 10) : 2200
              animateCounter(el, target, duration)
              animatedCounters.add(el)
            }
            counterObserver.unobserve(el)
          }
        })
      }, { threshold: 0.5 })
      counterEls.forEach(el => counterObserver.observe(el))
      return () => counterObserver.disconnect()
    }
  }, [])

  return (
    <>
      {/* Hero */}
      <section className="hero pad-hero">
        <div className="container hero-wrap">
          <div className="reveal reveal--left" style={{ '--reveal-delay': '0ms' }}>
            <span className="badge">Health insurance made simple</span>
            <h1 className="reveal" style={{ '--reveal-delay': '100ms' }}>
              Affordable, flexible healthcare coverage across Nigeria
            </h1>
            <p className="reveal" style={{ '--reveal-delay': '200ms' }}>
              Comprehensive plans for individuals, families, SMEs and corporate groups.
              Access a nationwide network of accredited providers for care you can trust.
            </p>
            <div className="mt-24 reveal reveal--scale" style={{ '--reveal-delay': '300ms' }}>
              <NavLink className="btn btn-primary" to="/plans">Browse plans</NavLink>
              <NavLink className="btn btn-light" to="/providers">Find a provider</NavLink>
            </div>
            <p className="meta mt-12 reveal" style={{ '--reveal-delay': '400ms' }}>
              Headquarters in Lagos with a presence in Abuja.
            </p>
          </div>
          <div className="hero-media reveal reveal--right" aria-hidden="true" style={{ '--reveal-delay': '150ms' }}>
            <img src="/images/hero.png" alt="Patients receiving care at an accredited hospital" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="section"
        style={{
          background:
            'linear-gradient(180deg, #ffffff 0%, var(--green-050) 22%, #ffffff 100%)',
        }}
      >
        <div className="container">
          <div className="grid grid--4 stats">
            <div className="stat reveal reveal--scale" style={{ '--reveal-delay': '0ms' }}>
              <div className="counter" data-count="25000">0</div>
              <small>Members covered</small>
            </div>
            <div className="stat reveal reveal--scale" style={{ '--reveal-delay': '100ms' }}>
              <div className="counter" data-count="850">0</div>
              <small>Providers nationwide</small>
            </div>
            <div className="stat reveal reveal--scale" style={{ '--reveal-delay': '200ms' }}>
              <div className="counter" data-count="36">0</div>
              <small>States served</small>
            </div>
            <div className="stat reveal reveal--scale" style={{ '--reveal-delay': '300ms' }}>
              <div className="counter" data-count="48" data-suffix="hrs">0</div>
              <small>Avg. claim approval</small>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="section">
        <div className="container">
          <div className="grid grid--3">
            <div className="card reveal reveal--up" style={{ '--reveal-delay': '0ms' }}>
              <div className="card-body">
                <h3>Individuals & Families</h3>
                <p>Outpatient, inpatient, emergency, maternity (by plan), labs & drugs through accredited providers.</p>
                <ul className="checklist">
                  <li>Flexible tiers</li>
                  <li>Spouse and children options</li>
                  <li>Preventive care</li>
                </ul>
                <NavLink className="btn btn-outline mt-12" to="/plans#individuals">See individual plans</NavLink>
              </div>
            </div>
            <div className="card reveal reveal--up" style={{ '--reveal-delay': '100ms' }}>
              <div className="card-body">
                <h3>SMEs</h3>
                <p>Budget‑friendly cover for teams of 5–200 employees with simple onboarding.</p>
                <ul className="checklist">
                  <li>Employee + dependents</li>
                  <li>Tiered network options</li>
                  <li>Wellness add‑ons</li>
                </ul>
                <NavLink className="btn btn-outline mt-12" to="/plans#smes">See SME plans</NavLink>
              </div>
            </div>
            <div className="card reveal reveal--up" style={{ '--reveal-delay': '200ms' }}>
              <div className="card-body">
                <h3>Corporate Plans</h3>
                <p>Custom benefits, SLAs and reporting tailored for larger organizations.</p>
                <ul className="checklist">
                  <li>Tailored benefits</li>
                  <li>Dedicated account team</li>
                  <li>On‑site activations</li>
                </ul>
                <NavLink className="btn btn-outline mt-12" to="/plans#corporate">See corporate plans</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Provider network */}
      <section
        className="section"
        style={{
          background:
            'linear-gradient(180deg, #ffffff 0%, var(--green-050) 22%, #ffffff 100%)',
        }}
      >
        <div className="container">
          <div className="grid grid--2">
            <div>
              <h2 className="mb-0">Nationwide provider coverage</h2>
              <p>Access care through our accredited hospitals and clinics across Nigeria, including Lagos, Abuja and other states.</p>
              <ul className="checklist">
                <li>Outpatient and inpatient care</li>
                <li>Maternity and emergency services (by plan)</li>
                <li>Diagnostics, drugs and preventive care</li>
              </ul>
              <div className="mt-24">
                <NavLink className="btn btn-primary" to="/providers">Search providers</NavLink>
              </div>
            </div>
            <div className="hero-media">
              <img src="/images/providers-collage2.png" alt="Collage of accredited hospitals and clinics" />
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation note */}
      <section
        className="section section--tight"
        style={{
          background:
            'linear-gradient(180deg, #ffffff 0%, var(--green-100) 24%, var(--green-050) 72%, #ffffff 100%)',
        }}
      >
        <div className="container">
          <div className="grid grid--2" style={{ alignItems: 'center' }}>
            <div>
              <h2 className="mb-0">Accreditation note</h2>
              <p>HMOs in Nigeria must be accredited by the National Health Insurance Authority (NHIA). Please verify our current status via the official NHIA list or contact us directly before publishing enrollment or coverage claims.</p>
            </div>
            <div className="hero-media">
              <img src="/images/illustration-care.png" alt="Illustration of secure health coverage" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      {/* <section className="section text-center">
        <div className="container cta-band reveal reveal--scale">
          <h2 className="mb-0">Ready to find your plan?</h2>
          <p>Get a quote and see benefits tailored to you or your team.</p>
          <NavLink className="btn btn-primary" to="/plans">Get started</NavLink>
        </div>
      </section> */}

      <section className="section text-center" style={{ position: 'relative', overflow: 'hidden', padding: '100px 0' }}>
  
  {/* The Background Blob */}
  <img 
    src="/images/blob.png" 
    alt=""
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', // Centers it exactly
      width: '500px',                     // Decreased size (adjust as needed)
      height: 'auto',
      zIndex: 0,                          // Puts it behind the text
      opacity: 0.6,                       // Makes it subtle for readability
      pointerEvents: 'none'               // User can still click through it
    }} 
  />

  {/* The Content */}
  <div className="container reveal reveal--scale" style={{ position: 'relative', zIndex: 1 }}>
    <h2 className="mb-0">Ready to find your plan?</h2>
    <p>Get a quote and see benefits tailored to you or your team.</p>
    <NavLink className="btn btn-primary" to="/plans">Get started</NavLink>
  </div>

</section>
    </>
  )
}
