export default function Logo({ variant = 'dark', size = 'md' }) {
  return (
    <div className={`logo logo--${size} logo--${variant}`}>
      <span className="logo__mark">JH Blake</span>
      <span className="logo__rule-row">
        <span className="logo__rule" />
        <span className="logo__sub">Consulting</span>
        <span className="logo__rule" />
      </span>
    </div>
  )
}
