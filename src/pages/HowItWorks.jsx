import { NavLink } from 'react-router-dom'

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <h1>How It Works</h1>
        <div className="grid grid--2 mt-24" style={{ alignItems: 'start' }}>
          <div>
            <ol className="checklist" style={{ listStyle: 'none' }}>
              <li>Enroll in a plan (Individual, SME, Corporate).</li>
              <li>Receive your membership card or ID.</li>
              <li>Select a preferred primary provider (where applicable).</li>
              <li>Visit accredited healthcare providers.</li>
              <li>Present your membership ID and get care per plan terms.</li>
            </ol>
            <p className="mt-12">
              Coverage specifics, exclusions and waiting periods vary by plan. We’ll clarify details before activation.
            </p>
            <NavLink className="btn btn-primary mt-12" to="/plans">Find a plan</NavLink>
          </div>
          <div className="hero-media">
            <img src="/images/howitworks.png" alt="Illustration of steps to access care" />
          </div>
        </div>
      </div>
    </section>
  )
}
