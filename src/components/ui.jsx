import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring, useInView, animate } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
}

export const Reveal = ({ children, i = 0, className, ...p }) => (
  <motion.div className={className} variants={fadeUp} custom={i} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} {...p}>
    {children}
  </motion.div>
)

export function Progress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  return <motion.div className="progress" style={{ scaleX }} />
}

export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export function Counter({ n, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, n, { duration: 2, ease: 'easeOut', onUpdate: (x) => setV(Math.round(x)) })
    return () => c.stop()
  }, [inView, n])
  return <b ref={ref}>{v}{suffix}</b>
}

export const SITE_TITLE = 'Max Vending – Tea & Coffee Vending Machines'

export function PageHero({ eyebrow, title, children, crumbs = [] }) {
  useEffect(() => {
    document.title = `${title} | Max Vending`
    return () => { document.title = SITE_TITLE }
  }, [title])
  return (
    <header className="page-hero">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="crumbs">{crumbs.map((c, i) => <span key={i}>{c}</span>)}</div>
          <span className="eyebrow" style={{ color: '#ffb35c' }}>{eyebrow}</span>
          <h1>{title}</h1>
          {children && <p>{children}</p>}
        </motion.div>
      </div>
    </header>
  )
}
