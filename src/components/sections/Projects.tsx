import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div>
        <div className="section-heading">
          <p className="section-eyebrow">Featured Projects</p>

          <h2>Selected work from my experience</h2>

          <p>
            A selection of enterprise and production applications I've worked on
            across FinTech, EduTech, Medical Tech, LegalTech, and News & Media.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={`project-card ${
                index === 0 ? "project-card-featured" : ""
              }`}
            >
              <div className="project-card-top">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="project-category">{project.category}</span>
              </div>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology} className="technology-chip">
                    {technology}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Visit Live Site ↗
                  </a>
                ) : (
                  <span className="project-internal">Internal Project</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
