import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div>
        <div className="section-heading">
          <p className="section-eyebrow">Experience</p>

          <h2>My professional journey</h2>

          <p>
            Over 10 years of experience building and maintaining business
            applications across FinTech, EduTech, Medical Tech, and other
            software solutions.
          </p>
        </div>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className="experience-item"
            >
              <div className="experience-period">
                <span>{experience.period}</span>
              </div>

              <div className="experience-content">
                <h3>{experience.role}</h3>

                <h4>
                  {experience.companyUrl ? (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="company-link"
                    >
                      {experience.company}
                    </a>
                  ) : (
                    experience.company
                  )}
                </h4>

                <p>{experience.description}</p>

                <div className="technology-list">
                  {experience.technologies.map((technology) => (
                    <span key={technology} className="technology-chip">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {index < experiences.length - 1 && (
                <div className="experience-line" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
