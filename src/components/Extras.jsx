import { motion } from 'framer-motion'
import { MessageSquareText, PackageCheck, Truck, Wrench, Building2, Factory, GraduationCap, Hospital, Store, Briefcase } from 'lucide-react'
import { Reveal } from './ui'

const STEPS = [
  { i: <MessageSquareText />, t: 'Share your need', d: 'Tell us your space, footfall and the drinks you want to serve.' },
  { i: <PackageCheck />, t: 'Pick a machine', d: 'We suggest the right model and lane count for you.' },
  { i: <Truck />, t: 'On-site delivery', d: 'Your machine is delivered and installed at your location.' },
  { i: <Wrench />, t: 'Ongoing support', d: 'Our qualified engineers keep it running smoothly.' },
]

export function Process() {
  return (
    <section className="process">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">How it works</span>
          <h2 className="title">From enquiry to first cup in 4 steps</h2>
        </Reveal>
        <div className="steps">
          {STEPS.map((s, k) => (
            <Reveal key={s.t} i={k} className="step">
              <motion.div className="step-ic" whileHover={{ rotate: -8, scale: 1.08 }}>{s.i}</motion.div>
              <span className="step-n">0{k + 1}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const PLACES = [
  [<Briefcase />, 'Offices'], [<Factory />, 'Factories'], [<Hospital />, 'Hospitals'],
  [<GraduationCap />, 'Schools & colleges'], [<Store />, 'Showrooms & shops'], [<Building2 />, 'Banks & institutions'],
]

export function Industries() {
  return (
    <section className="industries">
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Where Max works</span>
          <h2 className="title">Perfect for every workplace</h2>
        </Reveal>
        <div className="chips">
          {PLACES.map(([ic, t], k) => (
            <Reveal key={t} i={k} className="place">
              <span>{ic}</span>{t}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
