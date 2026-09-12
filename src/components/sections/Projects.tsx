import { projects } from "../../data/projects";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div>
        <div className="section-heading">
          <p className="section-eyebrow">Featured Projects</p>

          <h2>Things I've built</h2>

          <p>
            A selection of platforms and engineering work across FinTech,
            EduTech, and Medical Tech.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">0{index + 1}</div>

              <p className="project-category">{project.category}</p>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="technology-list">
                {project.technologies.map((technology) => (
                  <span key={technology} className="technology-chip">
                    {technology}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
