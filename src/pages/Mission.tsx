import React from "react";

const colors = {
  navy: "#26364a",
  cream: "#fffaf0",
  lime: "#C6D95B",
  blue: "#B8E3F5",
  white: "#ffffff",
  muted: "#667487",
};

const page: React.CSSProperties = {
  background: colors.cream,
  color: colors.navy,
  minHeight: "100vh",
  fontFamily: "'DM Sans', sans-serif",
  overflowX: "hidden",
};

const container: React.CSSProperties = {
  width: "min(1120px, 88%)",
  margin: "0 auto",
};

const eyebrow: React.CSSProperties = {
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: "2px",
  textTransform: "uppercase",
  margin: "0 0 16px",
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Fredoka', sans-serif",
  fontSize: "clamp(28px, 3.5vw, 40px)",
  lineHeight: 1.2,
  fontWeight: 600,
  margin: "0 0 18px",
};

/* ========================================
   MONEY ILLUSTRATION
======================================== */

function MoneyIllustration() {
  return (
    <div
      className="yf-money-scene"
      role="img"
      aria-label="Illustration of banknotes and coins"
    >
      <style>{`
        .yf-money-scene {
          position: relative;
          width: 100%;
          max-width: 440px;
          height: 330px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          isolation: isolate;
        }

        .yf-money-circle {
          position: absolute;
          width: min(75%, 290px);
          aspect-ratio: 1;
          border-radius: 50%;
          background: #e6edbd;
          z-index: -1;
        }

        .yf-banknote {
          position: absolute;
          width: 205px;
          height: 120px;
          border: 2px solid #26364a;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 5px 6px 0 #26364a;
        }

        .yf-banknote-back {
          background: #b8e3f5;
          transform: rotate(-17deg) translate(-25px, -14px);
        }

        .yf-banknote-front {
          background: #c6d95b;
          transform: rotate(12deg) translate(23px, 20px);
        }

        .yf-banknote-inner {
          width: 85%;
          height: 76%;
          border: 1.5px dashed #26364a;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .yf-currency {
          font-family: 'Fredoka', sans-serif;
          font-size: 56px;
          line-height: 1;
          font-weight: 600;
        }

        .yf-money-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #26364a;
        }

        .yf-coin {
          position: absolute;
          width: 67px;
          height: 67px;
          border-radius: 50%;
          border: 2px solid #26364a;
          background: #f1c96c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Fredoka', sans-serif;
          font-size: 29px;
          font-weight: 600;
          box-shadow: 3px 4px 0 #26364a;
        }

        .yf-coin-one {
          right: 5%;
          top: 13%;
        }

        .yf-coin-two {
          left: 7%;
          bottom: 12%;
          width: 53px;
          height: 53px;
          font-size: 23px;
          background: #fffaf0;
        }

        .yf-money-spark {
          position: absolute;
          font-size: 29px;
          font-weight: 700;
          color: #26364a;
        }

        .yf-money-spark-one {
          top: 11%;
          left: 13%;
        }

        .yf-money-spark-two {
          right: 9%;
          bottom: 13%;
          color: #7c9634;
        }

        @media (max-width: 600px) {
          .yf-money-scene {
            height: 260px;
            max-width: 340px;
          }

          .yf-banknote {
            width: 175px;
            height: 102px;
          }

          .yf-currency {
            font-size: 46px;
          }

          .yf-coin {
            width: 56px;
            height: 56px;
            font-size: 24px;
          }

          .yf-coin-two {
            width: 45px;
            height: 45px;
            font-size: 20px;
          }

          .yf-money-spark {
            font-size: 24px;
          }
        }

        @media (max-width: 360px) {
          .yf-money-scene {
            height: 235px;
          }

          .yf-banknote {
            width: 150px;
            height: 90px;
          }

          .yf-currency {
            font-size: 40px;
          }
        }
      `}</style>

      <div className="yf-money-circle" />

      <span className="yf-money-spark yf-money-spark-one">
        ✳
      </span>

      <span className="yf-money-spark yf-money-spark-two">
        ✦
      </span>

      <div className="yf-banknote yf-banknote-back">
        <div className="yf-banknote-inner">
          <span className="yf-currency">$</span>
          <span
            className="yf-money-dot"
            style={{ top: 8, left: 8 }}
          />
          <span
            className="yf-money-dot"
            style={{ right: 8, bottom: 8 }}
          />
        </div>
      </div>

      <div className="yf-banknote yf-banknote-front">
        <div className="yf-banknote-inner">
          <span className="yf-currency">$</span>
          <span
            className="yf-money-dot"
            style={{ top: 8, right: 8 }}
          />
          <span
            className="yf-money-dot"
            style={{ bottom: 8, left: 8 }}
          />
        </div>
      </div>

      <div className="yf-coin yf-coin-one">$</div>
      <div className="yf-coin yf-coin-two">¢</div>
    </div>
  );
}

