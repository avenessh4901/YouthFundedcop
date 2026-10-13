import React from "react";

const navy = "#26364a";
const cream = "#fffaf0";
const lime = "#C6D95B";
const blue = "#B8E3F5";
const muted = "#667487";

const container: React.CSSProperties = {
width: "min(1100px, 88%)",
margin: "0 auto",
};

const label: React.CSSProperties = {
fontSize: 11,
fontWeight: 800,
letterSpacing: "2px",
marginBottom: 14,
};

const heading: React.CSSProperties = {
fontFamily: "'Fredoka', sans-serif",
fontSize: "clamp(28px, 4vw, 40px)",
lineHeight: 1.2,
margin: "0 0 16px",
fontWeight: 600,
};

const paragraph: React.CSSProperties = {
color: muted,
fontSize: 15,
lineHeight: 1.8,
margin: 0,
};

function MoneyIllustration() {
return (
<div className="yf-money">
<style>{`
.yf-money {
height: 290px;
width: 100%;
max-width: 390px;
margin: auto;
position: relative;
display: grid;
place-items: center;
}

    .yf-money-circle {
      position: absolute;
      width: 250px;
      height: 250px;
      border-radius: 50%;
      background: #e6edbd;
    }

    .yf-note {
      width: 190px;
      height: 112px;
      position: absolute;
      border: 2px solid #26364a;
      border-radius: 12px;
      display: grid;
      place-items: center;
      box-shadow: 4px 5px 0 #26364a;
    }

    .yf-note-inner {
      width: 84%;
      height: 76%;
      border: 1.5px dashed #26364a;
      border-radius: 8px;
      display: grid;
      place-items: center;
      font-family: 'Fredoka', sans-serif;
      font-size: 48px;
    }

    .yf-note-back {
      background: #b8e3f5;
      transform: rotate(-15deg) translate(-17px, -10px);
    }

    .yf-note-front {
      background: #c6d95b;
      transform: rotate(11deg) translate(18px, 16px);
    }

    .yf-coin {
      position: absolute;
      width: 59px;
      height: 59px;
      border: 2px solid #26364a;
      border-radius: 50%;
      background: #f1c96c;
      box-shadow: 3px 4px 0 #26364a;
      display: grid;
      place-items: center;
      font-family: 'Fredoka', sans-serif;
      font-size: 25px;
      font-weight: 600;
    }

    .yf-coin-one {
      right: 2%;
      top: 12%;
    }

    .yf-coin-two {
      left: 3%;
      bottom: 10%;
      width: 46px;
      height: 46px;
      font-size: 20px;
      background: #fffaf0;
    }

    .yf-spark {
      position: absolute;
      font-size: 27px;
      font-weight: 700;
    }

    .yf-spark-one {
      top: 10%;
      left: 10%;
    }

    .yf-spark-two {
      bottom: 9%;
      right: 8%;
      color: #7c9634;
    }

    .yf-purpose-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
    }

    .yf-mission-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    @media (max-width: 700px) {
      .yf-money {
        height: 255px;
        max-width: 340px;
      }

      .yf-money-circle {
        width: 215px;
        height: 215px;
      }

      .yf-note {
        width: 165px;
        height: 98px;
      }

      .yf-note-inner {
        font-size: 42px;
      }

      .yf-purpose-grid,
      .yf-mission-grid {
        grid-template-columns: 1fr;
      }
    }
  `}</style>

  <div className="yf-money-circle" />
  <span className="yf-spark yf-spark-one">✳</span>
  <span className="yf-spark yf-spark-two">✦</span>

  <div className="yf-note yf-note-back">
    <div className="yf-note-inner">$</div>
  </div>

  <div className="yf-note yf-note-front">
    <div className="yf-note-inner">$</div>
  </div>

  <div className="yf-coin yf-coin-one">$</div>
  <div className="yf-coin yf-coin-two">¢</div>
</div>

);
}

function PurposeCard({
number,
title,
color,
description,
points,
}: {
number: string;
title: string;
color: string;
description: string;
points: string[];
}) {
return (
<article
style={{
background: "#fff",
borderRadius: 18,
padding: "clamp(22px, 3vw, 30px)",
border: "1px solid #26364a15",
}}
>
<div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
<div
style={{
background: color,
borderRadius: 13,
width: 58,
height: 58,
flexShrink: 0,
display: "grid",
placeItems: "center",
fontFamily: "'Fredoka', sans-serif",
fontSize: 27,
fontWeight: 600,
}}
>
{number}
</div>

    <h3
      style={{
        fontFamily: "'Fredoka', sans-serif",
        fontSize: 23,
        lineHeight: 1.25,
        margin: 0,
      }}
    >
      {title}
    </h3>
  </div>

  <p style={{ ...paragraph, marginBottom: 20 }}>{description}</p>

  <div style={{ borderTop: "1px solid #26364a18", paddingTop: 17 }}>
    {points.map((point) => (
      <div
        key={point}
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 11,
          fontSize: 14,
          lineHeight: 1.65,
        }}
      >
        <span style={{ color: "#7c9634", fontWeight: 900 }}>✓</span>
        <span>{point}</span>
      </div>
    ))}
  </div>
</article>

);
}

