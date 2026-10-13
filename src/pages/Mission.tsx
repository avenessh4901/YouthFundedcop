
const missions = [
  {
    number: "01",
    title: "Accessible Learning",
    description:
      "Make financial literacy easy to understand by turning complex ideas into engaging, practical lessons anyone can follow.",
  },
  {
    number: "02",
    title: "Responsible Habit",
    description:
      "Build a healthy culture of smart money management and responsible financial decisions from an early age.",
  },
  {
    number: "03",
    title: "Youth Collaboration",
    description:
      "Empower young people to learn, create, and grow together through community-led initiatives.",
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
        padding: "48px clamp(20px, 5vw, 64px) 80px",
        boxSizing: "border-box",
      }}
    >
      {/* PAGE INTRODUCTION */}
      <section className="mission-hero">
        <p className="eyebrow">OUR PURPOSE</p>
        <h1>Our Purpose</h1>
        <p>
          Building a future where young people have the knowledge,
          opportunities, and support to create meaningful impact.
        </p>
      </section>

      {/* OUR VISION — FIRST */}
      <section
        className="mission-content"
        style={{ marginTop: "64px" }}
      >
        <div className="mission-intro">
          <p className="eyebrow">01 — OUR VISION</p>
          <h2>A future shaped by young people.</h2>
          <p>
            We envision a world where every young person has the
            opportunity to learn, grow, and turn their ideas into
            positive change. A future where youth are empowered
            to make informed decisions, access meaningful
            opportunities, and contribute to stronger communities.
          </p>
        </div>

        <div
          className="vision-card"
          style={{
            marginTop: "32px",
            padding: "clamp(24px, 4vw, 48px)",
            boxSizing: "border-box",
          }}
        >
          <p className="eyebrow">OUR VISION</p>
          <h2>
            A world where every young idea has the chance to grow.
          </h2>
          <p>
            We envision a young Indonesia that fully understands the importance of financial literacy — a generation that confidently makes responsible financial choices, achieves true financial independence, and actively contributes to the growth and well-being of society..
          </p>
        </div>
      </section>

      {/* OUR MISSION — SECOND */}
      <section
        className="mission-content"
        style={{ marginTop: "88px" }}
      >
        <div className="mission-intro">
          <p className="eyebrow">02 — OUR MISSION</p>
          <h2>Turning ideas into meaningful action.</h2>
          <p>
            YouthFunded is here to redefine financial education 
            for the younger generations of Indonesia, not just
            counting numbers, but creating relevant, creative, 
            and empowering choices for everyday life.
          </p>
        </div>

        <div
          className="mission-grid"
          style={{
            marginTop: "36px",
            gap: "24px",
          }}
        >
          {missions.map((mission) => (
            <article
              className="mission-card"
              key={mission.number}
              style={{
                minWidth: 0,
                boxSizing: "border-box",
                padding: "28px",
              }}
            >
              <span className="mission-number">
                {mission.number}
              </span>
              <h3>{mission.title}</h3>
              <p>{mission.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section
        style={{
          marginTop: "88px",
          padding: "32px 0",
          borderTop: "1px solid rgba(40, 40, 40, 0.15)",
        }}
      >
        <p className="eyebrow">OUR BELIEF</p>
        <h2>
          Small steps can lead to meaningful change.
        </h2>
        <p>
          Together, we can help young people learn, connect, and
          create a future filled with possibilities.
        </p>
      </section>
    </main>
  );
}
