import { useMemo, useState } from 'react'

const SAMPLE = [
  { name: 'Mercy Thomas Oredugba Hospital', city: 'Lagos', state: 'Lagos', type: 'Hospital' },
  { name: 'Joedan Hospital Ltd', city: 'Lagos', state: 'Lagos', type: 'Hospital' },
  { name: 'Hillstar Clinic', city: 'Lagos', state: 'Lagos', type: 'Clinic' },
  { name: 'Primus Hospital', city: 'Lagos', state: 'Lagos', type: 'Hospital' },
  { name: 'Shepherdhill Medical Centre', city: 'Lagos', state: 'Lagos', type: 'Medical Centre' },
  { name: 'Saint Daniel Hospital', city: 'Lagos', state: 'Lagos', type: 'Hospital' },
  { name: 'Toptee Medical Centre', city: 'Lagos', state: 'Lagos', type: 'Medical Centre' },
  { name: 'Sample Facility', city: 'Damaturu', state: 'Yobe', type: 'Clinic' },
  { name: 'Sample Facility', city: 'Gusau', state: 'Zamfara', type: 'Hospital' },
]

export default function Providers() {
  const [q, setQ] = useState('')
  const [state, setState] = useState('')

  const filtered = useMemo(() => {
    return SAMPLE.filter(p => {
      const hay = `${p.name} ${p.city} ${p.state} ${p.type}`.toLowerCase()
      const matchesQ = hay.includes(q.toLowerCase())
      const matchesState = !state || p.state.toLowerCase() === state.toLowerCase()
      return matchesQ && matchesState
    })
  }, [q, state])

  return (
    <section className="section">
      <div className="container">
        <h1>Accredited Providers</h1>
        <p>Search clinics and hospitals in our network. Contact us to confirm your plan’s access level and provider coverage.</p>
        <div className="hero-media mt-12" style={{ maxWidth: '560px', marginInline: 'auto' }}>
          <img src="/images/aug.png" alt="Collage of accredited hospitals and clinics" loading="lazy" />

        </div>

        <div className="form-row form-row-2 mt-12">
          <div><input className="input" type="search" placeholder="Search by name, city or state…" value={q} onChange={e => setQ(e.target.value)} /></div>
          <div>
            <select className="input" aria-label="Filter by state" value={state} onChange={e => setState(e.target.value)}>
              <option value="">All States</option>
              <option>Lagos</option>
              <option>Abuja (FCT)</option>
              <option>Yobe</option>
              <option>Zamfara</option>
            </select>
          </div>
        </div>

        <div className="card mt-24">
          <div className="card-body" style={{ padding: 0 }}>
            <table className="table" aria-label="Provider list">
              <thead><tr><th>Provider</th><th>City</th><th>State</th><th>Type</th></tr></thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr key={i} data-provider-row>
                    <td>{p.name}</td><td>{p.city}</td><td>{p.state}</td><td>{p.type}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr><td colSpan={4} style={{ padding: '16px' }}>No matching providers</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="hero-media mt-24" style={{ maxWidth: '560px', marginInline: 'auto' }}>
          <img src="/images/olc.jpg" alt="Illustration representing quality care across our network" loading="lazy" />
        </div>
        <p className="meta mt-12">This is a sample list. For full and updated provider list, please contact our support team.</p>
      </div>
    </section>
  )
}