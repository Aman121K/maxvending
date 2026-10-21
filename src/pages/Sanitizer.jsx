import { Hand, ShieldCheck, Building2 } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import EnquiryForm from '../components/EnquiryForm'

export default function Sanitizer() {
  const pts = [
    { i: <Hand />, t: 'Touch-free', d: 'Dispenses sanitizer without contact for safer hygiene.' },
    { i: <ShieldCheck />, t: 'Healthier spaces', d: 'Encourage regular hand hygiene across your premises.' },
    { i: <Building2 />, t: 'Anywhere', d: 'Offices, schools, shops, hospitals and public places.' },
  ]
  return (
    <>
      <PageHero eyebrow="Products" title="Hand Sanitizer Dispensers" crumbs={['Home', '/', 'Products', '/', 'Hand Sanitizer']}>
        Automatic sanitizer dispensers from the makers of Max vending machines.
      </PageHero>
      <section>
        <div className="container"><div className="contact-grid" style={{ marginTop: 0 }}>{pts.map((p, k) => <Reveal key={p.t} i={k} className="c-card"><div className="i">{p.i}</div><h3>{p.t}</h3><p>{p.d}</p></Reveal>)}</div></div>
      </section>
      <section className="enquiry">
        <div className="container enq-grid">
          <Reveal><span className="eyebrow">Enquiry</span><h2 className="title">Ask about hand sanitizer</h2></Reveal>
          <Reveal i={2}><EnquiryForm product="Hand Sanitizer" /></Reveal>
        </div>
      </section>
    </>
  )
}
