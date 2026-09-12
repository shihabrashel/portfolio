import { architectureItems } from "../../data/architecture";

function Architecture() {
  return (
    <section id="architecture" className="architecture">
      <div>
        <div className="section-heading">
          <p className="section-eyebrow">Architecture & Engineering</p>

          <h2>How I approach software development</h2>

          <p>
            I focus on building software that is maintainable, scalable, and
            easy for teams to understand and evolve.
          </p>
        </div>

        <div className="architecture-list">
          {architectureItems.map((item, index) => (
            <article className="architecture-item" key={item.title}>
              <div className="architecture-number">0{index + 1}</div>

              <div className="architecture-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="concept-list">
                  {item.concepts.map((concept) => (
                    <span key={concept}>{concept}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Architecture;
