import { Link, useParams, Navigate } from 'react-router-dom'
import { Phone, Check, ArrowLeft } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import ProductCard from '../components/ProductCard'
import EnquiryForm from '../components/EnquiryForm'
import { PRODUCTS, PHONE } from '../data'

export default function ProductDetail() {
  const { slug } = useParams()
  const p = PRODUCTS.find((x) => x.slug === slug)
  if (!p) return <Navigate to="/products" replace />
  const others = PRODUCTS.filter((x) => x.slug !== slug).slice(0, 3)
  const specs = [['Model', `${p.name} (${p.tag})`], ['Lanes', p.lanes], ['Type', p.type], ['Best for', p.best], ['Delivery', 'On-site delivery & installation'], ['Support', 'Qualified service engineers']]
  return (
    <>
      <PageHero eyebrow={p.tag} title={`${p.name} Vending Machine`} crumbs={['Home', '/', 'Products', '/', p.name]}>{p.desc}</PageHero>
      <section>
        <div className="container detail-grid">
          <div className="detail-pic"><img src={p.img} alt={`${p.name} ${p.tag}`} /></div>
          <Reveal>
            <Link to="/products" className="back"><ArrowLeft size={16} /> All products</Link>
            <h2 className="title" style={{ marginTop: 12 }}>{p.name} <span style={{ color: 'var(--red)' }}>{p.tag}</span></h2>
            <p className="lead">{p.desc}</p>
            <table className="specs"><tbody>{specs.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table>
            <ul className="ticks">
              {['Easy to operate, easy to refill', 'Built and serviced by Max Vending', 'Catalogue and pricing on request'].map((t) => <li key={t}><Check size={18} /> {t}</li>)}
            </ul>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 26 }}>
              <a href="#quote" className="btn btn-red">Get a Quote</a>
              <a href={`tel:${PHONE}`} className="btn btn-outline"><Phone size={16} /> Call</a>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="enquiry" id="quote">
        <div className="container enq-grid">
          <Reveal><span className="eyebrow">Quick enquiry</span><h2 className="title">Interested in the {p.name} {p.tag}?</h2><p className="lead">Share your details and we'll reach out with pricing and availability.</p></Reveal>
          <Reveal i={2}><EnquiryForm key={slug} product={`${p.name} ${p.tag}`} /></Reveal>
        </div>
      </section>
      <section className="soft">
        <div className="container">
          <Reveal className="center"><h2 className="title">Other machines</h2></Reveal>
          <div className="grid">{others.map((o, i) => <ProductCard key={o.slug} p={o} i={i} />)}</div>
        </div>
      </section>
    </>
  )
}
