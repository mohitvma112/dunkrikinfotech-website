import './Logo.css'

export default function Logo({ className = '' }) {
  return (
    <a href="#" className={`logo ${className}`.trim()}>
      <img
        src="/logo.png"
        alt="Dunkrik Infotech Pvt. Ltd. — Innovate • Integrate • Elevate"
        className="logo-img"
      />
    </a>
  )
}
