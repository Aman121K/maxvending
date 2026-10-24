import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Reveal } from './ui'

export default function ProductCard({ p, i = 0, base = '/products' }) {
  return (
    <Reveal i={i}>
      <Link to={`${base}/${p.slug}`} className="card">
        <div className="pic"><img src={p.img} alt={`${p.name} ${p.tag}`} loading="lazy" /></div>
        <div className="body">
          <span className="tag">{p.tag}</span>
          <h3>{p.name}</h3>
          <span className="more">View details <ArrowRight size={15} /></span>
        </div>
      </Link>
    </Reveal>
  )
}
