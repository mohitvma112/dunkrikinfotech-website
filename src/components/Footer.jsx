import Logo from './Logo'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo className="footer-logo" />
          <p>Empowering businesses with innovative technology solutions.</p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Software Development</a></li>
              <li><a href="#services">Cloud Solutions</a></li>
              <li><a href="#services">UI/UX Design</a></li>
              <li><a href="#services">IT Consulting</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {year} Dunkirk Infotech. All rights reserved.</p>
          <a href="https://dunkrikinfotech.com">dunkrikinfotech.com</a>
        </div>
      </div>
    </footer>
  )
}
