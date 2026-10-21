import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import { PHONE, PHONE_LABEL, EMAIL, HOURS, ADDRESS, LANDLINES } from '../data'

export default function Contact() {
  const cards = [
    { i: <Phone />, t: 'Call us', c: <><a href={`tel:${PHONE}`}>{PHONE_LABEL}</a><p>{LANDLINES.join(', ')}</p></> },
    { i: <Mail />, t: 'Email', c: <a href={`mailto:${EMAIL}`}>{EMAIL}</a> },
    { i: <MapPin />, t: 'Visit us', c: <p>{ADDRESS}</p> },
    { i: <Clock />, t: 'Working hours', c: <><p>{HOURS}</p><p>Sunday closed</p></> },
  ]
  return (
    <>
      <PageHero eyebrow="Contact us" title="We'd love to hear from you" crumbs={['Home', '/', 'Contact']}>Call, email or drop by our Moti Nagar office.</PageHero>
      <section>
        <div className="container">
          <div className="contact-grid" style={{ marginTop: 0 }}>{cards.map((c, k) => <Reveal key={c.t} i={k} className="c-card"><div className="i">{c.i}</div><h3>{c.t}</h3>{c.c}</Reveal>)}</div>
          <Reveal className="map"><iframe title="Max Vending location" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent('Max Vending, B-40, Moti Nagar, New Delhi 110015')}&output=embed`} /></Reveal>
        </div>
      </section>
    </>
  )
}
