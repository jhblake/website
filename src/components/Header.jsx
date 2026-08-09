import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Partners', href: '#partners' },
  { label: 'Articles', href: '#articles' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#home" className="header__brand" onClick={handleNavClick}>
          <Logo size="sm" />
        </a>

        <nav className={`nav ${menuOpen ? 'nav--open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav__link" onClick={handleNavClick}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'menu-toggle--open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
