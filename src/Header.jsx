function Header() {
  return (
    <header className="header">
      <a href="#home" className="logo">
        nexa<span>.</span>
      </a>

      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
      </nav>

      <a href="mailto:hello@nexa.example" className="header-button">
        Let's Talk <span>↗</span>
      </a>
    </header>
  );
}

export default Header;