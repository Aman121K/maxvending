import { Link } from 'react-router-dom'

export default function Logo({ height = 56 }) {
  return (
    <Link to="/" className="logo" aria-label="Max Vending – Home">
      <img src="/img/logo.png" alt="Max Vending – Perfect Vending" style={{ height }} />
    </Link>
  )
}
