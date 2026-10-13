const missions = [
  {
    number: "01",
    title: "Accessible Learning",
    description:
      "Make financial literacy easy to understand by turning complex ideas into engaging, practical lessons that every young person can access.",
    color: "#C6D95B",
    icon: "📚",
  },
  {
    number: "02",
    title: "Responsible Habits",
    description:
      "Build a healthy culture of smart money management and responsible financial decision-making from an early age.",
    color: "#B8E3F5",
    icon: "🌱",
  },
  {
    number: "03",
    title: "Youth Collaboration",
    description:
      "Empower young people to learn, create, and grow together through meaningful, community-led initiatives.",
    color: "#F4C7D9",
    icon: "🤝",
  },
];

export default function Mission() {
  return (
    <main
      className="mission-page"
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        padding: "clamp(32px, 6vw, 80px) clamp(20px, 6vw, 88px)",
        boxSizing: "border-box",
        color: "#26364a",
        overflow: "hidden",
      }}
    >
      {/* =========================================
          HERO — OUR PURPOSE
      ========================================= */}
      <section
        className="mission-hero"
        style={{
          position: "relative",
          padding: "clamp(32px, 6vw, 76px)",
          background: "#26364a",
          borderRadius: "32px",
          color: "#fffaf0",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            background: "#C6D95B",
            opacity: 0.14,
            right: "-80px",
            top: "-100px",
            pointerEvents: "none",
          }}
        />

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            border: "1px solid rgba(255,250,240,0.2)",
            right: "65px",
            bottom: "-80px",
            pointerEvents: "none",
          }}
        />

        <p
          className="eyebrow"
          style={{
            color: "#C6D95B",
            fontSize: "clamp(13px, 1.3vw, 16px)",
            fontWeight: 800,
            letterSpacing: "3px",
            marginBottom: "24px",
            position: "relative",
          }}
        >
          OUR PURPOSE ✳
        </p>

        <h1
          style={{
            fontFamily: "Fredoka, sans-serif",
            fontSize: "clamp(44px, 7vw, 88px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            maxWidth: "900px",
            margin: "0 0 28px",
            position: "relative",
          }}
        >
          Financial literacy
          <br />
          <span style={{ color: "#C6D95B" }}>
            changes everything.
          </span>
        </h1>

        <p
          style={{
            maxWidth: "720px",
            fontSize: "clamp(16px, 1.5vw, 20px)",
            lineHeight: 1.9,
            color: "rgba(255,250,240,0.82)",
            margin: 0,
            position: "relative",
          }}
        >
          We believe every young person deserves the knowledge,
          confidence, and opportunities to build a better financial
          future. Through accessible education and youth-led
          initiatives, we turn financial awareness into meaningful
          action.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "36px",
            position: "relative",
          }}
        >
          <span
            style={{
              background: "#C6D95B",
              color: "#26364a",
              padding: "12px 18px",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 800,
            }}
          >
            SDG 4 · QUALITY EDUCATION
          </span>

          <span
            style={{
              background: "#B8E3F5",
              color: "#26364a",
              padding: "12px 18px",
              borderRadius: "100px",
              fontSize: "13px",
              fontWeight: 800,
            }}
          >
            SDG 8 · DECENT WORK
          </span>
        </div>
      </section>

      {/* =========================================
          SDG ALIGNMENT
      ========================================= */}
      <section
        style={{
          marginTop: "clamp(64px, 9vw, 112px)",
        }}
      >
        <p
          className="eyebrow"
          style={{
            color: "#64783A",
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "3px",
            marginBottom: "16px",
          }}
        >
          WHAT WE STAND FOR
        </p>

        <h2
          style={{
            fontFamily: "Fredoka, sans-serif",
            fontSize: "clamp(36px, 5.5vw, 64px)",
            lineHeight: 1.1,
            letterSpacing: "-1px",
            maxWidth: "800px",
            margin: "0 0 40px",
          }}
        >
          Two global goals.
          <br />
          <span style={{ color: "#849A35" }}>
            One shared future.
          </span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "24px",
          }}
        >
          {/* SDG 4 */}
          <article
            style={{
              padding: "clamp(24px, 4vw, 40px)",
              background: "#B8E3F5",
              borderRadius: "24px",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                fontSize: "42px",
                display: "block",
                marginBottom: "24px",
              }}
            >
              📚
            </span>

            <p
              style={{
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              UNITED NATIONS · SDG 4
            </p>

            <h3
              style={{
                fontFamily: "Fredoka, sans-serif",
                fontSize: "clamp(28px, 3vw, 38px)",
                lineHeight: 1.2,
                margin: "0 0 18px",
              }}
            >
              Quality Education
            </h3>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              We make financial knowledge accessible, inclusive,
              and practical, helping young people develop the
              skills they need to navigate everyday financial
              decisions and lifelong learning.
            </p>
          </article>

          {/* SDG 8 */}
          <article
            style={{
              padding: "clamp(24px, 4vw, 40px)",
              background: "#C6D95B",
              borderRadius: "24px",
              boxSizing: "border-box",
            }}
          >
            <span
              style={{
                fontSize: "42px",
                display: "block",
                marginBottom: "24px",
              }}
            >
              💼
            </span>

            <p
              style={{
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "2px",
                marginBottom: "12px",
              }}
            >
              UNITED NATIONS · SDG 8
            </p>

            <h3
              style={{
                fontFamily: "Fredoka, sans-serif",
                fontSize: "clamp(28px, 3vw, 38px)",
                lineHeight: 1.2,
                margin: "0 0 18px",
              }}
            >
              Decent Work & Growth
            </h3>

            <p
              style={{
                fontSize: "16px",
                lineHeight: 1.9,
                margin: 0,
              }}
            >
              By building healthy money habits and financial
              confidence, we help young people prepare for
              opportunities, develop their potential, and
              contribute to Indonesia's economic growth.
            </p>
          </article>
        </div>
      </section>

      {/* =========================================
          OUR VISION
      ========================================= */}
      <section
        className="mission-content"
        style={{
          marginTop: "clamp(80px, 12vw, 144px)",
        }}
      >
        <div className="mission-intro">
          <p
            className="eyebrow"
            style={{
              color: "#849A35",
              fontSize: "15px",
              fontWeight: 800,
              letterSpacing: "3px",
              marginBottom: "20px",
            }}
          >
            01 — OUR VISION
          </p>

          <h2
            style={{
              fontFamily: "Fredoka, sans-serif",
              fontSize: "clamp(42px, 7vw, 84px)",
              lineHeight: 1.08,
              letterSpacing: "-2px",
              maxWidth: "1000px",
              margin: "0 0 28px",
            }}
          >
            A future shaped
            <br />
            by{" "}
            <span style={{ color: "#849A35" }}>
              young people.
            </span>
          </h2>

          <p
            style={{
              maxWidth: "760px",
              fontSize: "clamp(16px, 1.5vw, 19px)",
              lineHeight: 1.9,
              margin: 0,
              color: "#526174",
            }}
          >
            We envision a world where every young person has the
            opportunity to learn, grow, and turn their ideas into
            positive change. A future where youth are empowered
            to make informed decisions, access meaningful
            opportunities, and contribute to stronger communities.
          </p>
        </div>

        {/* VISION FEATURE CARD */}
        <div
          className="vision-card"
          style={{
            position: "relative",
            marginTop: "40px",
            padding: "clamp(28px, 6vw, 72px)",
            background: "#C6D95B",
            borderRadius: "32px",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-35px",
              right: "20px",
              fontSize: "clamp(100px, 18vw, 220px)",
              lineHeight: 1,
              opacity: 0.12,
              pointerEvents: "none",
            }}
          >
            ✳
          </span>

          <p
            className="eyebrow"
            style={{
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "3px",
              marginBottom: "24px",
              position: "relative",
            }}
          >
            OUR VISION ✦
          </p>

          <h3
            style={{
              fontFamily: "Fredoka, sans-serif",
              fontSize: "clamp(34px, 6vw, 68px)",
              lineHeight: 1.15,
              letterSpacing: "-1px",
              maxWidth: "900px",
              margin: "0 0 28px",
              position: "relative",
            }}
          >
            A world where every young idea has the chance to grow.
          </h3>

          <p
            style={{
              maxWidth: "800px",
              fontSize: "clamp(16px, 1.5vw, 19px)",
              lineHeight: 1.9,
              margin: 0,
              position: "relative",
            }}
          >
            We envision an Indonesia where young people
            understand the importance of financial literacy,
            make responsible financial choices with confidence,
            work toward financial independence, and actively
            contribute to the growth and well-being of society.
          </p>
        </div>
      </section>

      {/* =========================================
          OUR MISSION
      ========================================= */}
      <section
        className="mission-content"
        style={{
          marginTop: "clamp(88px, 12vw, 144px)",
        }}
      >
        <div className="mission-intro">
          <p
            className="eyebrow"
            style={{
              color: "#849A35",
              fontSize: "15px",
              fontWeight: 800,
              letterSpacing: "3px",
              marginBottom: "20px",
            }}
          >
            02 — OUR MISSION
          </p>

          <h2
            style={{
              fontFamily: "Fredoka, sans-serif",
              fontSize: "clamp(42px, 7vw, 84px)",
              lineHeight: 1.08,
              letterSpacing: "-2px",
              maxWidth: "1000px",
              margin: "0 0 28px",
            }}
          >
            Turning ideas into
            <br />
            <span style={{ color: "#849A35" }}>
              meaningful action.
            </span>
          </h2>

          <p
            style={{
              maxWidth: "760px",
              fontSize: "clamp(16px, 1.5vw, 19px)",
              lineHeight: 1.9,
              color: "#526174",
              margin: 0,
            }}
          >
            YouthFunded is here to make financial education
            more relevant for Indonesia's younger generations.
            Beyond numbers, we create engaging learning
            experiences that empower young people to make
            informed financial choices in everyday life.
          </p>
        </div>

        {/* MISSION CARDS */}
        <div
          className="mission-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
            gap: "24px",
            marginTop: "44px",
          }}
        >
          {missions.map((mission) => (
            <article
              className="mission-card"
              key={mission.number}
              style={{
                minWidth: 0,
                boxSizing: "border-box",
                padding: "clamp(24px, 3vw, 36px)",
                background: "#fffaf0",
                border: "1px solid rgba(38, 54, 74, 0.12)",
                borderRadius: "24px",
                borderTop: `7px solid ${mission.color}`,
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  marginBottom: "32px",
                }}
              >
                <span
                  className="mission-number"
                  style={{
                    fontFamily: "Fredoka, sans-serif",
                    fontSize: "clamp(34px, 4vw, 48px)",
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {mission.number}
                </span>

                <span
                  style={{
                    width: "54px",
                    height: "54px",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "18px",
                    background: mission.color,
                    fontSize: "25px",
                  }}
                >
                  {mission.icon}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "Fredoka, sans-serif",
                  fontSize: "clamp(25px, 3vw, 32px)",
                  lineHeight: 1.2,
                  margin: "0 0 18px",
                }}
              >
                {mission.title}
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.9,
                  color: "#526174",
                  margin: 0,
                }}
              >
                {mission.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =========================================
          OUR BELIEF — CLOSING
      ========================================= */}
      <section
        style={{
          position: "relative",
          marginTop: "clamp(88px, 12vw, 144px)",
          padding: "clamp(32px, 6vw, 72px)",
          background: "#B8E3F5",
          borderRadius: "32px",
          boxSizing: "border-box",
          overflow: "hidden",
        }}
      >
        <p
          className="eyebrow"
          style={{
            fontSize: "14px",
            fontWeight: 800,
            letterSpacing: "3px",
            marginBottom: "24px",
          }}
        >
          OUR BELIEF ✳
        </p>

        <h2
          style={{
            fontFamily: "Fredoka, sans-serif",
            fontSize: "clamp(38px, 6.5vw, 76px)",
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            maxWidth: "900px",
            margin: "0 0 24px",
          }}
        >
          Small steps can lead to
          <br />
          <span style={{ color: "#526D16" }}>
            meaningful change.
          </span>
        </h2>

        <p
          style={{
            maxWidth: "700px",
            fontSize: "clamp(16px, 1.5vw, 19px)",
            lineHeight: 1.9,
            margin: 0,
          }}
        >
          Every lesson learned, every habit built, and every
          opportunity shared brings us one step closer to a
          financially confident generation. Together, we can
          help young people learn, connect, and create a future
          filled with possibilities.
        </p>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "28px",
            bottom: "-45px",
            fontSize: "clamp(90px, 15vw, 170px)",
            opacity: 0.12,
            lineHeight: 1,
            pointerEvents: "none",
          }}
        >
          ✳
        </div>
      </section>
    </main>
  );
}
