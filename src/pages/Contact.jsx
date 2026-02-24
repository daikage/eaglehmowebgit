export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="grid grid--2 mt-24">
          <div>
            <h3>Talk to sales or support</h3>
            <p>
              Phone: +234 802 181 1666 / +234 902 000 6666<br />
              Email: hello@eaglehmo.com, info@eaglehmo.com
            </p>
            <h3 className="mt-24">Offices</h3>
            <p>
              <strong>Lagos (HQ):</strong> 3 Murphy Atsepoyi Street, Ogudu GRA, Kosofe LGA, Lagos<br />
              <strong>Abuja:</strong> Plot 302 Cadastral Zone, Behind America International School, Durumi, Abuja FCT
            </p>
            <div className="hero-media mt-12">
              <img src="/images/contact.jpg" alt="Lagos head office exterior" />
            </div>
          </div>
          <div>
            <h3>Send a message</h3>
            <form action="https://formspree.io/f/your-id" method="POST">
              <div className="form-row form-row-2">
                <div><label>Name<br /><input className="input" name="name" required /></label></div>
                <div><label>Email<br /><input className="input" type="email" name="email" required /></label></div>
              </div>
              <div className="form-row">
                <div><label>Phone<br /><input className="input" name="phone" /></label></div>
              </div>
              <div className="form-row">
                <div><label>Message<br /><textarea className="input" name="message" rows="5" required></textarea></label></div>
              </div>
              <button className="btn btn-primary" type="submit">Send</button>
            </form>
            <p className="meta mt-8">By submitting, you agree to be contacted regarding your request.</p>
          </div>
        </div>

        {/* CTA band */}
        <div className="cta-band mt-24">
          <h3 className="mb-0">Prefer a phone call?</h3>
          <p>Our support team is available to assist with pre‑auth, referrals and plan questions.</p>
          <a className="btn btn-outline" href="tel:+2348021811666">Call now</a>
        </div>
      </div>
    </section>
  )
}
