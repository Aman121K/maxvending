import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Reveal } from './ui'
import { PHONE, PHONE_LABEL } from '../data'

export default function CtaBand() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <Reveal className="cta-band">
          <div>
            <h2 className="title" style={{ color: '#fff' }}>Ready to serve fresh tea & coffee?</h2>
            <p>Talk to our team and get the right machine for your space.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/enquiry" className="btn btn-dark">Get a Quote</Link>
            <a href={`tel:${PHONE}`} className="btn btn-ghost"><Phone size={16} /> {PHONE_LABEL}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
