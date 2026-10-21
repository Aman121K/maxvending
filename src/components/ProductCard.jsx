import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeUp } from './ui'

export default function ProductCard({ p, i = 0 }) {
  const x = useMotionValue(0), y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 })
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - r.left) / r.width - 0.5)
    y.set((e.clientY - r.top) / r.height - 0.5)
  }
  const leave = () => { x.set(0); y.set(0) }
  return (
    <motion.div variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }}>
      <Link to={`/products/${p.slug}`}>
        <motion.div className="card" style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }} onMouseMove={move} onMouseLeave={leave} whileHover={{ y: -8 }}>
          <div className="pic"><img src={p.img} alt={`${p.name} ${p.tag}`} loading="lazy" /></div>
          <div className="body">
            <span className="tag">{p.tag}</span>
            <h3>{p.name}</h3>
            <span className="more">View Details <ArrowRight size={16} /></span>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  )
}
