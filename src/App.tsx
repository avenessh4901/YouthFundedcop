
import "./index.css";

const missions = [
  {
    number: "01",
    title: "Make Money Make Sense",
    description:
      "Make financial literacy accessible by breaking down complex topics into engaging and practical lessons.",
    icon: "📚",
    color: "mint",
  },
  {
    number: "02",
    title: "Build Responsible Habits",
    description:
      "Promote a culture of responsible money management in everyday youth life.",
    icon: "🐷",
    color: "pink",
  },
  {
    number: "03",
    title: "Create Equal Opportunities",
    description:
      "Bring financial literacy and learning opportunities to underserved communities.",
    icon: "🌱",
    color: "yellow",
  },
  {
    number: "04",
    title: "Grow Together",
    description:
      "Foster youth-led collaborations that empower young people to learn and create impact.",
    icon: "🤝",
    color: "blue",
  },
];

const topics = [
  {
    title: "Understanding Supply Chains",
    description: "Discover how products travel and why grocery prices change.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
    category: "EVERYDAY ECONOMICS",
    color: "mint",
  },
  {
    title: "Where Does Your Money Really Go?",
    description: "Understand spending habits and make more informed decisions.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=900&q=85",
    category: "MONEY BASICS",
    color: "pink",
  },
  {
    title: "Needs vs. Wants",
    description: "Learn how to prioritize needs while making room for things you enjoy.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=85",
    category: "SMART CHOICES",
    color: "yellow",
  },
];

const events = [
  {
    date: "01",
    month: "STAY TUNED",
    title: "YouthFunded Community Activities",
    description:
      "Follow our social media to discover upcoming learning sessions and community activities.",
    type: "COMMUNITY",
  },
  {
    date: "02",
    month: "COMING SOON",
    title: "Financial Literacy Learning Sessions",
    description:
      "Practical learning opportunities to help young people understand money management.",
    type: "LEARNING",
  },
];

