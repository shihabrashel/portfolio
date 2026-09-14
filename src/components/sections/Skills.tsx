import { skillCategories } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div>
        <div className="section-heading">
          <p className="section-eyebrow">My Skills</p>

          <h2>Technologies I work with</h2>

          <p>
            My core experience spans .NET backend development, SQL Server,
            modern frontend technologies, and software architecture.
          </p>
        </div>

        <div className="skill-categories">
          {skillCategories.map((category) => (
            <div className="skill-category" key={category.category}>
              <h3>{category.category}</h3>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
