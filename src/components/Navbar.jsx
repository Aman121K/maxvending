import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronDown } from 'lucide-react'
import { NAV, PRODUCTS, BEAN_MACHINES, PHONE } from '../data'
import Logo from './Logo'

const SUB = [
  ...PRODUCTS.map((p) => [`${p.name} · ${p.tag}`, `/products/${p.slug}`]),
  ['Bean to Cup Machines', '/bean-to-cup'],
  ...BEAN_MACHINES.map((p) => [`${p.name} · ${p.tag}`, `/bean-to-cup/${p.slug}`]),
  ['Hand Sanitizer', '/hand-sanitizer'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dd, setDd] = useState(false)
  const { pathname } = useLocation()
  const home = pathname === '/'

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  useEffect(() => { setOpen(false); setDd(false) }, [pathname])

  return (
    <>
      <motion.nav className={`nav ${scrolled || !home ? 'scrolled' : ''}`} initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <div className="container nav-in">
          <Logo />
          <div className="links">
            {NAV.map(([l, h]) =>
              l === 'Products' ? (
                <div key={h} className="dd" onMouseEnter={() => setDd(true)} onMouseLeave={() => setDd(false)}>
                  <NavLink to={h} className={({ isActive }) => (isActive ? 'active' : '')}>Products <ChevronDown size={14} style={{ verticalAlign: -2 }} /></NavLink>
                  <AnimatePresence>
                    {dd && (
                      <motion.div className="dd-menu" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>
                        {SUB.map(([t, to]) => <Link key={to} to={to}>{t}</Link>)}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <NavLink key={h} to={h} end={h === '/'} className={({ isActive }) => (isActive ? 'active' : '')}>{l}</NavLink>
              ),
            )}
            <a href={`tel:${PHONE}`} className="btn btn-red" style={{ padding: '9px 18px', marginLeft: 8 }}><Phone size={16} /> Call Now</a>
          </div>
          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu"><Menu size={28} /></button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button className="mobile-close" onClick={() => setOpen(false)} aria-label="Close menu"><X size={30} /></button>
            <div className="mm-links">
              {NAV.map(([l, h], i) => (
                <motion.div key={h} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.06 * i }}>
                  <Link to={h}>{l}</Link>
                </motion.div>
              ))}
            </div>
            <div className="mm-foot">
              <a href={`tel:${PHONE}`} className="btn btn-red"><Phone size={16} /> Call Now</a>
              <a href={`https://wa.me/${PHONE.replace('+', '')}`} className="btn btn-ghost" target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
