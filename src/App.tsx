import { useState, useRef, useEffect } from "react";
import "./index.css";
import Mission from "./pages/Mission";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <span className="decor decor-star">✳</span>
        <span className="decor decor-sparkle">✦</span>
        <span className="decor decor-coin coin-one">$</span>
        <span className="decor decor-coin coin-two">¢</span>

        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            YOUTH-LED · FINANCIAL LITERACY
          </div>

          <h1>
            Small Steps,
            <br />
            <span>Big Impact.</span>
          </h1>

          <p className="hero-description">
            Making financial knowledge easier to understand,
            one young mind at a time. Let’s build a generation
            that feels confident about money.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#about">
              Discover YouthFunded <span>↗</span>
            </a>
            <a className="text-link" href="/mission">
              Explore our purpose →
            </a>
          </div>

          <div className="hero-note">
            <span>✳</span> Learn today. Make better choices tomorrow.
          </div>
        </div>

        <div
          className="hero-art"
          aria-label="Financial literacy illustration"
        >
          <div className="art-sun" />

          <div className="art-label label-top">
            YOUR MONEY, YOUR FUTURE
          </div>

          <div className="art-book">
            <span className="book-small">THE LITTLE GUIDE TO</span>
            <strong>
              SMART
              <br />
              MONEY
            </strong>
            <span className="book-doodle">✳ $ ✳</span>
          </div>

          <div className="art-coin coin-a">$</div>
          <div className="art-coin coin-b">$</div>
          <div className="art-coin coin-c">¢</div>

          <div className="piggy">
            <div className="pig-ear" />
            <div className="pig-eye" />
            <div className="pig-snout">
              <i />
              <i />
            </div>
            <div className="pig-leg leg-left" />
            <div className="pig-leg leg-right" />
            <div className="pig-tail">〰</div>
          </div>

          <div className="art-caption">
            <span>01 / YOUR FINANCIAL JOURNEY</span>
            <span>Start where you are ✦</span>
          </div>
        </div>

        <a className="scroll-cue" href="#about">
          SCROLL TO EXPLORE <span>↓</span>
        </a>
      </section>

      <div className="ticker" aria-label="Our values">
        <div className="ticker-track">
          {Array.from({ length: 2 }, (_, index) => (
            <span key={index}>
              FINANCIAL LITERACY <b>✳</b> YOUTH EMPOWERMENT <b>✳</b>{" "}
              SMART MONEY HABITS <b>✳</b> LEARN · GROW · SHARE <b>✳</b>
            </span>
          ))}
        </div>
      </div>

      <section className="about-section section-pad" id="about">
        <div className="about-visual">
          <div className="paper-note">
            <span className="tape tape-one" />
            <SectionLabel>A LITTLE INTRODUCTION</SectionLabel>

            <h2>
              Discover
              <br />
              <span>YouthFunded</span>
            </h2>

            <p>
              YouthFunded is a youth-driven, non-profit organization
              creating an educational space where young people can
              explore financial literacy together.
            </p>

            <div className="note-stamp">
              LEARN
              <br />
              TOGETHER!
            </div>

            <span className="note-doodle">↗ $ ✳</span>
          </div>

          <span className="floating-star">✳</span>
          <span className="floating-heart">♡</span>
        </div>

        <div className="about-copy">
          <SectionLabel>01 — WHO WE ARE</SectionLabel>

          <h2>
            Meet <span>YouthFunded.</span>
          </h2>

          <p>
            YouthFunded is dedicated to rethinking financial
            education for Indonesia&apos;s youth. We go beyond
            basic calculations to deliver lessons that are
            relatable, creative, and truly useful in daily life.
          </p>

          <p>
            <span>Our vision</span> is to create a young generation
            of Indonesia that understands the importance of financial
            skills, is willing to make responsible financial choices,
            becomes financially independent, and actively contributes
            to society.
          </p>

          <p>
            <span>Our mission</span> is to make financial knowledge
            accessible to all, encourage healthy money habits,
            reach communities with fewer opportunities, and support
            young people working together to build a better future.
          </p>

          <a className="text-link" href="/mission">
            Get to know our purpose <span>→</span>
          </a>
        </div>
      </section>
    </main>
  );
}

