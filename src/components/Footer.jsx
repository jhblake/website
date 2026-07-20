import Logo from './Logo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Logo size="sm" variant="light" />
        <p className="footer__copyright">© {year} JH Blake Consulting. All rights reserved.</p>
      </div>
    </footer>
  )
}
