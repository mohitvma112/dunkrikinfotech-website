import './Services.css'

const services = [
  {
    icon: '💻',
    title: 'Custom Software Development',
    description:
      'Tailored web and mobile applications built with modern frameworks to solve your unique business challenges.',
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description:
      'AWS, Azure, and GCP migration, deployment, and management to keep your infrastructure secure and scalable.',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      'User-centered design that creates intuitive, beautiful interfaces your customers will love to use.',
  },
  {
    icon: '🔒',
    title: 'Cybersecurity',
    description:
      'Security audits, compliance support, and proactive monitoring to protect your data and reputation.',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    description:
      'Turn raw data into actionable insights with dashboards, reporting tools, and business intelligence.',
  },
  {
    icon: '🛠️',
    title: 'IT Consulting',
    description:
      'Strategic technology guidance to align your IT roadmap with business goals and maximize ROI.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">End-to-end IT solutions</h2>
          <p className="section-desc">
            From concept to deployment, we provide comprehensive technology services
            that help your business stay ahead.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