export default function Mission() {
const missions = [
{
icon: "📚",
title: "Accessible Learning",
text: "Make financial literacy easier to learn and understand.",
color: blue,
},
{
icon: "💡",
title: "Youth Empowerment",
text: "Encourage young people to share ideas and take initiative.",
color: lime,
},
{
icon: "🌱",
title: "Practical Impact",
text: "Promote responsible financial habits for the future.",
color: "#F1C96C",
},
];

return (
<main
style={{
background: cream,
color: navy,
minHeight: "100vh",
fontFamily: "'DM Sans', sans-serif",
overflow: "hidden",
}}
>
{/* HERO */}
<section style={{ padding: "clamp(45px, 7vw, 80px) 0" }}>
<div
style={{
...container,
display: "grid",
gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
alignItems: "center",
gap: 30,
}}
>
<div>
<p style={label}>YOUTHFUNDED · OUR PURPOSE</p>

        <h1
          style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: "clamp(38px, 5vw, 56px)",
            lineHeight: 1.1,
            margin: "0 0 20px",
            fontWeight: 600,
          }}
        >
          What We
          <br />
          Stand For<span style={{ color: "#8ca33a" }}>.</span>
        </h1>

        <p style={{ ...paragraph, maxWidth: 440, marginBottom: 23 }}>
          We believe every young person deserves the knowledge and
          confidence to make informed financial decisions and build a
          brighter future.
        </p>

        <span
          style={{
            display: "inline-block",
            background: lime,
            borderRadius: 30,
            padding: "11px 16px",
            fontSize: 13,
            fontWeight: 800,
          }}
        >
          Financial literacy for every young mind ↗
        </span>
      </div>

      <MoneyIllustration />
    </div>
  </section>

  {/* OUR PURPOSE */}
  <section style={{ background: "#f4f1e5", padding: "65px 0" }}>
    <div style={container}>
      <p style={label}>OUR PURPOSE</p>

      <h2 style={heading}>Knowledge creates opportunities.</h2>

      <p style={{ ...paragraph, maxWidth: 650, marginBottom: 30 }}>
        Our purpose connects with two United Nations Sustainable
        Development Goals: quality education and decent work with
        sustainable economic growth.
      </p>

      <div className="yf-purpose-grid">
        <PurposeCard
          number="04"
          title="Quality Education"
          color={blue}
          description="Education should provide practical knowledge for everyday life. Financial literacy helps young people understand money, build good habits, and make informed decisions."
          points={[
            "Accessible financial education for young people.",
            "Learning about budgeting, saving, and spending.",
            "Encouraging lifelong learning and critical thinking.",
          ]}
        />

        <PurposeCard
          number="08"
          title="Decent Work & Economic Growth"
          color={lime}
          description="Financial awareness can help young people prepare for future opportunities, develop an entrepreneurial mindset, and work toward greater financial independence."
          points={[
            "Building responsible financial habits.",
            "Encouraging entrepreneurship and initiative.",
            "Preparing for future work and economic opportunities.",
          ]}
        />
      </div>

      <div
        style={{
          marginTop: 22,
          padding: "19px 22px",
          borderRadius: 15,
          background: navy,
          color: cream,
          display: "flex",
          gap: 13,
          alignItems: "flex-start",
        }}
      >
        <span style={{ fontSize: 23, color: lime }}>✳</span>
        <p style={{ fontSize: 14, lineHeight: 1.8, margin: 0 }}>
          <strong>One shared purpose:</strong> equip young people with
          knowledge and help them turn it into meaningful opportunities.
        </p>
      </div>
    </div>
  </section>

  {/* OUR VISION */}
  <section style={{ padding: "70px 0" }}>
    <div
      style={{
        ...container,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
        gap: 35,
        alignItems: "center",
      }}
    >
      <div>
        <p style={label}>OUR VISION</p>
        <h2 style={heading}>
          A financially confident generation.
        </h2>
        <p style={paragraph}>
          We envision a future where young people understand their
          financial choices, recognize opportunities, and feel confident
          planning for their goals.
        </p>
      </div>

      <div
        style={{
          background: navy,
          color: cream,
          padding: "clamp(25px, 4vw, 38px)",
          borderRadius: 20,
        }}
      >
        <div style={{ fontSize: 34, color: lime, marginBottom: 16 }}>
          ✳
        </div>

        <p
          style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: "clamp(23px, 3vw, 30px)",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          “Financial confidence begins with knowledge.”
        </p>
      </div>
    </div>
  </section>

  {/* OUR MISSION */}
  <section style={{ background: "#eaf4f5", padding: "65px 0" }}>
    <div style={container}>
      <p style={label}>OUR MISSION</p>
      <h2 style={heading}>Small steps, meaningful impact.</h2>
      <p style={{ ...paragraph, maxWidth: 600, marginBottom: 30 }}>
        We make financial literacy more accessible through education,
        youth-led initiatives, and practical learning.
      </p>

      <div className="yf-mission-grid">
        {missions.map((mission) => (
          <article
            key={mission.title}
            style={{
              background: "#fff",
              border: "1px solid #26364a15",
              borderRadius: 18,
              padding: 25,
            }}
          >
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 15,
                background: mission.color,
                display: "grid",
                placeItems: "center",
                fontSize: 26,
                marginBottom: 19,
              }}
            >
              {mission.icon}
            </div>

            <h3
              style={{
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 22,
                margin: "0 0 10px",
              }}
            >
              {mission.title}
            </h3>

            <p style={{ ...paragraph, fontSize: 14 }}>
              {mission.text}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* OUR BELIEF */}
  <section style={{ padding: "65px 0 75px", textAlign: "center" }}>
    <div style={{ ...container, maxWidth: 720 }}>
      <p style={label}>OUR BELIEF</p>

      <h2 style={heading}>
        Every young person deserves the chance to grow.
      </h2>

      <p style={paragraph}>
        We believe small steps in financial education can open doors to
        better choices, stronger confidence, and new possibilities.
      </p>

      <div
        style={{
          display: "inline-block",
          marginTop: 25,
          padding: "12px 19px",
          background: lime,
          borderRadius: 30,
          fontSize: 13,
          fontWeight: 800,
        }}
      >
        Small Steps, Big Impact ✳
      </div>
    </div>
  </section>
</main>

);
}
