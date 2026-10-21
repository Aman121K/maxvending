import { Link } from 'react-router-dom'
import { PageHero, Reveal } from '../components/ui'
import ProductCard from '../components/ProductCard'
import CtaBand from '../components/CtaBand'
import { PRODUCTS } from '../data'

export default function Products() {
  return (
    <>
      <PageHero eyebrow="Our products" title="Vending machines for every space" crumbs={['Home', '/', 'Products']}>
        Premix tea & coffee machines, bean-to-cup machines and hand sanitizer dispensers.
      </PageHero>
      <section className="products">
        <div className="container">
          <Reveal><h2 className="title">Premix based machines</h2></Reveal>
          <div className="grid">{PRODUCTS.map((p, i) => <ProductCard key={p.slug} p={p} i={i} />)}</div>
          <div className="promo">
            <Reveal><div><h3>Bean to Cup Machines</h3><p>Freshly ground coffee, brewed per cup.</p><Link to="/bean-to-cup"><small>Learn more →</small></Link></div></Reveal>
            <Reveal i={1}><div><h3>Hand Sanitizer</h3><p>Touch-free sanitizer dispensers.</p><Link to="/hand-sanitizer"><small>Learn more →</small></Link></div></Reveal>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
