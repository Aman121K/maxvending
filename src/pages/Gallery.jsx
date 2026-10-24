import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { PageHero, Reveal } from '../components/ui'
import CtaBand from '../components/CtaBand'
import { PRODUCTS } from '../data'

export default function Gallery() {
  const [sel, setSel] = useState(null)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setSel(null)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])
  return (
    <>
      <PageHero eyebrow="Gallery" title="Our machines in focus" crumbs={['Home', '/', 'Gallery']}>Tap any photo to view it larger.</PageHero>
      <section className="soft">
        <div className="container">
          <div className="gal">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.slug} i={i}>
                <button className="gal-item" onClick={() => setSel(p)}><span className="gp"><img src={p.img} alt={p.name} loading="lazy" /></span><span className="gc">{p.name} · {p.tag}</span></button>
              </Reveal>
            ))}
          </div>
        </div>
        <AnimatePresence>
          {sel && (
            <motion.div className="modal-bg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSel(null)}>
              <motion.div className="lightbox" initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} onClick={(e) => e.stopPropagation()}>
                <button className="x" onClick={() => setSel(null)} aria-label="Close"><X size={18} /></button>
                <img src={sel.img} alt={sel.name} /><p>{sel.name} · {sel.tag}</p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <CtaBand />
    </>
  )
}
