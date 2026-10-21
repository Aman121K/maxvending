import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Coffee, Sparkles } from 'lucide-react'

const BEANS = Array.from({ length: 14 }, (_, i) => ({
  left: `${(i * 37) % 100}%`, size: 0.7 + ((i * 13) % 7) / 10, dur: 9 + (i % 5) * 2, delay: -(i * 1.3),
}))

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const rot = useTransform(scrollYProgress, [0, 1], [0, -6])
  return (
    <section className="hero" ref={ref}>
      <div className="beans">
        {BEANS.map((b, i) => (
          <motion.div key={i} className="bean" style={{ left: b.left, scale: b.size, top: -30 }}
            animate={{ y: ['0vh', '110vh'], rotate: [0, 360], opacity: [0, 0.5, 0.5, 0] }}
            transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: 'linear' }} />
        ))}
      </div>
      <div className="container hero-grid">
        <div>
          <motion.div className="pill" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}><i /> Delhi's trusted vending machine maker</motion.div>
          <h1>
            {['Fresh', 'tea', '&', 'coffee,'].map((w, i) => (
              <motion.span key={i} style={{ display: 'inline-block', marginRight: '.25em' }} initial={{ opacity: 0, y: 50, rotateX: -60 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ delay: 0.15 + i * 0.1, duration: 0.7 }}>{w}</motion.span>
            ))}
            <br />
            <motion.em style={{ display: 'inline-block' }} initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>at the touch of a button.</motion.em>
          </h1>
          <motion.p className="sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            Max Vending designs and manufactures premium tea & coffee vending machines — built with three decades of experience and delivered right to your door.
          </motion.p>
          <motion.div className="hero-cta" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
            <Link to="/products" className="btn btn-red">Explore Machines <ArrowRight size={18} /></Link>
            <Link to="/enquiry" className="btn btn-ghost">Get a Quote</Link>
          </motion.div>
        </div>

        <motion.div className="hero-stage" style={{ y }}>
          <motion.div className="ring" style={{ width: 520, height: 520 }} animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="ring" style={{ width: 400, height: 400, borderColor: 'rgba(216,35,42,.4)' }} animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="stage-card" style={{ rotate: rot }} initial={{ opacity: 0, scale: 0.8, rotate: -8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.9, type: 'spring' }}>
            <motion.img src="/img/gallery/2.jpg" alt="Max Robo vending machine" animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} />
          </motion.div>
          <motion.div className="float-chip" style={{ top: 40, left: -50 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
            <Coffee size={22} color="#ffb35c" /><div><b>Hot & Cold</b>Tea · Coffee · More</div>
          </motion.div>
          <motion.div className="float-chip" style={{ bottom: 50, right: -40 }} animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
            <Sparkles size={22} color="#ffb35c" /><div><b>30+ Years</b>Of experience</div>
          </motion.div>
        </motion.div>
      </div>
      <div className="scroll-hint">Scroll<motion.span animate={{ y: [0, 8, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>↓</motion.span></div>
    </section>
  )
}

export function Marquee() {
  const items = ['Premix Machines', 'Bean to Cup', 'On-site Delivery', 'Expert Engineers', 'Made in Delhi', 'Hand Sanitizer']
  const row = items.map((t) => <span key={t}>{t} <Coffee size={20} /></span>)
  return (
    <div className="marquee"><div className="marquee-track">{row}{row}{row}{row}</div></div>
  )
}

