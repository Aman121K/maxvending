import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import ProductCard from '../components/ProductCard'
import EnquiryForm from '../components/EnquiryForm'
import { BEAN_MACHINES, PHONE, PHONE_LABEL } from '../data'

export default function BeanToCup() {
  return (
    <>
      <PageHero eyebrow="Products" title="Bean to Cup Machines" crumbs={['Home', '/', 'Products', '/', 'Bean to Cup']}>
        Freshly ground coffee, brewed cup by cup.
      </PageHero>
      <section>
        <div className="container">
          {BEAN_MACHINES.length > 0 ? (
            <div className="grid" style={{ marginTop: 0 }}>{BEAN_MACHINES.map((p, i) => <ProductCard key={p.slug} p={p} i={i} base="/bean-to-cup" />)}</div>
          ) : (
            <Reveal className="empty">
              <h2 className="title">Models and specifications on request</h2>
              <p className="lead">We offer several Bean to Cup models. Contact us for the range, specifications and pricing.</p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24, justifyContent: 'center' }}>
                <a href="#quote" className="btn btn-red">Enquire Now</a>
                <a href={`tel:${PHONE}`} className="btn btn-outline"><Phone size={16} /> {PHONE_LABEL}</a>
              </div>
              <p className="note" style={{ marginTop: 20 }}>Looking for premix machines instead? <Link to="/products" style={{ color: 'var(--red)', fontWeight: 600 }}>View premix range</Link></p>
            </Reveal>
          )}
        </div>
      </section>
      <section className="enquiry" id="quote">
        <div className="container enq-grid">
          <Reveal><span className="eyebrow">Enquiry</span><h2 className="title">Ask about Bean to Cup</h2></Reveal>
          <Reveal i={1}><EnquiryForm product="Bean to Cup Machine" /></Reveal>
        </div>
      </section>
    </>
  )
}
