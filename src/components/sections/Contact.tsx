function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <div className="section-heading">
          <p className="section-eyebrow">Get In Touch</p>

          <h2>Let's work together.</h2>

          <p>
            I'm open to software engineering opportunities where I can
            contribute my experience in .NET, SQL Server, Angular, React, APIs,
            and full-stack application development.
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

          <a href="mailto:surashel891@gmail.com" className="secondary-button">
            Email Me
          </a>

          <a
            href="https://github.com/shihabrashel"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shihab-uddin-a70b55350/"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            LinkedIn
          </a>

          <a
            href="https://wa.me/8801750854647"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
