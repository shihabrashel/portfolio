import profilePhoto from "../../assets/Shihab Uddin Original.jpg";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-eyebrow">Senior .NET & Full-Stack Developer</p>

          <h1>
            Building scalable software
            <br />
            that solves real problems.
          </h1>

          <p className="hero-description">
            I'm Shihab Uddin, a software engineer with around 10 years of
            experience building applications across FinTech, EduTech, and
            Medical Tech.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View My Projects
            </a>

            <a href="#contact" className="secondary-button">
              Let's Connect
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-photo-wrapper">
            <img src={profilePhoto} alt="Shihab Uddin" className="hero-photo" />
          </div>

          <div className="hero-highlight">
            <div className="hero-card">
              <span>10+</span>
              <p>Years of Experience</p>
            </div>

            <div className="hero-card">
              <span>.NET</span>
              <p>Backend Expertise</p>
            </div>

            <div className="hero-card">
              <span>React</span>
              <p>Modern Frontend</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
