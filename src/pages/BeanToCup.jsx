import { Link } from 'react-router-dom'
import { Coffee, Droplets, Sparkles } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import EnquiryForm from '../components/EnquiryForm'

export default function BeanToCup() {
  const pts = [
    { i: <Coffee />, t: 'Freshly ground', d: 'Coffee beans ground for every cup, for fuller aroma and flavour.' },
    { i: <Droplets />, t: 'Brewed to order', d: 'Each cup is brewed on demand, the café way.' },
    { i: <Sparkles />, t: 'Premium experience', d: 'A step up for lobbies, boardrooms and premium workspaces.' },
  ]
  return (
    <>
      <PageHero eyebrow="Products" title="Bean to Cup Machines" crumbs={['Home', '/', 'Products', '/', 'Bean to Cup']}>
        Café-style coffee from whole beans, at the touch of a button.
      </PageHero>
      <section>
        <div className="container">
          <div className="contact-grid" style={{ marginTop: 0 }}>{pts.map((p, k) => <Reveal key={p.t} i={k} className="c-card"><div className="i">{p.i}</div><h3>{p.t}</h3><p>{p.d}</p></Reveal>)}</div>
          <Reveal className="center" style={{ marginTop: 40 }}><p className="lead">Models and specifications are available on request. <Link to="/products" style={{ color: 'var(--red)', fontWeight: 600 }}>See premix machines</Link></p></Reveal>
        </div>
      </section>
      <section className="enquiry">
        <div className="container enq-grid">
          <Reveal><span className="eyebrow">Enquiry</span><h2 className="title">Ask about Bean to Cup</h2></Reveal>
          <Reveal i={2}><EnquiryForm product="Bean to Cup Machine" /></Reveal>
        </div>
      </section>
    </>
  )
}
