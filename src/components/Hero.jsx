import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-badge">Trusted IT Partner</span>
          <h1>
            Technology solutions that{' '}
            <span className="gradient-text">drive your business forward</span>
          </h1>
          <p>
            Dunkirk Infotech delivers custom software, cloud infrastructure, and
            digital transformation services to help businesses scale with confidence.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Start a Project
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <strong>50+</strong>
              <span>Projects Delivered</span>
            </div>
            <div className="stat">
              <strong>30+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="stat">
              <strong>5+</strong>
              <span>Years Experience</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card hero-card-main">
            <div className="card-header">
              <span className="dot red" />
              <span className="dot yellow" />
              <span className="dot green" />
            </div>
            <pre className="code-block">{`const solution = await dunkirk.build({
  type: 'enterprise',
  stack: ['React', 'Node', 'Cloud'],
  scalable: true
});`}</pre>
          </div>
          <div className="hero-card hero-card-float">
            <span className="float-icon">✓</span>
            <div>
              <strong>Deployment Ready</strong>
              <span>CI/CD pipeline active</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
