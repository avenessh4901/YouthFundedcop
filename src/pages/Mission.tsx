
const missions = [
  {
    number: "01",
    title: "Empower Youth",
    description:
      "Empowering young people to turn their ideas into meaningful initiatives and real impact.",
  },
  {
    number: "02",
    title: "Expand Opportunities",
    description:
      "Connecting youth with opportunities, resources, and networks to support their growth.",
  },
  {
    number: "03",
    title: "Create Sustainable Impact",
    description:
      "Encouraging youth-led projects that contribute to positive and lasting change in communities.",
  },
];

export default function Mission() {
  return (
  <main
    className="mission-page"
    style={{
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "48px 40px 80px",
      boxSizing: "border-box",
    }}
  >
      <section className="mission-hero">
        <p className="eyebrow">OUR PURPOSE</p>
        <h1>Our Mission</h1>
        <p>
          Turning youth potential into meaningful action,
          opportunities, and lasting impact.
        </p>
      </section>

      <section className="mission-content">
        <div className="mission-intro">
          <p className="eyebrow">WHY WE EXIST</p>
          <h2>A future shaped by young people.</h2>
          <p>
            YouthFunded believes that young people deserve the
            opportunity, support, and resources to transform their
            ideas into initiatives that make a difference.
          </p>
        </div>

        <div className="mission-grid">
          {missions.map((mission) => (
            <article className="mission-card" key={mission.number}>
              <span className="mission-number">{mission.number}</span>
              <h3>{mission.title}</h3>
              <p>{mission.description}</p>
            </article>
          ))}
        </div>

        <div className="vision-card">
          <p className="eyebrow">OUR VISION</p>
          <h2>A world where every young idea has the chance to grow.</h2>
          <p>
            We envision a future where young people can access the
            support they need to create positive change.
          </p>
        </div>
      </section>
    </main>
  );
}
