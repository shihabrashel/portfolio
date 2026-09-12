import { aiTools } from "../../data/aiTools";

function AIDevelopment() {
  return (
    <section id="ai-development" className="ai-development">
      <div>
        <div className="section-heading">
          <p className="section-eyebrow">AI-Assisted Development</p>

          <h2>Using AI to build software more effectively</h2>

          <p>
            I use AI tools as part of my development workflow to accelerate
            implementation, improve code quality, learn new technologies, and
            explore better engineering solutions.
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
