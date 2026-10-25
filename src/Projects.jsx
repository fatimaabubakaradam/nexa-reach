const projects = [
  {
    number: "01",
    category: "WEB APPLICATION",
    title: "Finora Finance",
    description: "A cleaner way to manage your money.",
    style: "project-purple",
    symbol: "F.",
  },
  {
    number: "02",
    category: "DIGITAL MARKETPLACE",
    title: "Harvest Hub",
    description: "Connecting producers with new opportunities.",
    style: "project-green",
    symbol: "H.",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="section-heading">
        <div>
          <p className="eyebrow">SELECTED WORK</p>
          <h2>
            Small details.
            <br />
            <span>Big impact.</span>
          </h2>
        </div>

        <p className="section-description">
          A few concept projects showing how thoughtful
          design and technology can work together.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article
            className={`project-card ${project.style}`}
            key={project.number}
          >
            <div className="project-art">
              <span className="project-number">{project.number} / 02</span>
              <div className="project-symbol">{project.symbol}</div>
              <div className="project-art-circle"></div>
              <div className="project-art-line"></div>
            </div>

            <div className="project-info">
              <div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>

              <span className="project-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>

      <div className="project-note">
        <span>✳</span>
        These are concept projects created for demonstration.
      </div>
    </section>
  );
}

export default Projects;