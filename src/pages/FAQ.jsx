import { useState } from 'react'

const qs = [
  {
    q: 'What services are covered?',
    a: 'Coverage varies by plan and may include consultations, diagnostics, drugs, inpatient and outpatient care, emergency and maternity. Confirm plan brochures for details and exclusions.',
  },
  {
    q: 'How do I access care?',
    a: 'Visit an accredited provider and present your Eagle HMO ID. Some services require pre‑authorization—our support team will guide you.',
  },
  {
    q: 'Are there waiting periods?',
    a: 'Yes, certain benefits may have waiting periods depending on the plan. We’ll state these clearly before activation.',
  },
  {
    q: 'Is Eagle HMO accredited?',
    a: 'HMOs must be accredited by the NHIA to operate. Please verify our current accreditation via the official NHIA list or contact us for the latest status.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section">
      <div className="container">
        <h1>Frequently Asked Questions</h1>
        <div data-accordion>
          {qs.map((item, i) => {
            const open = i === openIndex
            return (
              <div className={`acc ${open ? 'open' : ''}`} key={i}>
                <div
                  className="acc-header"
                  role="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                >
                  <strong>{item.q}</strong><span>{open ? '−' : '+'}</span>
                </div>
                <div className="acc-body" style={{ maxHeight: open ? '1000px' : '0px' }}>
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
