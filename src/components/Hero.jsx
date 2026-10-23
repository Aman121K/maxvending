import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Truck, Wrench, Award, Download } from 'lucide-react'
import { STATS } from '../data'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="eyebrow">Moti Nagar, New Delhi</span>
          <h1>Tea & coffee vending machines, designed and made in Delhi.</h1>
          <p className="sub">
            Max Vending manufactures premix tea and coffee vending machines for offices, factories and institutions, with on-site delivery and service from our own engineers.
          </p>
          <div className="hero-cta">
            <Link to="/products" className="btn btn-red">View Products</Link>
            <Link to="/enquiry" className="btn btn-outline">Request a Quote</Link>
          </div>
          <div className="hero-facts">
            {STATS.map((s) => <div key={s.label}><b>{s.n}{s.suffix}</b><span>{s.label}</span></div>)}
          </div>
        </motion.div>
        <motion.div className="hero-panel" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div className="hero-machines">
            <img src="/img/gallery/3.jpg" alt="Max Robo 2/3 lane vending machine" />
            <img className="main" src="/img/gallery/2.jpg" alt="Max Robo 4/6 lane vending machine" />
            <img src="/img/gallery/5.jpg" alt="Max Cute 2 lane vending machine" />
          </div>
          <div className="hero-caption"><span>Premix range</span><span>2 to 6 lane models</span></div>
        </motion.div>
      </div>
    </section>
  )
}

export function TrustBar() {
  const items = [
    [Truck, 'On-site delivery'],
    [Wrench, 'Qualified service engineers'],
    [Award, 'Three decades of experience'],
  ]
  return (
    <div className="trust">
      <div className="container trust-in">
        {items.map(([Ic, t]) => <div className="trust-item" key={t}><Ic size={20} />{t}</div>)}
        <a className="trust-item" href="/img/catalogue.pdf" target="_blank" rel="noreferrer"><Download size={20} />Download catalogue</a>
      </div>
    </div>
  )
}
