import { Reveal } from './ui'
import { CLIENTS } from '../data'

export default function Clients() {
  const row = [...CLIENTS, ...CLIENTS]
  return (
    <section>
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Our clients</span>
          <h2 className="title">Branded panels for our clients</h2>
          <p className="lead">A selection of machine panel designs we have produced for our clients.</p>
        </Reveal>
      </div>
      <div className="clients-wrap">
        <div className="clients-row">
          {row.map((n, i) => (
            <div className="client" key={i}><img src={`/img/clients/${n}.jpg`} alt="Client branded machine panel" loading="lazy" /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
