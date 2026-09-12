function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="section-heading">
          <p className="section-eyebrow">Get In Touch</p>

          <h2>Let's build something great together.</h2>

          <p>
            I'm open to software development opportunities, interesting
            projects, and conversations about building reliable and scalable
            software.
          </p>
        </div>

        <div className="contact-actions">
          <a
            href="/Shihab-Uddin-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Download CV
          </a>

          <a href="mailto:your-email@example.com" className="secondary-button">
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
