import { Link, useParams, Navigate } from 'react-router-dom'
import { Phone, ArrowLeft, Download } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import ProductCard from '../components/ProductCard'
import EnquiryForm from '../components/EnquiryForm'
import { PRODUCTS, BEAN_MACHINES, SPEC_ROWS, DRINK_ICONS, PHONE } from '../data'

const CATEGORIES = {
  premix: { list: PRODUCTS, base: '/products', label: 'Premix Machines', listLabel: 'Products' },
  bean: { list: BEAN_MACHINES, base: '/bean-to-cup', label: 'Bean to Cup Machines', listLabel: 'Bean to Cup' },
}

export default function ProductDetail({ category = 'premix' }) {
  const { slug } = useParams()
  const cat = CATEGORIES[category]
  const p = cat.list.find((x) => x.slug === slug)
  if (!p) return <Navigate to={cat.base} replace />
  const others = cat.list.filter((x) => x.slug !== slug).slice(0, 4)
  const rows = SPEC_ROWS.filter(([k]) => p.specs[k])
  const full = `${p.name} ${p.tag}`
  return (
    <>
      <PageHero eyebrow={cat.label} title={`${p.name} · ${p.tag}`} crumbs={['Home', '/', cat.listLabel, '/', p.name]}>{p.summary}</PageHero>
      <section>
        <div className="container detail-grid">
          <div className="detail-pic"><img src={p.img} alt={full} /></div>
          <Reveal>
            <Link to={cat.base} className="back"><ArrowLeft size={16} /> All {cat.listLabel.toLowerCase()}</Link>
            <h2 className="title" style={{ marginTop: 12 }}>{p.name} <span style={{ color: 'var(--red)' }}>{p.tag}</span></h2>
            {p.drinks?.length > 0 && (
              <div className="drinks">
                {p.drinks.map((d) => <span key={d}>{DRINK_ICONS[d] && <img src={DRINK_ICONS[d]} alt="" />}{d}</span>)}
              </div>
            )}
            <h3 className="spec-title">Key specifications</h3>
            <table className="specs"><tbody>{rows.map(([k, label]) => <tr key={k}><th>{label}</th><td>{p.specs[k]}</td></tr>)}</tbody></table>
            <p className="note">Due to ongoing development, specifications are subject to change.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <a href="#quote" className="btn btn-red">Enquire Now</a>
              <a href="/img/catalogue.pdf" target="_blank" rel="noreferrer" className="btn btn-outline"><Download size={16} /> Brochure</a>
              <a href={`tel:${PHONE}`} className="btn btn-outline"><Phone size={16} /> Call</a>
            </div>
          </Reveal>
        </div>
      </section>
      <section className="enquiry" id="quote">
        <div className="container enq-grid">
          <Reveal><span className="eyebrow">Enquiry</span><h2 className="title">Interested in the {full}?</h2><p className="lead">Share your details and we will get back to you with pricing and availability.</p></Reveal>
          <Reveal i={1}><EnquiryForm key={slug} product={full} /></Reveal>
        </div>
      </section>
      {others.length > 0 && (
        <section className="soft">
          <div className="container">
            <h2 className="title">Other machines</h2>
            <div className="grid">{others.map((o, i) => <ProductCard key={o.slug} p={o} i={i} base={cat.base} />)}</div>
          </div>
        </section>
      )}
    </>
  )
}
