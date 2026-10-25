function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-cta">
        <p className="eyebrow">HAVE AN IDEA?</p>
        <h2>
          Let's build something
          <br />
          <span>remarkable.</span>
        </h2>

        <a href="mailto:hello@nexa.example" className="button-primary">
          Start a conversation <span>↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        <a href="#home" className="logo footer-logo">
          nexa<span>.</span>
        </a>

        <p>Creative minds. Meaningful technology.</p>

        <p>
          © {new Date().getFullYear()} Nexa Digital.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;