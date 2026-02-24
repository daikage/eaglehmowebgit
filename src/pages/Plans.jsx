import { NavLink } from 'react-router-dom'

export default function Plans() {
  return (
    <section className="section">
      <div className="container">
        <h1>Our Health Plans</h1>
        <p>Choose a plan category below. Plan brochures list covered services, limits, exclusions and waiting periods.</p>
        <div className="grid grid--3 mt-24">
          <div id="individuals" className="card">
            <div className="card-body">
              <h3>Individuals & Families</h3>
              <p>Outpatient, inpatient, emergency, maternity (by plan), labs &amp; drugs through accredited providers.</p>
              <ul className="checklist">
                <li>Flexible tiers</li>
                <li>Spouse and children options</li>
                <li>Preventive care</li>
              </ul>
              <div className="mt-12">
                <NavLink className="btn btn-primary" to="/contact">Request quote</NavLink>
              </div>
            </div>
          </div>
          <div id="smes" className="card">
            <div className="card-body">
              <h3>SMEs</h3>
              <p>Budget‑friendly cover for teams of 5–200 employees with simple onboarding.</p>
              <ul className="checklist">
                <li>Employee + dependents</li>
                <li>Tiered network options</li>
                <li>Wellness add‑ons</li>
              </ul>
              <div className="mt-12">
                <NavLink className="btn btn-primary" to="/contact">Talk to sales</NavLink>
              </div>
            </div>
          </div>
          <div id="corporate" className="card">
            <div className="card-body">
              <h3>Corporate Plans</h3>
              <p>Custom benefits, service‑level agreements and reporting for larger organizations.</p>
              <ul className="checklist">
                <li>Tailored benefits</li>
                <li>Dedicated account team</li>
                <li>On‑site activations</li>
              </ul>
              <div className="mt-12">
                <NavLink className="btn btn-primary" to="/contact">Book a consultation</NavLink>
              </div>
            </div>
          </div>
        </div>
        <p className="meta mt-24">Note: Specific benefits, caps, pre‑auth and exclusions vary by plan. Confirm details with our team.</p>
      </div>
    </section>
  )
}
