import { experiences } from "../../data/experience";

function Experience() {
  return (
    <section id="experience" className="experience">
      <div>
        <div className="section-heading">
          <p className="section-eyebrow">Experience</p>

          <h2>My professional journey</h2>

          <p>
            Building and maintaining business applications across multiple
            domains, with a focus on backend engineering, databases, APIs, and
            modern frontend development.
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

                <h4>{experience.company}</h4>

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
