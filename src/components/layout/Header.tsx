import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        <a href="#hero" className="logo" onClick={closeMenu}>
          Shihab<span>.</span>
        </a>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#architecture" onClick={closeMenu}>
            Architecture
          </a>

          <a href="#ai-development" onClick={closeMenu}>
            AI Development
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <a
            href="/Shihab-Uddin-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="nav-resume"
          >
            Download CV
          </a>

          <a href="#contact" className="nav-cta" onClick={closeMenu}>
            Let's Talk
          </a>

          <button
            type="button"
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
