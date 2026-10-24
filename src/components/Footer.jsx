import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import Logo from './Logo'
import WhatsAppIcon from './WhatsAppIcon'
import { NAV, PRODUCTS, PHONE, PHONE_LABEL, EMAIL, ADDRESS } from '../data'

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="foot-grid">
            <div>
              <Logo height={56} />
              <p style={{ marginTop: 14, maxWidth: 280 }}>Designers and manufacturers of tea & coffee vending machines. Made in India.</p>
            </div>
            <div><h4>Quick links</h4>{NAV.map(([l, h]) => <Link key={h} to={h}>{l}</Link>)}</div>
            <div><h4>Our products</h4>{PRODUCTS.map((p) => <Link key={p.slug} to={`/products/${p.slug}`}>{p.name} · {p.tag}</Link>)}</div>
            <div>
              <h4>Contact</h4>
              <a href={`tel:${PHONE}`}>{PHONE_LABEL}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <p>{ADDRESS}</p>
            </div>
          </div>
          <p className="copy">© {new Date().getFullYear()} Max Vending Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
      <div className="fab">
        <a className="wa" href={`https://wa.me/${PHONE.replace('+', '')}?text=${encodeURIComponent('Hello Max Vending, I would like to know more about your vending machines.')}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
          <span className="fab-label">Chat with us</span><span className="fab-ic"><WhatsAppIcon size={30} /></span>
        </a>
        <a className="call" href={`tel:${PHONE}`} aria-label="Call Max Vending"><span className="fab-label">Call now</span><span className="fab-ic"><Phone size={24} /></span></a>
      </div>
    </>
  )
}
