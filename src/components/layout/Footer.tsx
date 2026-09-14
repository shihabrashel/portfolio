function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <a href="#hero" className="footer-logo">
          Shihab Uddin<span>.</span>
        </a>

        <div className="footer-navigation">
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#architecture">Architecture</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <a
              href="https://github.com/shihabrashel"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/shihab-uddin-a70b55350/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
