import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <div className="contact-info">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Let's build something great</h2>
          <p className="section-desc">
            Ready to start your next project? Reach out and our team will get back to you within 24 hours.
          </p>
          <ul className="contact-details">
            <li>
              <span className="detail-icon">🌐</span>
              <div>
                <strong>Website</strong>
                <a href="https://dunkrikinfotech.com">dunkrikinfotech.com</a>
              </div>
            </li>
            <li>
              <span className="detail-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:dunkrikinfotech@gmail.com">dunkrikinfotech@gmail.com</a>
              </div>
            </li>
            <li>
              <span className="detail-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <a href="tel:+918082504803">+91 80825 04803</a>
              </div>
            </li>
            <li>
              <span className="detail-icon">📍</span>
              <div>
                <strong>Address</strong>
                <span>
                  Satellite Colony, Bathindi, Jammu,<br />
                  Jammu &amp; Kashmir, India — 181152
                </span>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? (
            <div className="form-success">
              <span className="success-icon">✓</span>
              <h3>Thank you!</h3>
              <p>Your message has been received. We'll be in touch soon.</p>
            </div>
          ) : (
            <>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="john@company.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" placeholder="Your Company" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your project..."
                />
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                Send Message
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  )
}
