import { Reveal } from './ui'
import { CLIENTS } from '../data'

export default function Clients() {
  const row = [...CLIENTS, ...CLIENTS]
  return (
    <section>
      <div className="container">
        <Reveal className="center">
          <span className="eyebrow">Our distributors</span>
          <h2 className="title">Our distribution network</h2>
          <p className="lead">Our machines reach customers through distributors. A selection of branded panel designs made for them.</p>
        </Reveal>
      </div>
      <div className="clients-wrap">
        <div className="clients-row">
          {row.map((n, i) => (
            <div className="client" key={i}><img src={`/img/clients/${n}.jpg`} alt="Distributor branded machine panel" /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
