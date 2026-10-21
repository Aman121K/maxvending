import { useState } from 'react'
import WhatsAppIcon from './WhatsAppIcon'
import { PRODUCTS, PHONE } from '../data'

const label = (p) => `${p.name} ${p.tag}`

export default function EnquiryForm({ product }) {
  const [f, setF] = useState({ name: '', phone: '', email: '', product: product || label(PRODUCTS[0]), msg: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const t = (s) => encodeURIComponent(s)
    const text = `Hello Max Vending,%0AName: ${t(f.name)}%0APhone: ${t(f.phone)}%0AEmail: ${t(f.email)}%0AInterested in: ${t(f.product)}%0AMessage: ${t(f.msg)}`
    window.open(`https://wa.me/${PHONE.replace('+', '')}?text=${text}`, '_blank')
  }
  return (
    <form onSubmit={submit}>
      <div className="row2">
        <label>Name<input required value={f.name} onChange={set('name')} placeholder="Your name" /></label>
        <label>Phone<input required type="tel" value={f.phone} onChange={set('phone')} placeholder="+91" /></label>
      </div>
      <label>Email<input type="email" value={f.email} onChange={set('email')} placeholder="you@company.com" /></label>
      <label>Machine
        <select value={f.product} onChange={set('product')}>
          {PRODUCTS.map((p) => <option key={p.slug}>{label(p)}</option>)}
          <option>Bean to Cup Machine</option><option>Hand Sanitizer</option>
        </select>
      </label>
      <label>Message<textarea value={f.msg} onChange={set('msg')} placeholder="Tell us about your requirement…" /></label>
      <button className="btn btn-red" type="submit" style={{ justifyContent: 'center' }}><WhatsAppIcon size={20} /> Send on WhatsApp</button>
    </form>
  )
}
