function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-label">
          <span className="status-dot"></span>
          YOUR DIGITAL GROWTH PARTNER
        </div>

        <h1>
          We turn big ideas
          <br />
          into <span>digital reality.</span>
        </h1>

        <p className="hero-description">
          We design beautiful websites, build powerful software,
          and create digital experiences that help businesses grow.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="button-primary">
            Explore our work <span>↗</span>
          </a>

          <a href="#services" className="button-secondary">
            What we do
          </a>
        </div>

        <div className="hero-trust">
          <div className="trust-symbol">✳</div>
          <p>
            <strong>Ideas meet innovation.</strong>
            <br />
            <span>We build for what comes next.</span>
          </p>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-glow"></div>

        <div className="visual-card card-back">
          <span className="code-tag">01 / DESIGN</span>
          <div className="design-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="visual-card card-front">
          <div className="visual-top">
            <span>✳ nexalabs</span>
            <span className="visual-menu">•••</span>
          </div>

          <div className="visual-orb">
            <div className="orb-inner">N</div>
          </div>

          <h3>Built for the future.</h3>
          <p>Creative thinking. Smart technology.</p>

          <div className="visual-progress">
            <span></span>
          </div>

          <div className="visual-bottom">
            <span>CREATIVITY</span>
            <span>100%</span>
          </div>
        </div>

        <div className="floating-badge badge-top">
          <span>✦</span> Creative ideas
        </div>

        <div className="floating-badge badge-bottom">
          <span>↗</span> Digital solutions
        </div>
      </div>

      <div className="hero-index">
        <span>01</span> — BUILDING WHAT'S NEXT
      </div>
    </section>
  );
}

export default Hero;