/* ========================================
   PURPOSE CARD
======================================== */

interface PurposeCardProps {
  number: string;
  title: string;
  description: string;
  color: string;
  tag: string;
  points: string[];
}

function PurposeCard({
  number,
  title,
  description,
  color,
  tag,
  points,
}: PurposeCardProps) {
  return (
    <article className="yf-purpose-card">
      <div className="yf-purpose-card-heading">
        <div
          className="yf-purpose-number"
          style={{ background: color }}
        >
          {number}
        </div>

        <div>
          <p className="yf-purpose-tag">{tag}</p>

          <h3 className="yf-purpose-card-title">
            {title}
          </h3>
        </div>
      </div>

      <p className="yf-purpose-description">
        {description}
      </p>

      <div className="yf-purpose-details">
        <p className="yf-purpose-details-label">
          HOW WE CONNECT
        </p>

        <ul className="yf-purpose-list">
          {points.map((point) => (
            <li key={point}>
              <span className="yf-check">✓</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

/* ========================================
   MISSION PAGE
======================================== */

export default function Mission() {
  return (
    <main className="yf-mission-page">
      <style>{`
        .yf-mission-page {
          background: ${colors.cream};
          color: ${colors.navy};
          min-height: 100vh;
          overflow-x: clip;
          font-family: 'DM Sans', sans-serif;
        }

        .yf-mission-page *,
        .yf-mission-page *::before,
        .yf-mission-page *::after {
          box-sizing: border-box;
        }

        .yf-purpose-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }

        .yf-purpose-card {
          background: ${colors.white};
          border: 1px solid #26364a18;
          border-radius: 20px;
          padding: clamp(22px, 3vw, 32px);
          display: flex;
          flex-direction: column;
          min-width: 0;
          height: 100%;
          box-shadow: 0 5px 18px rgba(38, 54, 74, 0.025);
        }

        .yf-purpose-card-heading {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .yf-purpose-number {
          width: 58px;
          height: 58px;
          flex-shrink: 0;
          border-radius: 15px;
          display: grid;
          place-items: center;
          font-family: 'Fredoka', sans-serif;
          font-size: 27px;
          font-weight: 600;
        }

        .yf-purpose-tag {
          font-size: 10px;
          line-height: 1.5;
          font-weight: 800;
          letter-spacing: 1px;
          margin: 0 0 6px;
          color: ${colors.muted};
        }

        .yf-purpose-card-title {
          font-family: 'Fredoka', sans-serif;
          font-size: clamp(20px, 2.2vw, 25px);
          line-height: 1.2;
          margin: 0;
          font-weight: 600;
        }

        .yf-purpose-description {
          font-size: 14px;
          line-height: 1.9;
          color: ${colors.muted};
          margin: 0 0 24px;
        }

        .yf-purpose-details {
          border-top: 1px solid #26364a18;
          padding-top: 19px;
          margin-top: auto;
        }

        .yf-purpose-details-label {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.2px;
          margin: 0 0 14px;
        }

        .yf-purpose-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }

        .yf-purpose-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          line-height: 1.75;
          color: ${colors.navy};
        }

        .yf-check {
          color: #7c9634;
          font-weight: 900;
          flex-shrink: 0;
        }

        .yf-vision-layout {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 48px;
          align-items: center;
        }

        .yf-vision-quote {
          background: ${colors.navy};
          color: ${colors.cream};
          border-radius: 23px;
          padding: clamp(27px, 4vw, 42px);
          position: relative;
          overflow: hidden;
        }

        .yf-mission-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .yf-mission-card {
          border-radius: 18px;
          padding: 25px;
          background: ${colors.white};
          border: 1px solid #26364a12;
          height: 100%;
        }

        .yf-purpose-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 25px;
          margin-bottom: 35px;
        }

        .yf-sdg-badge {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1px;
          white-space: nowrap;
          padding: 10px 14px;
          border: 1px solid #26364a25;
          border-radius: 100px;
        }

        .yf-why-banner {
          margin-top: 25px;
          padding: 20px 23px;
          background: ${colors.navy};
          color: ${colors.cream};
          border-radius: 16px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }

        .yf-cta-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: ${colors.lime};
          padding: 13px 20px;
          border-radius: 100px;
          margin-top: 28px;
          font-size: 13px;
          font-weight: 800;
          max-width: 100%;
        }

        @media (min-width: 1100px) {
          .yf-purpose-card {
            padding: 32px;
          }
        }

        @media (max-width: 760px) {
          .yf-purpose-grid,
          .yf-vision-layout {
            grid-template-columns: minmax(0, 1fr);
          }

          .yf-mission-grid {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
          }

          .yf-purpose-heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .yf-vision-layout {
            gap: 28px;
          }

          .yf-purpose-card {
            padding: 24px;
          }

          .yf-mission-card {
            padding: 23px;
          }
        }

        @media (max-width: 420px) {
          .yf-purpose-card-heading {
            align-items: flex-start;
            gap: 12px;
          }

          .yf-purpose-number {
            width: 48px;
            height: 48px;
            border-radius: 13px;
            font-size: 23px;
          }

          .yf-purpose-tag {
            font-size: 9px;
            letter-spacing: 0.6px;
          }

          .yf-purpose-card-title {
            font-size: 21px;
          }

          .yf-why-banner {
            padding: 18px;
          }

          .yf-sdg-badge {
            white-space: normal;
          }
        }

        @media (prefers-reduced-motion: no-preference) {
          .yf-purpose-card,
          .yf-mission-card {
            transition:
              transform 180ms ease,
              box-shadow 180ms ease;
          }

          @media (hover: hover) {
            .yf-purpose-card:hover,
            .yf-mission-card:hover {
              transform: translateY(-3px);
              box-shadow: 0 12px 28px rgba(38, 54, 74, 0.07);
            }
          }
        }
      `}</style>

      {/* =====================================
          HERO — WHAT WE STAND FOR
      ===================================== */}

      <section
        style={{
          padding: "clamp(42px, 6vw, 72px) 0 clamp(48px, 7vw, 76px)",
        }}
      >
        <div
          style={{
            ...container,
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "clamp(24px, 5vw, 60px)",
            alignItems: "center",
          }}
        >
          <div>
            <p style={eyebrow}>
              YOUTHFUNDED · OUR PURPOSE
            </p>

            <h1
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: "clamp(36px, 4.5vw, 54px)",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                fontWeight: 600,
                margin: "0 0 22px",
                maxWidth: 500,
              }}
            >
              What We
              <br />
              Stand For
              <span style={{ color: "#8ca33a" }}>.</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(14px, 1.4vw, 16px)",
                lineHeight: 1.9,
                color: colors.muted,
                maxWidth: 490,
                margin: "0 0 24px",
              }}
            >
              We believe that understanding money is more than
              a life skill. It is a foundation for making informed
              decisions, pursuing opportunities, and building a
              better future.
            </p>

            <div className="yf-cta-pill" style={{ marginTop: 0 }}>
              Financial literacy for every young mind
              <span aria-hidden="true">↗</span>
            </div>
          </div>

          <MoneyIllustration />
        </div>
      </section>

      {/* =====================================
          PURPOSE — SDG 4 & SDG 8
      ===================================== */}

      <section
        style={{
          background: "#f4f1e5",
          padding: "clamp(48px, 6.5vw, 78px) 0",
        }}
      >
        <div style={container}>
          <div className="yf-purpose-heading">
            <div style={{ maxWidth: 620 }}>
              <p style={eyebrow}>
                OUR PURPOSE IN ACTION
              </p>

              <h2 style={sectionTitle}>
                Turning knowledge into opportunity.
              </h2>

              <p
                style={{
                  color: colors.muted,
                  fontSize: 14,
                  lineHeight: 1.9,
                  maxWidth: 610,
                  margin: 0,
                }}
              >
                YouthFunded aligns its purpose with two United
                Nations Sustainable Development Goals. Together,
                they reflect our belief that young people deserve
                access to knowledge and opportunities to shape
                their futures.
              </p>
            </div>

            <span className="yf-sdg-badge">
              SDG 04 + SDG 08
            </span>
          </div>

          <div className="yf-purpose-grid">
            <PurposeCard
              number="04"
              title="Quality Education"
              tag="SUSTAINABLE DEVELOPMENT GOAL 4"
              color={colors.blue}
              description="We believe quality education should equip young people with practical knowledge they can use in everyday life. Financial literacy is an important part of that learning, helping young people understand budgeting, saving, spending, and responsible financial decisions."
              points={[
                "Make financial literacy easier for young people to understand.",
                "Share accessible, engaging, and educational resources.",
                "Encourage lifelong learning and informed decision-making.",
              ]}
            />

            <PurposeCard
              number="08"
              title="Decent Work & Economic Growth"
              tag="SUSTAINABLE DEVELOPMENT GOAL 8"
              color={colors.lime}
              description="We believe financial knowledge can help young people prepare for a more independent future. By developing financial awareness and an entrepreneurial mindset, they can better understand economic opportunities and make thoughtful plans for their goals."
              points={[
                "Build awareness of saving, planning, and financial responsibility.",
                "Encourage entrepreneurial thinking and initiative.",
                "Help young people prepare for future work and economic participation.",
              ]}
            />
          </div>

          <div className="yf-why-banner">
            <span
              style={{
                fontSize: 23,
                lineHeight: 1,
                color: colors.lime,
                flexShrink: 0,
              }}
            >
              ✳
            </span>

            <p
              style={{
                margin: 0,
                fontSize: 13,
                lineHeight: 1.9,
              }}
            >
              <strong>Why both goals?</strong>{" "}
              Education gives young people the knowledge to make
              informed choices, while economic opportunity helps
              them put that knowledge into practice. YouthFunded
              brings these ideas together through youth-focused
              financial literacy.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================
          VISION
      ===================================== */}

      <section
        style={{
          padding: "clamp(55px, 7.5vw, 88px) 0",
        }}
      >
        <div
          className="yf-vision-layout"
          style={container}
        >
          <div>
            <p style={eyebrow}>OUR VISION</p>

            <h2 style={sectionTitle}>
              A future where young people feel confident about money.
            </h2>

            <p
              style={{
                color: colors.muted,
                fontSize: 14,
                lineHeight: 1.95,
                maxWidth: 520,
                margin: 0,
              }}
            >
              We envision a generation that can approach financial
              decisions with knowledge, confidence, and responsibility.
              A generation that recognizes opportunities, understands
              its choices, and has the tools to work toward a more
              sustainable future.
            </p>
          </div>

          <div className="yf-vision-quote">
            <div
              style={{
                fontSize: 36,
                color: colors.lime,
                marginBottom: 18,
              }}
            >
              ✳
            </div>

            <p
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: "clamp(23px, 3vw, 30px)",
                lineHeight: 1.45,
                margin: "0 0 24px",
                fontWeight: 500,
              }}
            >
              “Financial confidence begins with knowledge, and grows
              through action.”
            </p>

            <div
              style={{
                height: 4,
                width: 65,
                background: colors.lime,
                borderRadius: 10,
              }}
            />
          </div>
        </div>
      </section>

      {/* =====================================
          MISSION
      ===================================== */}

      <section
        style={{
          background: "#eaf4f5",
          padding: "clamp(48px, 6.5vw, 78px) 0",
        }}
      >
        <div style={container}>
          <p style={eyebrow}>OUR MISSION</p>

          <h2
            style={{
              ...sectionTitle,
              maxWidth: 650,
            }}
          >
            Small steps toward a financially aware generation.
          </h2>

          <p
            style={{
              fontSize: 14,
              color: colors.muted,
              lineHeight: 1.9,
              maxWidth: 650,
              margin: "0 0 32px",
            }}
          >
            We aim to make financial literacy more accessible,
            relevant, and meaningful to young people through
            learning, collaboration, and youth-led initiatives.
          </p>

          <div className="yf-mission-grid">
            {[
              {
                number: "01",
                title: "Make Learning Accessible",
                text: "Present financial concepts in approachable ways so young people can learn at their own pace and apply what they discover.",
                color: colors.blue,
              },
              {
                number: "02",
                title: "Empower Youth Initiative",
                text: "Encourage young people to share ideas, create educational initiatives, and take an active role in their communities.",
                color: colors.lime,
              },
              {
                number: "03",
                title: "Build Practical Awareness",
                text: "Promote responsible financial habits and help young people connect what they learn with everyday choices and future plans.",
                color: "#f1c96c",
              },
            ].map((item) => (
              <article
                className="yf-mission-card"
                key={item.number}
              >
                <div
                  style={{
                    width: 43,
                    height: 43,
                    borderRadius: 12,
                    display: "grid",
                    placeItems: "center",
                    background: item.color,
                    fontFamily: "'Fredoka', sans-serif",
                    fontSize: 19,
                    fontWeight: 600,
                    marginBottom: 21,
                  }}
                >
                  {item.number}
                </div>

                <h3
                  style={{
                    fontFamily: "'Fredoka', sans-serif",
                    fontSize: 21,
                    lineHeight: 1.3,
                    fontWeight: 600,
                    margin: "0 0 13px",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: colors.muted,
                    fontSize: 13,
                    lineHeight: 1.9,
                    margin: 0,
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================
          OUR BELIEF
      ===================================== */}

      <section
        style={{
          padding: "clamp(52px, 7vw, 78px) 0",
        }}
      >
        <div
          style={{
            ...container,
            textAlign: "center",
            maxWidth: 760,
          }}
        >
          <p style={eyebrow}>OUR BELIEF</p>

          <h2 style={sectionTitle}>
            Every young person deserves the chance to understand,
            choose, and grow.
          </h2>

          <p
            style={{
              fontSize: 14,
              lineHeight: 1.95,
              color: colors.muted,
              margin: "0 auto",
              maxWidth: 650,
            }}
          >
            We believe meaningful change starts when knowledge
            becomes accessible and young people are empowered to
            use it. Through financial literacy, collaboration, and
            small but purposeful actions, we hope to help create
            a future full of possibilities.
          </p>

          <div className="yf-cta-pill">
            Small Steps, Big Impact
            <span aria-hidden="true">✳</span>
          </div>
        </div>
      </section>
    </main>
  );
}
