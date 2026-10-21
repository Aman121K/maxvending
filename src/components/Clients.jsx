import { Reveal } from './ui'
import { CLIENTS } from '../data'

export default function Clients() {
  const half = Math.ceil(CLIENTS.length / 2)
  const rows = [CLIENTS.slice(0, half), CLIENTS.slice(half)]
  return (
    <section>
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Our clients</span>
          <h2 className="title">Trusted by leading organisations</h2>
        </Reveal>
      </div>
      <div className="clients-wrap">
        {rows.map((r, k) => (
          <div key={k} className={`clients-row ${k ? 'rev' : ''}`}>
            {[...r, ...r].map((n, i) => <div className="client" key={i}><img src={`/img/clients/${n}.jpg`} alt="Client logo" loading="lazy" /></div>)}
          </div>
        ))}
      </div>
    </section>
  )
}

