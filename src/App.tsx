
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
              Money skills
              <br />
              for <span>real life.</span>
            </h2>

            <p>
              Because understanding money shouldn’t be confusing,
              intimidating, or out of reach.
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
            YouthFunded is a youth-driven, non-profit organization
            creating an educational space where young people can
            explore financial literacy together.
          </p>

          <p>
            Rooted in the everyday experiences of Indonesian youth,
            we turn complicated money concepts into relatable
            knowledge, practical lessons, and meaningful conversations.
          </p>

          <p>
            We believe every young person deserves the tools and
            confidence to make informed financial choices and work
            toward a more independent future.
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
          <SectionLabel>{number} — {label}</SectionLabel>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </section>
    </main>
  );
}

function App() {
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
      <header className="site-header">
        <a className="brand" href="/" aria-label="YouthFunded home">
          <img
            className="brand-logo"
            src="/youthfunded-logo.png"
          />
        </a>

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
        <a className="footer-brand" href="/">
          <img src="/youthfunded-logo.png" />
        </a>

        <p>Small steps, big impact. Made for the next generation.</p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} YouthFunded</span>
          <a href="/">Back to Home ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
        