const mediaLinks = [
  {
    name: "Instagram",
    handle: "@youthfunded",
    href: "https://www.instagram.com/youthfunded/",
    icon: "◎",
  },
  {
    name: "LinkedIn",
    handle: "Find our organization",
    href: "https://www.linkedin.com/",
    icon: "in",
  },
  {
    name: "Email",
    handle: "Get in touch with us",
    href: "mailto:",
    icon: "✉",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>;
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="YouthFunded home">
          <img
            className="brand-logo"
            src="/youthfunded-logo.png"
            alt="YouthFunded"
          />
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#mission">Our Mission</a>
          <a href="#articles">Articles</a>
          <a href="#events">Events</a>
          <a href="#team">Our Team</a>
        </nav>

        <a className="nav-cta" href="#media">
          Let’s Connect <span>↗</span>
        </a>
      </header>

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
              Making financial knowledge easier to understand, one young mind
              at a time. Let’s build a generation that feels confident about
              money.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#about">
                Discover YouthFunded <span>↗</span>
              </a>
              <a className="text-link" href="#articles">
                Explore our articles →
              </a>
            </div>

            <div className="hero-note">
              <span>✳</span> Learn today. Make better choices tomorrow.
            </div>
          </div>

          <div className="hero-art" aria-label="Financial literacy illustration">
            <div className="art-sun" />
            <div className="art-label label-top">YOUR MONEY, YOUR FUTURE</div>

            <div className="art-book">
              <span className="book-small">THE LITTLE GUIDE TO</span>
              <strong>SMART<br />MONEY</strong>
              <span className="book-doodle">✳ $ ✳</span>
            </div>

            <div className="art-coin coin-a">$</div>
            <div className="art-coin coin-b">$</div>
            <div className="art-coin coin-c">¢</div>

            <div className="piggy">
              <div className="pig-ear" />
              <div className="pig-eye" />
              <div className="pig-snout"><i /><i /></div>
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
                FINANCIAL LITERACY <b>✳</b> YOUTH EMPOWERMENT <b>✳</b> SMART
                MONEY HABITS <b>✳</b> LEARN · GROW · SHARE <b>✳</b>
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
                Because understanding money shouldn’t be confusing, intimidating,
                or out of reach.
              </p>
              <div className="note-stamp">LEARN<br />TOGETHER!</div>
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
              YouthFunded is a youth-driven, non-profit organization creating
              an educational space where young people can explore financial
              literacy together.
            </p>
            <p>
              Rooted in the everyday experiences of Indonesian youth, we turn
              complicated money concepts into relatable knowledge, practical
              lessons, and meaningful conversations.
            </p>
            <p>
              We believe every young person deserves the tools and confidence
              to make informed financial choices and work toward a more
              independent future.
            </p>
            <a className="text-link" href="#mission">
              Get to know our purpose <span>→</span>
            </a>
          </div>
        </section>

        <section className="vision-section section-pad" id="mission">
          <div className="section-heading centered">
            <SectionLabel>02 — OUR NORTH STAR</SectionLabel>
            <h2>
              The future we’re
              <br />
              <span>working toward.</span>
            </h2>
            <p>
              A shared vision, powered by small steps and collective action.
            </p>
          </div>

          <article className="vision-card">
            <div className="vision-icon">🔭</div>
            <div>
              <span className="card-kicker">OUR VISION</span>
              <h3>A financially aware generation.</h3>
              <p>
                To create a young generation of Indonesians aware of the
                importance of financial skills and willing to make responsible
                financial choices, become financially independent, and
                contribute to society.
              </p>
            </div>
            <span className="vision-star">✳</span>
          </article>

          <div className="mission-heading">
            <div>
              <SectionLabel>THE WAY WE GET THERE</SectionLabel>
              <h3>Our mission, in action.</h3>
            </div>
            <span className="hand-note">Little by little! ↗</span>
          </div>

          <div className="mission-grid">
            {missions.map((mission) => (
              <article
                className={`mission-card ${mission.color}`}
                key={mission.number}
              >
                <div className="mission-top">
                  <span className="mission-number">{mission.number}</span>
                  <span className="mission-icon">{mission.icon}</span>
                </div>
                <h4>{mission.title}</h4>
                <p>{mission.description}</p>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="articles-section section-pad" id="articles">
          <div className="section-heading">
            <div>
              <SectionLabel>03 — THE MONEY NOTEBOOK</SectionLabel>
              <h2>
                Curious minds,
                <br />
                <span>better money habits.</span>
              </h2>
            </div>
            <p className="heading-aside">
              Bite-sized knowledge for the questions we all have about money.
            </p>
          </div>

          <div className="article-grid">
            {topics.map((topic, index) => (
              <article className={`article-card ${topic.color}`} key={topic.title}>
                <a
                  className="article-image"
                  href="#media"
                  aria-label={`Explore ${topic.title}`}
                >
                  <img src={topic.image} alt="" loading="lazy" />
                  <span className="image-number">0{index + 1}</span>
                  <span className="image-arrow">↗</span>
                </a>
                <div className="article-content">
                  <span className="card-kicker">{topic.category}</span>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                  <a className="text-link" href="#media">
                    Read more <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="editorial-note">
            ✳ Article previews are examples. Replace them with your authors’
            published articles and their actual links.
          </p>
        </section>

        <section className="events-section section-pad" id="events">
          <div className="section-heading">
            <div>
              <SectionLabel>04 — SAVE THE DATE</SectionLabel>
              <h2>
                Learn together.
                <br />
                <span>Grow together.</span>
              </h2>
            </div>
            <p className="heading-aside">
              Spaces to exchange ideas, learn practical skills, and meet
              people who care about financial literacy.
            </p>
          </div>

          <div className="events-list">
            {events.map((event) => (
              <article className="event-row" key={event.title}>
                <div className="event-date">
                  <strong>{event.date}</strong>
                  <span>{event.month}</span>
                </div>
                <div className="event-detail">
                  <span className="card-kicker">{event.type}</span>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
                <span className="event-arrow">↗</span>
              </article>
            ))}
          </div>
          <p className="editorial-note">
            Event dates will be announced through our official media.
          </p>
        </section>

        <section className="documentation-section section-pad" id="documentation">
          <div className="section-heading centered">
            <SectionLabel>05 — LITTLE MOMENTS, REAL IMPACT</SectionLabel>
            <h2>
              A peek into
              <br />
              <span>our journey.</span>
            </h2>
            <p>
              Every conversation and learning experience is a chance to grow.
            </p>
          </div>

          <div className="documentation-grid">
            <figure className="doc-card doc-large">
              <img
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=85"
                alt="Students learning together"
                loading="lazy"
              />
              <figcaption>
                <span>01 / LEARNING</span>
                <strong>Curiosity brings us together.</strong>
              </figcaption>
            </figure>
            <figure className="doc-card doc-small doc-pink">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85"
                alt="Collaborative digital learning"
                loading="lazy"
              />
              <figcaption>
                <span>02 / COLLABORATION</span>
                <strong>Ideas become impact.</strong>
              </figcaption>
            </figure>
            <figure className="doc-card doc-small doc-yellow">
              <img
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=900&q=85"
                alt="Young people in a group"
                loading="lazy"
              />
              <figcaption>
                <span>03 / COMMUNITY</span>
                <strong>Better, together.</strong>
              </figcaption>
            </figure>
          </div>
          <p className="editorial-note">
            These are temporary stock photos, not official YouthFunded event
            documentation. Replace them with your real activity photos.
          </p>
        </section>

        <section className="team-section section-pad" id="team">
          <div className="team-note">
            <span className="team-sparkle">✳</span>
            <SectionLabel>06 — THE PEOPLE BEHIND THE PURPOSE</SectionLabel>
            <h2>
              Good things
              <br />
              happen <span>together.</span>
            </h2>
            <p>
              YouthFunded is shaped by young people who believe that learning
              about money should be accessible, relatable, and shared.
            </p>
            <a className="button button-dark" href="#media">
              Meet us online <span>↗</span>
            </a>
          </div>
          <div className="team-board">
            <div className="team-paper">
              <span className="team-paper-label">A NOTE TO OUR COMMUNITY</span>
              <div className="team-illustration">🫶</div>
              <h3>Young voices.<br />Shared purpose.</h3>
              <p>
                Behind every idea is a team learning, creating, and growing
                together.
              </p>
              <span className="team-paper-footer">WITH CARE, YOUTHFUNDED ✳</span>
            </div>
          </div>
          <p className="editorial-note team-disclaimer">
            Add the team members’ names, roles, photos, and short biographies
            here when the official team list is ready.
          </p>
        </section>

        <section className="media-section section-pad" id="media">
          <div className="media-intro">
            <SectionLabel>07 — KEEP IN TOUCH</SectionLabel>
            <h2>
              Let’s make money
              <br />
              <span>make sense.</span>
            </h2>
            <p>
              Follow our journey, explore new ideas, and be part of a generation
              that learns to make more informed financial decisions.
            </p>
          </div>

          <div className="media-links">
            {mediaLinks.map((link) => (
              <a
                className="media-link"
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                key={link.name}
              >
                <span className="media-icon">{link.icon}</span>
                <span className="media-text">
                  <strong>{link.name}</strong>
                  <small>{link.handle}</small>
                </span>
                <span className="media-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          <img src="/youthfunded-logo.png" alt="YouthFunded" />
        </a>
        <p>Small steps, big impact. Made for the next generation.</p>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} YouthFunded</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default App;
              
