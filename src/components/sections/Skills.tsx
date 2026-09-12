import { skills } from "../../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div>
        <div className="section-heading">
          <p className="section-eyebrow">My Skills</p>

          <h2>Technologies I work with</h2>

          <p>
            My core experience is focused on .NET backend development, SQL
            Server, and modern frontend technologies, with a growing focus on
            architecture and AI-assisted development.
          </p>
        </div>

        <div className="skills-list">
          {skills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
