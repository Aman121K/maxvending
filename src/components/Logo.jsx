import { Link } from 'react-router-dom'

// Crisp vector Max Vending logo: red badge with MAX wordmark + readable tagline
export function MaxMark({ size = 48 }) {
  return (
    <svg width={size * 1.5} height={size} viewBox="0 0 150 100" role="img" aria-label="Max" className="max-mark">
      <defs>
        <linearGradient id="mx-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ee3a40" />
          <stop offset="1" stopColor="#b3141b" />
        </linearGradient>
      </defs>
      <rect width="150" height="100" rx="22" fill="url(#mx-g)" />
      <g fill="none" stroke="#fff" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 70 V32 Q18 22 25 30 L38 50 L51 30 Q58 22 58 32 V70" />
        <path d="M66 72 L84 28 L102 72" />
        <path d="M110 30 L134 72" />
        <path d="M134 30 C124 46 112 66 116 84" strokeWidth="8" />
      </g>
      <path d="M78 58 H90 L84 47 Z" fill="#fff" />
    </svg>
  )
}

export default function Logo({ size = 46 }) {
  return (
    <Link to="/" className="logo" aria-label="Max Vending – Home">
      <MaxMark size={size} />
      <span className="logo-txt"><b>PERFECT</b><b>VENDING</b></span>
    </Link>
  )
}
