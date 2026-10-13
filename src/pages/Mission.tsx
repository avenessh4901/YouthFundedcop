const missions = [
  {
    number: "01",
    title: "Accessible Learning",
    description:
      "Make financial literacy easy to understand through engaging, practical lessons that every young person can access.",
    color: "#C6D95B",
    icon: "📚",
  },
  {
    number: "02",
    title: "Responsible Habits",
    description:
      "Encourage healthy money management and responsible financial decisions from an early age.",
    color: "#B8E3F5",
    icon: "🌱",
  },
  {
    number: "03",
    title: "Youth Collaboration",
    description:
      "Empower young people to learn, create, and grow together through community-led initiatives.",
    color: "#F3D6B8",
    icon: "🤝",
  },
];

const sectionTitle: React.CSSProperties = {
  fontFamily: "Fredoka, sans-serif",
  fontSize: "clamp(30px, 3.5vw, 46px)",
  fontWeight: 600,
  lineHeight: 1.2,
  letterSpacing: "-0.8px",
  margin: "0 0 18px",
};

const bodyText: React.CSSProperties = {
  fontSize: "clamp(14px, 1.2vw, 17px)",
  lineHeight: 1.85,
  color: "#526174",
  margin: 0,
};

const eyebrowStyle: React.CSSProperties = {
  color: "#71852D",
  fontSize: "12px",
  fontWeight: 800,
  letterSpacing: "2px",
  margin: "0 0 16px",
};

