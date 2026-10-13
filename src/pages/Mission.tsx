import React from "react";

const colors = {
  navy: "#26364a",
  cream: "#fffaf0",
  lime: "#C6D95B",
  blue: "#B8E3F5",
  white: "#ffffff",
  muted: "#667487",
};

const container: React.CSSProperties = {
  width: "min(1120px, 88%)",
  margin: "0 auto",
};

const eyebrow: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 800,
  letterSpacing: "2px",
  textTransform: "uppercase",
  margin: "0 0 14px",
};

const heading: React.CSSProperties = {
  fontFamily: "'Fredoka', sans-serif",
  fontSize: "clamp(29px, 4vw, 42px)",
  lineHeight: 1.2,
  fontWeight: 600,
  margin: "0 0 16px",
};

function MoneyIllustration() {
  return (
    <div className="yf-money-scene" role="img" aria-label="Illustration of money and coins">
      <div className="yf-money-circle" />

      <span className="yf-money-spark yf-spark-one">✳</span>
      <span className="yf-money-spark yf-spark-two">✦</span>

      <div className="yf-banknote yf-banknote-back">
        <div className="yf-banknote-inner">
          <span className="yf-currency">$</span>
          <span className="yf-money-dot dot-one" />
          <span className="yf-money-dot dot-two" />
        </div>
      </div>

      <div className="yf-banknote yf-banknote-front">
        <div className="yf-banknote-inner">
          <span className="yf-currency">$</span>
          <span className="yf-money-dot dot-three" />
          <span className="yf-money-dot dot-four" />
        </div>
      </div>

      <div className="yf-coin yf-coin-one">$</div>
      <div className="yf-coin yf-coin-two">¢</div>
    </div>
  );
}

function SDGCard({
  number,
  title,
  image,
  description,
  contribution,
  color,
}: {
  number: string;
  title: string;
  image: string;
  description: string;
  contribution: string;
  color: string;
}) {
  return (
    <article className="yf-sdg-card">
      <div className="yf-sdg-top">
        <div className="yf-sdg-number" style={{ background: color }}>
          SDG {number}
        </div>

        <span className="yf-sdg-label">OUR GLOBAL GOAL</span>
      </div>

      <div className="yf-sdg-icon-space">
        <img
          src={image}
          alt={`Sustainable Development Goal ${number} icon`}
          className="yf-sdg-icon"
        />
      </div>

      <h3 className="yf-card-title">{title}</h3>

      <p className="yf-card-description">{description}</p>

      <div className="yf-contribution">
        <span className="yf-contribution-icon">✳</span>
        <div>
          <h4>OUR CONTRIBUTION</h4>
          <p>{contribution}</p>
        </div>
      </div>
    </article>
  );
}

