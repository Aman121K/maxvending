import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import Hero, { Marquee } from '../components/Hero'
import Clients from '../components/Clients'
import ProductCard from '../components/ProductCard'
import CtaBand from '../components/CtaBand'
import { Process, Industries } from '../components/Extras'
import { Reveal, Counter } from '../components/ui'
import { PRODUCTS, FEATURES, STATS } from '../data'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <section className="about">
        <div className="container">
          <div className="about-grid">
            <Reveal>
              <span className="eyebrow">About us</span>
              <h2 className="title">Quality you can taste, at a cost that makes sense.</h2>
              <p>Max Vending is a Delhi-based company that designs and manufactures coffee vending machines. Our state-of-the-art infrastructure helps us balance quality and cost.</p>
              <Link to="/about" className="btn btn-dark" style={{ marginTop: 28 }}>Know more <ArrowRight size={18} /></Link>
            </Reveal>
            <Reveal i={2}>
              <div className="about-visual">
                <div className="main"><img src="/img/gallery/1.jpg" alt="Max vending machine" /></div>
                <motion.div className="badge" animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity }}><b>30+</b>years of trust</motion.div>
              </div>
            </Reveal>
          </div>
          <div className="stats">
            {STATS.map((s, i) => <Reveal key={s.label} i={i} className="stat"><Counter n={s.n} suffix={s.suffix} /><span>{s.label}</span></Reveal>)}
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <Reveal className="center">
            <span className="eyebrow">Our products</span>
            <h2 className="title">Premix vending machines</h2>
            <p className="lead">Pick the lane count that fits your space — from compact 2-lane to high-capacity 6-lane machines.</p>
          </Reveal>
          <div className="grid">{PRODUCTS.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}</div>
          <div className="promo">
            <Reveal><div><h3>Bean to Cup Machines</h3><p>Freshly ground coffee, brewed per cup for a café-style experience.</p><Link to="/bean-to-cup"><small>Learn more →</small></Link></div></Reveal>
            <Reveal i={1}><div><h3>Hand Sanitizer</h3><p>Touch-free sanitizer dispensers for offices, schools and public spaces.</p><Link to="/hand-sanitizer"><small>Learn more →</small></Link></div></Reveal>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <Reveal className="center">
            <span className="eyebrow">Why Max Vending</span>
            <h2 className="title">Service that goes beyond the machine</h2>
          </Reveal>
          <div className="feat-grid">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} i={i} className="feat">
                <div className="ic"><img src={f.icon} alt="" /></div><h3>{f.title}</h3><p>{f.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="catalog"><a href="/img/catalogue.pdf" target="_blank" rel="noreferrer" className="btn btn-red"><Download size={18} /> Download Catalogue</a></Reveal>
        </div>
      </section>

      <Process />
      <Industries />
      <Clients />
      <CtaBand />
    </>
  )
}
