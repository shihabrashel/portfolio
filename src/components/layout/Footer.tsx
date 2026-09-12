function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div>
          <a href="#hero" className="footer-logo">
            Shihab<span>.</span>
          </a>

          <p>
            Senior .NET & Full-Stack Developer building reliable and scalable
            software.
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#architecture">Architecture</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Shihab Uddin. All rights reserved.</p>

        <p>Built with React & TypeScript</p>
      </div>
    </footer>
  );
}

export default Footer;
