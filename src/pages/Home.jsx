import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero, { TrustBar } from '../components/Hero'
import Clients from '../components/Clients'
import ProductCard from '../components/ProductCard'
import CtaBand from '../components/CtaBand'
import { Reveal } from '../components/ui'
import { PRODUCTS } from '../data'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />

      <section className="about">
        <div className="container about-grid">
          <Reveal>
            <span className="eyebrow">About us</span>
            <h2 className="title">Quality and cost, in balance.</h2>
            <p>Max Vending designs and manufactures coffee vending machines in India. Our state-of-the-art infrastructure lets us balance quality and cost.</p>
            <p>Customer satisfaction has been our main achievement since inception.</p>
            <Link to="/about" className="btn btn-outline" style={{ marginTop: 24 }}>More about Max Vending</Link>
          </Reveal>
          <Reveal i={1}>
            <div className="about-visual"><div className="main"><img src="/img/products/4-lane.png" alt="Max 4 lane vending machine" /></div></div>
          </Reveal>
        </div>
      </section>

      <section className="soft">
        <div className="container">
          <div className="head-row">
            <Reveal>
              <span className="eyebrow">Our products</span>
              <h2 className="title">Premix based machines</h2>
            </Reveal>
            <Link to="/products" className="btn btn-outline">All products</Link>
          </div>
          <div className="grid">{PRODUCTS.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}</div>
          <div className="promo">
            <Reveal><Link to="/bean-to-cup" className="promo-card"><h3>Bean to Cup Machines</h3><p>Freshly ground coffee brewed cup by cup.</p><span>Learn more <ArrowRight size={15} /></span></Link></Reveal>
            <Reveal i={1}><Link to="/hand-sanitizer" className="promo-card"><h3>Hand Sanitizer</h3><p>Touch-free sanitizer dispensers.</p><span>Learn more <ArrowRight size={15} /></span></Link></Reveal>
          </div>
        </div>
      </section>

      <Clients />
      <CtaBand />
    </>
  )
}
