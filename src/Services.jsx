const services = [
  {
    number: "01",
    icon: "✳",
    title: "Web Development",
    description:
      "Fast, responsive and beautiful websites that turn visitors into customers.",
    tag: "WEBSITES & WEB APPS",
  },
  {
    number: "02",
    icon: "⌘",
    title: "Software Solutions",
    description:
      "Smart digital tools that simplify your work and solve real business problems.",
    tag: "CUSTOM SOFTWARE",
  },
  {
    number: "03",
    icon: "◈",
    title: "UI/UX Design",
    description:
      "Thoughtful, user-friendly designs that make every digital interaction feel easy.",
    tag: "DESIGN & EXPERIENCE",
  },
];

function Services() {
  return (
    <section className="services section" id="services">
      <div className="section-heading">
        <div>
          <p className="eyebrow">WHAT WE DO</p>
          <h2>
            Good ideas deserve
            <br />
            <span>great execution.</span>
          </h2>
        </div>

        <p className="section-description">
          From the first sketch to the final product,
          we help you bring your vision to life.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.number}>
            <div className="service-card-top">
              <span className="service-icon">{service.icon}</span>
              <span className="service-number">{service.number}</span>
            </div>

            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <div className="service-card-bottom">
              <span>{service.tag}</span>
              <a href="mailto:hello@nexa.example" aria-label={`Ask about ${service.title}`}>
                ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;