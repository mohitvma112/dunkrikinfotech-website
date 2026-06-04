import './WhyUs.css'

const reasons = [
  {
    number: '01',
    title: 'Expert Team',
    description: 'Skilled developers and consultants with deep expertise across modern tech stacks.',
  },
  {
    number: '02',
    title: 'Client-First Approach',
    description: 'We listen, adapt, and deliver solutions aligned with your goals and timeline.',
  },
  {
    number: '03',
    title: 'Quality Assurance',
    description: 'Rigorous testing and code reviews ensure reliable, production-ready software.',
  },
  {
    number: '04',
    title: 'Long-Term Support',
    description: 'We stay with you after launch with maintenance, updates, and ongoing optimization.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="section why-us">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Choose Us</span>
          <h2 className="section-title">Built on trust, driven by results</h2>
          <p className="section-desc">
            We go beyond code — we build lasting partnerships that help your business thrive.
          </p>
        </div>
        <div className="why-grid">
          {reasons.map((item) => (
            <article key={item.number} className="why-card">
              <span className="why-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
