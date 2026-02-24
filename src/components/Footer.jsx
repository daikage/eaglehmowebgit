// ... existing imports ...
import { useMemo } from 'react'
import { NavLink } from 'react-router-dom'

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid--3">
          <div>
            <strong>Eagle HMO</strong>
            <p className="mt-8">
              Affordable, flexible health insurance for individuals, families, SMEs and corporates in Nigeria.
            </p>
          </div>
          <div>
            <strong>Offices</strong>
            <p className="mt-8">
              Lagos (Head Office): 3 Murphy Atsepoyi Street, Ogudu GRA, Kosofe LGA, Lagos<br />
              Abuja: Plot 302 Cadastral Zone, Behind American International School, Durumi, Abuja FCT
            </p>
          </div>
          <div>
            <strong>Contact</strong>
            <p className="mt-8">
              Phone: +234 802 181 1666 / +234 902 000 6666<br />
              Email: hello@eaglehmo.com, info@eaglehmo.com<br />
              {/* Website: <a href="http://eaglehmo.com/" rel="noopener">eaglehmo.com</a> */}
            </p>
            <NavLink className="btn btn-outline mt-12" to="/contact">Talk to us</NavLink>
          </div>
        </div>
        <div className="copyright">&copy; <span>{year}</span> Eagle HMO. All rights reserved.</div>
      </div>
    </footer>
  )
}