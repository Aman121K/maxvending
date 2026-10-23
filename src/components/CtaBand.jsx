import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { Reveal } from './ui'
import { PHONE, PHONE_LABEL } from '../data'

export default function CtaBand() {
  return (
    <section>
      <div className="container">
        <Reveal className="cta-band">
          <div>
            <h2 className="title">Looking for a vending machine?</h2>
            <p>Talk to our team for the right machine, pricing and delivery.</p>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/enquiry" className="btn btn-red">Request a Quote</Link>
            <a href={`tel:${PHONE}`} className="btn btn-ghost"><Phone size={16} /> {PHONE_LABEL}</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
