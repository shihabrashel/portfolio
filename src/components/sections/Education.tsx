function Education() {
  return (
    <section id="education" className="education">
      <div>
        <div className="section-heading">
          <p className="section-eyebrow education-eyebrow">
            <svg
              className="education-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="m2.5 9 9.5-5 9.5 5-9.5 5-9.5-5Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="M6.5 11.2v4.1c3.4 2.5 7.6 2.5 11 0v-4.1M21.5 9v6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Education
          </p>
          <h2>Academic foundation</h2>
        </div>

        <article className="education-card">
          <div className="education-period">2013 — 2017</div>
          <div className="education-content">
            <h3>Bachelor of Science in Computer Science and Engineering</h3>
            <h4>American International University-Bangladesh</h4>
            <p>CGPA: 3.59 / 4.00</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
