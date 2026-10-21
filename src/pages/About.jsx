import { Link } from 'react-router-dom'
import { ArrowRight, Award, Wrench, Truck, Users } from 'lucide-react'
import { PageHero, Reveal, Counter } from '../components/ui'
import Clients from '../components/Clients'
import CtaBand from '../components/CtaBand'
import { STATS } from '../data'

const VALUES = [
  { i: <Award />, t: 'Quality first', d: 'State-of-the-art infrastructure that lets us balance build quality and cost.' },
  { i: <Users />, t: 'Customer satisfaction', d: 'Our biggest achievement since inception — and our daily goal.' },
  { i: <Truck />, t: 'On-site delivery', d: 'Machines delivered and installed at your location.' },
  { i: <Wrench />, t: 'Expert support', d: 'Qualified engineers keep your machines running smoothly.' },
]

export default function About() {
  return (
    <>
      <PageHero eyebrow="About us" title="Brewing trust for three decades" crumbs={['Home', '/', 'About']}>
        Max Vending is a Delhi-based company that designs and manufactures coffee vending machines.
      </PageHero>
      <section className="about">
        <div className="container about-grid">
          <Reveal>
            <span className="eyebrow">Our story</span>
            <h2 className="title">Designed and made in Delhi</h2>
            <p>Our state-of-the-art infrastructure helps us deliver machines that balance quality and cost. From compact two-lane machines to high-capacity six-lane models, every Max machine is built to serve fresh tea and coffee reliably.</p>
            <p>Customer satisfaction is our main achievement since inception. With three decades of experience and a team of qualified engineers, we stand behind every machine we deliver.</p>
            <Link to="/products" className="btn btn-dark" style={{ marginTop: 28 }}>See our machines <ArrowRight size={18} /></Link>
          </Reveal>
          <Reveal i={2}><div className="about-visual"><div className="main"><img src="/img/gallery/3.jpg" alt="Max machine" /></div></div></Reveal>
        </div>
        <div className="container">
          <div className="stats">{STATS.map((s, i) => <Reveal key={s.label} i={i} className="stat"><Counter n={s.n} suffix={s.suffix} /><span>{s.label}</span></Reveal>)}</div>
        </div>
      </section>
      <section className="products">
        <div className="container">
          <Reveal className="center"><span className="eyebrow">What we stand for</span><h2 className="title">Our values</h2></Reveal>
          <div className="contact-grid">
            {VALUES.map((v, k) => <Reveal key={v.t} i={k} className="c-card"><div className="i">{v.i}</div><h3>{v.t}</h3><p>{v.d}</p></Reveal>)}
          </div>
        </div>
      </section>
      <Clients />
      <CtaBand />
    </>
  )
}
