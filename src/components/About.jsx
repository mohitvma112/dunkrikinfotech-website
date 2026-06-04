import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-inner">
        <div className="about-visual">
          <div className="about-image">
            <div className="about-pattern" aria-hidden="true" />
            <div className="about-badge">
              <strong>Since 2019</strong>
              <span>Delivering excellence</span>
            </div>
          </div>
        </div>
        <div className="about-content">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Your partner in digital innovation</h2>
          <p>
            Dunkirk Infotech is a technology company dedicated to helping businesses
            harness the power of modern software and cloud infrastructure. We combine
            technical expertise with a deep understanding of business needs to deliver
            solutions that create real impact.
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