function MissionCard({
  icon,
  title,
  description,
  color,
}: {
  icon: string;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <article className="yf-mission-card">
      <div className="yf-mission-icon" style={{ background: color }}>
        <img src={icon} alt="" />
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default function Mission() {
  return (
    <main className="yf-purpose-page">
      <style>{`
        .yf-purpose-page {
          background: ${colors.cream};
          color: ${colors.navy};
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          overflow-x: clip;
        }

        .yf-purpose-page *,
        .yf-purpose-page *::before,
        .yf-purpose-page *::after {
          box-sizing: border-box;
        }

        /* HERO */

        .yf-hero {
          padding: clamp(45px, 7vw, 80px) 0;
        }

        .yf-hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 45px;
        }

        .yf-hero h1 {
          font-family: 'Fredoka', sans-serif;
          font-size: clamp(40px, 5.5vw, 60px);
          line-height: 1.08;
          letter-spacing: -1px;
          margin: 0 0 22px;
          font-weight: 600;
        }

        .yf-hero-description {
          max-width: 460px;
          color: ${colors.muted};
          font-size: 15px;
          line-height: 1.9;
          margin: 0 0 24px;
        }

        .yf-hero-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 17px;
          background: ${colors.lime};
          border-radius: 100px;
          font-size: 12px;
          font-weight: 800;
        }

        /* MONEY ILLUSTRATION */

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
          border: 2px solid ${colors.navy};
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 5px 6px 0 ${colors.navy};
        }

        .yf-banknote-back {
          background: ${colors.blue};
          transform: rotate(-17deg) translate(-25px, -14px);
        }

        .yf-banknote-front {
          background: ${colors.lime};
          transform: rotate(12deg) translate(23px, 20px);
        }

        .yf-banknote-inner {
          position: relative;
          width: 85%;
          height: 76%;
          border: 1.5px dashed ${colors.navy};
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
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
          background: ${colors.navy};
        }

        .dot-one { top: 8px; left: 8px; }
        .dot-two { right: 8px; bottom: 8px; }
        .dot-three { top: 8px; right: 8px; }
        .dot-four { bottom: 8px; left: 8px; }

        .yf-coin {
          position: absolute;
          width: 67px;
          height: 67px;
          border-radius: 50%;
          border: 2px solid ${colors.navy};
          background: #f1c96c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Fredoka', sans-serif;
          font-size: 29px;
          font-weight: 600;
          box-shadow: 3px 4px 0 ${colors.navy};
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
          background: ${colors.cream};
        }

        .yf-money-spark {
          position: absolute;
          font-size: 29px;
          font-weight: 700;
          color: ${colors.navy};
        }

        .yf-spark-one { top: 11%; left: 13%; }
        .yf-spark-two { right: 9%; bottom: 13%; color: #7c9634; }

        /* SECTION HEADINGS */

        .yf-section {
          padding: clamp(50px, 7vw, 80px) 0;
        }

        .yf-section-intro {
          max-width: 600px;
          margin-bottom: 32px;
        }

        .yf-section-description {
          color: ${colors.muted};
          font-size: 14px;
          line-height: 1.85;
          margin: 0;
        }

        /* SDG PURPOSE */

        .yf-sdg-section {
          background: #f4f1e5;
        }

        .yf-sdg-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          align-items: stretch;
        }

        .yf-sdg-card {
          background: ${colors.white};
          border: 1px solid #26364a12;
          border-radius: 20px;
          padding: clamp(22px, 3vw, 30px);
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .yf-sdg-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 22px;
        }

        .yf-sdg-number {
          padding: 9px 13px;
          border-radius: 9px;
          font-family: 'Fredoka', sans-serif;
          font-size: 14px;
          font-weight: 600;
        }

        .yf-sdg-label {
          color: ${colors.muted};
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .yf-sdg-icon-space {
          width: 100%;
          min-height: 145px;
          background: #f7f7f1;
          border: 1px dashed #26364a35;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          margin-bottom: 22px;
        }

        .yf-sdg-icon {
          display: block;
          width: 112px;
          height: 112px;
          object-fit: contain;
        }

        .yf-card-title {
          font-family: 'Fredoka', sans-serif;
          font-size: clamp(23px, 2.5vw, 29px);
          line-height: 1.25;
          margin: 0 0 12px;
          font-weight: 600;
        }

        .yf-card-description {
          color: ${colors.muted};
          font-size: 14px;
          line-height: 1.85;
          margin: 0 0 23px;
        }

        .yf-contribution {
          display: flex;
          gap: 12px;
          padding-top: 18px;
          border-top: 1px solid #26364a18;
          margin-top: auto;
        }

        .yf-contribution-icon {
          flex-shrink: 0;
          width: 31px;
          height: 31px;
          border-radius: 10px;
          background: ${colors.lime};
          display: grid;
          place-items: center;
          font-size: 15px;
        }

        .yf-contribution h4 {
          font-size: 10px;
          letter-spacing: 1px;
          margin: 2px 0 8px;
          font-weight: 800;
        }

        .yf-contribution p {
          color: ${colors.muted};
          font-size: 13px;
          line-height: 1.8;
          margin: 0;
        }

        /* VISION */

        .yf-vision-layout {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 45px;
          align-items: center;
        }

        .yf-vision-quote {
          background: ${colors.navy};
          color: ${colors.cream};
          padding: clamp(26px, 4vw, 40px);
          border-radius: 22px;
        }

        .yf-vision-quote-mark {
          font-size: 36px;
          color: ${colors.lime};
          margin-bottom: 15px;
        }

        .yf-vision-quote p {
          font-family: 'Fredoka', sans-serif;
          font-size: clamp(23px, 3vw, 30px);
          line-height: 1.45;
          margin: 0;
        }

        /* MISSION */

        .yf-mission-section {
          background: #eaf4f5;
        }

        .yf-mission-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .yf-mission-card {
          background: ${colors.white};
          border: 1px solid #26364a12;
          border-radius: 18px;
          padding: 25px;
          min-width: 0;
        }

        .yf-mission-icon {
          width: 66px;
          height: 66px;
          border-radius: 17px;
          display: grid;
          place-items: center;
          padding: 13px;
          margin-bottom: 21px;
        }

        .yf-mission-icon img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .yf-mission-card h3 {
          font-family: 'Fredoka', sans-serif;
          font-size: 21px;
          line-height: 1.3;
          margin: 0 0 12px;
          font-weight: 600;
        }

        .yf-mission-card p {
          color: ${colors.muted};
          font-size: 13px;
          line-height: 1.85;
          margin: 0;
        }

        /* BELIEF */

        .yf-belief {
          text-align: center;
          max-width: 760px;
        }

        .yf-belief .yf-section-description {
          max-width: 620px;
          margin: 0 auto;
        }

        .yf-belief-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: ${colors.lime};
          border-radius: 100px;
          padding: 13px 20px;
          margin-top: 25px;
          font-size: 12px;
          font-weight: 800;
        }

        @media (hover: hover) {
          .yf-sdg-card,
          .yf-mission-card {
            transition: transform 180ms ease, box-shadow 180ms ease;
          }

          .yf-sdg-card:hover,
          .yf-mission-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 28px #26364a0d;
          }
        }

        @media (max-width: 760px) {
          .yf-hero-layout,
          .yf-vision-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 25px;
          }

          .yf-sdg-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .yf-mission-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .yf-hero h1 {
            font-size: clamp(39px, 9vw, 52px);
          }

          .yf-money-scene {
            height: 280px;
            max-width: 360px;
          }

          .yf-sdg-icon-space {
            min-height: 125px;
          }

          .yf-sdg-icon {
            width: 95px;
            height: 95px;
          }
        }

        @media (max-width: 380px) {
          .yf-banknote {
            width: 155px;
            height: 94px;
          }

          .yf-currency {
            font-size: 43px;
          }

          .yf-money-scene {
            height: 240px;
          }

          .yf-coin {
            width: 53px;
            height: 53px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .yf-sdg-card,
          .yf-mission-card {
            transition: none;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="yf-hero">
        <div className="yf-hero-layout" style={container}>
          <div>
            <p style={eyebrow}>YOUTHFUNDED · OUR PURPOSE</p>

            <h1>
              What We
              <br />
              Stand For<span style={{ color: "#8ca33a" }}>.</span>
            </h1>

            <p className="yf-hero-description">
              We believe financial literacy gives young people
              the knowledge to make informed decisions, explore
              opportunities, and build a better future.
            </p>

            <div className="yf-hero-pill">
              Financial literacy for every young mind <span>↗</span>
            </div>
          </div>

          <MoneyIllustration />
        </div>
      </section>

      {/* PURPOSE: SDG 4 AND SDG 8 */}

      <section className="yf-section yf-sdg-section">
        <div style={container}>
          <div className="yf-section-intro">
            <p style={eyebrow}>OUR PURPOSE IN ACTION</p>

            <h2 style={heading}>
              Knowledge today. Opportunities tomorrow.
            </h2>

            <p className="yf-section-description">
              Our purpose connects with two United Nations
              Sustainable Development Goals.
            </p>
          </div>

          <div className="yf-sdg-grid">
            <SDGCard
              number="04"
              title="Quality Education"
              image="/images/sdg4.png"
              color={colors.blue}
              description="Everyone deserves access to quality learning. Financial literacy helps young people understand budgeting, saving, spending, and making informed financial decisions."
              contribution="We promote accessible financial education through engaging resources and youth-focused learning initiatives."
            />

            <SDGCard
              number="08"
              title="Decent Work & Economic Growth"
              image="/images/sdg8.png"
              color={colors.lime}
              description="Young people need the knowledge and confidence to prepare for work, entrepreneurship, and economic opportunities."
              contribution="We encourage financial responsibility, entrepreneurial thinking, and preparation for future economic independence."
            />
          </div>
        </div>
      </section>

      {/* VISION */}

      <section className="yf-section">
        <div className="yf-vision-layout" style={container}>
          <div>
            <p style={eyebrow}>OUR VISION</p>

            <h2 style={heading}>
              A financially confident generation.
            </h2>

            <p className="yf-section-description">
              We envision a future where every young person can
              understand money, make responsible choices, and pursue
              opportunities with confidence.
            </p>
          </div>

          <div className="yf-vision-quote">
            <div className="yf-vision-quote-mark">✳</div>

            <p>
              “Financial confidence begins with knowledge and grows
              through action.”
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}

      <section className="yf-section yf-mission-section">
        <div style={container}>
          <div className="yf-section-intro">
            <p style={eyebrow}>OUR MISSION</p>

            <h2 style={heading}>
              Small steps, meaningful impact.
            </h2>

            <p className="yf-section-description">
              We make financial literacy accessible, practical,
              and relevant to young people.
            </p>
          </div>

          <div className="yf-mission-grid">
            <MissionCard
              icon="/images/mission-learning.png"
              title="Accessible Learning"
              description="Make financial knowledge easier to understand and apply."
              color={colors.blue}
            />

            <MissionCard
              icon="/images/mission-youth.png"
              title="Youth Empowerment"
              description="Encourage young people to lead initiatives and share ideas."
              color={colors.lime}
            />

            <MissionCard
              icon="/images/mission-growth.png"
              title="Practical Growth"
              description="Build responsible financial habits for everyday life and the future."
              color="#f1c96c"
            />
          </div>
        </div>
      </section>

      {/* OUR BELIEF */}

      <section className="yf-section">
        <div className="yf-belief" style={container}>
          <p style={eyebrow}>OUR BELIEF</p>

          <h2 style={heading}>
            Every young person deserves the chance to learn, choose,
            and grow.
          </h2>

          <p className="yf-section-description">
            Because when knowledge becomes accessible, possibilities
            become greater.
          </p>

          <div className="yf-belief-pill">
            Small Steps, Big Impact <span>✳</span>
          </div>
        </div>
      </section>
    </main>
  );
}
