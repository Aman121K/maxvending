import { Link } from 'react-router-dom'
import { PageHero } from '../components/ui'

export default function NotFound() {
  return (
    <>
      <PageHero eyebrow="404" title="Page not found">Looks like this cup is empty.</PageHero>
      <section className="center"><Link to="/" className="btn btn-red">Back to home</Link></section>
    </>
  )
}
