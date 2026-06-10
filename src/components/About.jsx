import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <div className="about-visual">
          <div className="about-image">
            <div className="about-pattern" aria-hidden="true" />
            <div className="about-badge">
              <strong>Since 2026</strong>
              <span>Delivering excellence</span>
            </div>
          </div>
        </div>
        <div className="about-content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Your partner in digital innovation</h2>
          <p>
            Dunkrik Infotech PVT.LTD is a premier IT solutions provider dedicated to
building robust digital infrastructures and ensuring seamless business
continuity. From the core of your network to the devices in your employees'
hands, we provide end-to-end technical expertise. We specialize in transforming
complex IT challenges into scalable, secure, and efficient systems, allowing you
to focus on what you do best—growing your business.
          </p>
          <p>
            Our team of experienced developers, designers, and consultants work
            collaboratively with clients across industries — from startups to
            established enterprises — to build products that are reliable, scalable,
            and user-friendly.
          </p>
          <ul className="about-list">
            <li>Agile development methodology</li>
            <li>Transparent communication at every stage</li>
            <li>Post-launch support and maintenance</li>
            <li>Cost-effective, on-time delivery</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
