import { aiTools } from "../../data/aiTools";

function AIDevelopment() {
  return (
    <section id="ai-development" className="ai-development">
      <div>
        <div className="section-heading">
          <p className="section-eyebrow">AI-Assisted Development</p>

          <h2>AI as part of my development workflow</h2>

          <p>
            I use AI tools to support software development tasks such as
            debugging, code analysis, refactoring, technical research, and
            learning, while keeping engineering decisions, code quality, and
            maintainability at the center.
          </p>
        </div>

        <div className="ai-grid">
          {aiTools.map((tool) => (
            <article className="ai-card" key={tool.name}>
              <div className="ai-card-header">
                <span className="ai-icon">{tool.name.charAt(0)}</span>

                <h3>{tool.name}</h3>
              </div>

              <p>{tool.description}</p>

              <ul>
                {tool.useCases.map((useCase) => (
                  <li key={useCase}>{useCase}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AIDevelopment;