export default function Mission() {
  return (
    <main
      className="purpose-page"
      style={{
        width: "100%",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "clamp(24px, 4vw, 52px) clamp(20px, 5vw, 64px) 80px",
        boxSizing: "border-box",
        color: "#26364a",
        overflow: "hidden",
      }}
    >
      {/* =====================================
          01. WHAT WE STAND FOR
      ===================================== */}
      <section
        className="purpose-hero"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
          alignItems: "center",
          gap: "clamp(28px, 5vw, 64px)",
          padding: "clamp(28px, 5vw, 56px)",
          background: "#fffaf0",
          border: "1px solid rgba(38, 54, 74, 0.1)",
          borderRadius: "28px",
          boxSizing: "border-box",
        }}
      >
        {/* LEFT: TEXT */}
        <div>
          <p style={eyebrowStyle}>YOUTHFUNDED · OUR PURPOSE</p>

          <h1
            style={{
              fontFamily: "Fredoka, sans-serif",
              fontSize: "clamp(34px, 4.2vw, 54px)",
              fontWeight: 600,
              lineHeight: 1.13,
              letterSpacing: "-1.2px",
              margin: "0 0 22px",
              maxWidth: "540px",
            }}
          >
            What We{" "}
            <span style={{ color: "#849A35" }}>Stand For.</span>
          </h1>

          <p style={bodyText}>
            We believe every young person deserves the knowledge
            and confidence to make informed financial decisions.
            By making financial literacy accessible and engaging,
            we help young people build healthier money habits
            and take meaningful steps toward their future.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "10px",
              marginTop: "26px",
            }}
          >
            <span
              style={{
                background: "#C6D95B",
                padding: "9px 13px",
                borderRadius: "8px",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.4px",
              }}
            >
              SDG 4 · EDUCATION
            </span>

            <span
              style={{
                background: "#B8E3F5",
                padding: "9px 13px",
                borderRadius: "8px",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "0.4px",
              }}
            >
              SDG 8 · ECONOMIC GROWTH
            </span>
          </div>
        </div>

        {/* RIGHT: MONEY ILLUSTRATION */}
        <div
          className="money-illustration"
          role="img"
          aria-label="Illustration of savings, banknotes, and coins"
          style={{
            position: "relative",
            minHeight: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#EAF3D5",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {/* Decorative circles */}
          <div
            style={{
              position: "absolute",
              width: "230px",
              height: "230px",
              borderRadius: "50%",
              background: "#C6D95B",
              opacity: 0.55,
              top: "35px",
              right: "-35px",
            }}
          />

          <div
            style={{
              position: "absolute",
              width: "140px",
              height: "140px",
              borderRadius: "50%",
              background: "#B8E3F5",
              bottom: "-30px",
              left: "-15px",
            }}
          />

          {/* Banknote */}
          <div
            style={{
              position: "absolute",
              width: "190px",
              height: "105px",
              background: "#6D9E77",
              border: "5px solid #477C58",
              borderRadius: "12px",
              transform: "rotate(-13deg) translate(-24px, -8px)",
              display: "grid",
              placeItems: "center",
              boxSizing: "border-box",
              boxShadow: "0 12px 24px rgba(38,54,74,0.12)",
            }}
          >
            <div
              style={{
                width: "58px",
                height: "58px",
                border: "2px solid rgba(255,255,255,0.65)",
                borderRadius: "50%",
                display: "grid",
                placeItems: "center",
                color: "#fffaf0",
                fontSize: "29px",
                fontWeight: 800,
              }}
            >
              $
            </div>

            <span
              style={{
                position: "absolute",
                left: "10px",
                top: "8px",
                color: "#fffaf0",
                fontSize: "10px",
                fontWeight: 800,
              }}
            >
              SAVE
            </span>
          </div>

          {/* Second banknote */}
          <div
            style={{
              position: "absolute",
              width: "170px",
              height: "92px",
              background: "#B8E3F5",
              border: "4px solid #82BED7",
              borderRadius: "12px",
              transform: "rotate(12deg) translate(35px, 42px)",
              display: "grid",
              placeItems: "center",
              boxSizing: "border-box",
              boxShadow: "0 12px 24px rgba(38,54,74,0.1)",
            }}
          >
            <span
              style={{
                fontSize: "34px",
                fontWeight: 800,
                color: "#26364a",
              }}
            >
              +
            </span>
          </div>

          {/* Coins */}
          <div
            style={{
              position: "absolute",
              right: "14%",
              top: "15%",
              width: "62px",
              height: "62px",
              borderRadius: "50%",
              background: "#F3D36B",
              border: "5px solid #D9AE3E",
              boxSizing: "border-box",
              display: "grid",
              placeItems: "center",
              color: "#8B681E",
              fontSize: "27px",
              fontWeight: 800,
              boxShadow: "0 8px 16px rgba(38,54,74,0.12)",
            }}
          >
            $
          </div>

          <div
            style={{
              position: "absolute",
              right: "19%",
              bottom: "13%",
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "#F3D36B",
              border: "4px solid #D9AE3E",
              boxSizing: "border-box",
              display: "grid",
              placeItems: "center",
              color: "#8B681E",
              fontSize: "20px",
              fontWeight: 800,
            }}
          >
            $
          </div>

          {/* Small floating accent */}
          <span
            style={{
              position: "absolute",
              top: "20px",
              left: "24px",
              fontSize: "26px",
              color: "#71852D",
            }}
          >
            ✳
          </span>

          <span
            style={{
              position: "absolute",
              bottom: "18px",
              right: "24px",
              background: "#26364a",
              color: "#fffaf0",
              padding: "10px 14px",
              borderRadius: "100px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "1px",
            }}
          >
            YOUR MONEY, YOUR FUTURE
          </span>
        </div>
      </section>

      {/* =====================================
          02. OUR PURPOSE IN ACTION
      ===================================== */}
      <section
        style={{
          marginTop: "clamp(64px, 8vw, 96px)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "20px",
            alignItems: "end",
            marginBottom: "30px",
          }}
        >
          <div>
            <p style={eyebrowStyle}>OUR PURPOSE IN ACTION</p>

            <h2 style={sectionTitle}>
              Turning knowledge into{" "}
              <span style={{ color: "#849A35" }}>opportunity.</span>
            </h2>
          </div>

          <p
            style={{
              ...bodyText,
              maxWidth: "460px",
              marginBottom: "4px",
            }}
          >
            Our work connects financial education with the
            real-life skills young people need to learn, grow,
            and participate in a changing economy.
          </p>
        </div>

        <div
          className="sdg-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "20px",
          }}
        >
          <article
            style={{
              background: "#B8E3F5",
              padding: "clamp(24px, 3vw, 34px)",
              borderRadius: "22px",
              boxSizing: "border-box",
            }}
          >
            <span style={{ fontSize: "30px" }}>📚</span>

            <p
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                margin: "20px 0 10px",
              }}
            >
              SUSTAINABLE DEVELOPMENT GOAL 04
            </p>

            <h3
              style={{
                fontFamily: "Fredoka, sans-serif",
                fontSize: "clamp(23px, 2.5vw, 30px)",
                lineHeight: 1.25,
                margin: "0 0 14px",
              }}
            >
              Quality Education
            </h3>

            <p style={{ ...bodyText, color: "#344B5E" }}>
              We support accessible and inclusive learning by
              turning financial concepts into practical lessons
              that young people can apply in their daily lives.
            </p>
          </article>

          <article
            style={{
              background: "#C6D95B",
              padding: "clamp(24px, 3vw, 34px)",
              borderRadius: "22px",
              boxSizing: "border-box",
            }}
          >
            <span style={{ fontSize: "30px" }}>💼</span>

            <p
              style={{
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "1.5px",
                margin: "20px 0 10px",
              }}
            >
              SUSTAINABLE DEVELOPMENT GOAL 08
            </p>

            <h3
              style={{
                fontFamily: "Fredoka, sans-serif",
                fontSize: "clamp(23px, 2.5vw, 30px)",
                lineHeight: 1.25,
                margin: "0 0 14px",
              }}
            >
              Decent Work & Growth
            </h3>

            <p style={{ ...bodyText, color: "#34421F" }}>
              We help young people develop financial confidence
              and responsible habits as they prepare for future
              opportunities and economic participation.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================
          03. OUR VISION
      ===================================== */}
      <section
        style={{
          marginTop: "clamp(72px, 9vw, 112px)",
        }}
      >
        <p style={eyebrowStyle}>01 — OUR VISION</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "clamp(24px, 5vw, 60px)",
            alignItems: "center",
          }}
        >
          <div>
            <h2 style={sectionTitle}>
              A future shaped by{" "}
              <span style={{ color: "#849A35" }}>
                young people.
              </span>
            </h2>

            <p style={bodyText}>
              We envision an Indonesia where every young person
              understands the importance of financial literacy,
              makes responsible financial decisions with
              confidence, and has the opportunity to build a
              brighter future.
            </p>
          </div>

          <div
            style={{
              background: "#26364a",
              color: "#fffaf0",
              padding: "clamp(28px, 4vw, 42px)",
              borderRadius: "24px",
              boxSizing: "border-box",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                color: "#C6D95B",
                fontSize: "32px",
              }}
            >
              ✳
            </span>

            <p
              style={{
                color: "#C6D95B",
                fontSize: "11px",
                fontWeight: 800,
                letterSpacing: "2px",
                margin: "18px 0 14px",
              }}
            >
              THE FUTURE WE BELIEVE IN
            </p>

            <h3
              style={{
                fontFamily: "Fredoka, sans-serif",
                fontSize: "clamp(25px, 3vw, 36px)",
                lineHeight: 1.3,
                margin: "0 0 16px",
              }}
            >
              Every young idea deserves a chance to grow.
            </h3>

            <p
              style={{
                color: "rgba(255,250,240,0.78)",
                fontSize: "14px",
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              A financially aware generation can make informed
              choices, explore opportunities, and contribute
              positively to society.
            </p>

            <div
              style={{
                height: "5px",
                width: "76px",
                background: "#C6D95B",
                borderRadius: "10px",
                marginTop: "26px",
              }}
            />
          </div>
        </div>
      </section>

      {/* =====================================
          04. OUR MISSION
      ===================================== */}
      <section
        style={{
          marginTop: "clamp(72px, 9vw, 112px)",
        }}
      >
        <p style={eyebrowStyle}>02 — OUR MISSION</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "24px",
            alignItems: "end",
            marginBottom: "32px",
          }}
        >
          <h2 style={sectionTitle}>
            Small steps.{" "}
            <span style={{ color: "#849A35" }}>
              Meaningful impact.
            </span>
          </h2>

          <p
            style={{
              ...bodyText,
              maxWidth: "450px",
              marginBottom: "18px",
            }}
          >
            We bring our purpose to life through three
            commitments that guide what we create and how
            we support young people.
          </p>
        </div>

        <div
          className="mission-grid"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 230px), 1fr))",
            gap: "18px",
          }}
        >
          {missions.map((mission) => (
            <article
              key={mission.number}
              className="mission-card"
              style={{
                minWidth: 0,
                padding: "26px",
                background: "#fffaf0",
                border: "1px solid rgba(38,54,74,0.12)",
                borderRadius: "20px",
                borderTop: `5px solid ${mission.color}`,
                boxSizing: "border-box",
                transition:
                  "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                }}
              >
                <span
                  style={{
                    fontFamily: "Fredoka, sans-serif",
                    fontSize: "30px",
                    fontWeight: 600,
                  }}
                >
                  {mission.number}
                </span>

                <span
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: mission.color,
                    display: "grid",
                    placeItems: "center",
                    fontSize: "22px",
                  }}
                >
                  {mission.icon}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "Fredoka, sans-serif",
                  fontSize: "24px",
                  lineHeight: 1.3,
                  margin: "0 0 12px",
                }}
              >
                {mission.title}
              </h3>

              <p style={{ ...bodyText, fontSize: "14px" }}>
                {mission.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================
          05. OUR BELIEF
      ===================================== */}
      <section
        style={{
          marginTop: "clamp(72px, 9vw, 112px)",
          padding: "clamp(28px, 5vw, 48px)",
          background: "#EAF3D5",
          borderRadius: "24px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          alignItems: "center",
          gap: "24px",
        }}
      >
        <div>
          <p style={eyebrowStyle}>OUR BELIEF</p>

          <h2 style={{ ...sectionTitle, marginBottom: 0 }}>
            Better knowledge.
            <br />
            <span style={{ color: "#71852D" }}>
              Brighter possibilities.
            </span>
          </h2>
        </div>

        <p style={bodyText}>
          We believe meaningful change starts with small,
          consistent steps. Together, we can make financial
          education more accessible and help young people
          approach their futures with greater confidence.
        </p>
      </section>
    </main>
  );
}