function PlaceholderPage({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description: string;
}) {
  return (
    <main className="section-pad">
      <section className="section-heading">
        <div>
          <SectionLabel>
            {number} — {label}
          </SectionLabel>

          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </section>
    </main>
  );
}

function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      href="/"
      aria-label="YouthFunded home"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: footer ? "0 0 160px" : "0 0 150px",
        width: footer ? "160px" : "150px",
        minWidth: footer ? "160px" : "150px",
        height: "65px",
        position: "relative",
        zIndex: 999,
        overflow: "visible",
        textDecoration: "none",
      }}
    >
      <img
        src="/images/youthfunded-logo.png"
        alt="YouthFunded Logo"
        style={{
          display: "block",
          width: footer ? "160px" : "150px",
          height: "65px",
          maxWidth: "none",
          objectFit: "contain",
          objectPosition: "left center",
          opacity: 1,
          visibility: "visible",
          flexShrink: 0,
        }}
      />
    </a>
  );
}

/* INTRO VIDEO */

function IntroVideo({ onFinish }: { onFinish: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;

    video.play().catch((error) => {
      console.error("Intro video gagal autoplay:", error);
    });
  }, []);

  return (
    <div className="intro-screen">
      <video
        ref={videoRef}
        className="intro-video"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onFinish}
      >
        <source
          src="/intro-youthfunded.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
function App() {
  const [showIntro, setShowIntro] = useState(() => {
    return sessionStorage.getItem("youthfunded-intro-played") !== "true";
  });

  const finishIntro = () => {
    sessionStorage.setItem("youthfunded-intro-played", "true");
    setShowIntro(false);
  };

  const path = window.location.pathname.replace(/\/+$/, "") || "/";

  let page;

  switch (path) {
    case "/":
      page = <Home />;
      break;

    case "/mission":
      page = <Mission />;
      break;

    case "/articles":
      page = (
        <PlaceholderPage
          number="02"
          label="THE MONEY NOTEBOOK"
          title="Articles & Insights"
          description="Explore accessible financial literacy resources and ideas for young people. Article content will be added here."
        />
      );
      break;

    case "/events":
      page = (
        <PlaceholderPage
          number="03"
          label="SAVE THE DATE"
          title="Events & Activities"
          description="Discover upcoming learning sessions, community activities, and opportunities to grow together."
        />
      );
      break;

    case "/team":
      page = (
        <PlaceholderPage
          number="04"
          label="THE PEOPLE BEHIND THE PURPOSE"
          title="Meet Our Team"
          description="Meet the young people behind YouthFunded. Team profiles and introductions will be added here."
        />
      );
      break;

    case "/media":
      page = (
        <PlaceholderPage
          number="05"
          label="KEEP IN TOUCH"
          title="Our Media"
          description="Follow our journey, explore our activities, and connect with the YouthFunded community."
        />
      );
      break;

    default:
      page = (
        <PlaceholderPage
          number="404"
          label="PAGE NOT FOUND"
          title="Looks like you took a little detour."
          description="The page you are looking for may not exist yet."
        />
      );
  }

  return (
    <>
      {showIntro ? (
        <IntroVideo onFinish={finishIntro} />
      ) : (
        <>
          <header className="site-header">
            <BrandLogo />

            <nav className="nav-links" aria-label="Main navigation">
              <a href="/">Home</a>
              <a href="/mission">Our Purpose</a>
              <a href="/articles">Articles</a>
              <a href="/events">Events</a>
              <a href="/team">Our Team</a>
            </nav>

            <a className="nav-cta" href="/media">
              Let’s Connect <span>↗</span>
            </a>
          </header>

          {page}

          <footer className="site-footer">
            <BrandLogo footer />

            <p>
              Small steps, big impact. Made for the next generation.
            </p>

            <div className="footer-bottom">
              <span>© {new Date().getFullYear()} YouthFunded</span>
              <a href="/">Back to Home ↑</a>
            </div>
          </footer>
        </>
      )}
    </>
  );
}
