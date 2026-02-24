export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1>About Eagle HMO</h1>
          <p>
            Eagle HMO is a health maintenance organization operating in Nigeria, providing managed health insurance plans to
            individuals, families, SMEs and corporate clients. We focus on affordable, flexible coverage and access to quality
            care through accredited providers nationwide.
          </p>

          {/* Company Overview */}
          <div className="grid grid--3 mt-24">
            <div className="card">
              <div className="card-body">
                <h3>Company Overview</h3>
                <ul className="checklist">
                  <li>Name: Eagle HMO</li>
                  <li>Type: Health Maintenance Organization</li>
                  <li>Industry: Health Insurance / Managed Care</li>
                  <li>Country: Nigeria</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Head Office</h3>
                <p><strong>Lagos (HQ):</strong> 3 Murphy Atsepoyi Street, Ogudu GRA, Kosofe LGA, Lagos</p>
                <h3 className="mt-12">Branch</h3>
                <p><strong>Abuja:</strong> Plot 302 Cadastral Zone, Behind America International School, Durumi, Abuja FCT</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h3>Contact</h3>
                <p>
                  Phone: +234 802 181 1666 / +234 902 000 6666<br />
                  Email: hello@eaglehmo.com, info@eaglehmo.com<br />
                  {/* Website: <a href="http://eaglehmo.com/" rel="noopener">eaglehmo.com</a> */}
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Media */}
          <div className="grid grid--2 mt-24" style={{ alignItems: 'center' }}>
            <div className="hero-media"><img src="/images/team-care.jpg" alt="Our team supporting members" /></div>
            <div>
              <h3>Our mission</h3>
              <p>To make quality healthcare accessible and affordable through simple plans, great service and a strong provider network.</p>
              <h3>What we offer</h3>
              <ul className="checklist">
                <li>Plans for individuals, families, SMEs and corporate groups</li>
                <li>Access to accredited hospitals and clinics</li>
                <li>Support for pre‑authorizations and referrals</li>
                <li>Transparent benefits and limits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="section" style={{ background: 'var(--green-050)' }}>
        <div className="container">
          <h2>Summary</h2>
          <p>
            Eagle HMO is a licensed health maintenance organization in Nigeria offering comprehensive health insurance
            coverage for individuals, families, SMEs and corporate groups. With headquarters in Lagos and a presence in Abuja,
            we provide affordable, flexible managed care plans and access to a nationwide network of accredited providers.
          </p>
        </div>
      </section>
    </>
  )
}
