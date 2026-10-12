
export default function App() {
  return (
    <main>
      <nav>
        <a className="logo" href="#">YouthFunded</a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#vision">Vision & Mission</a>
          <a href="#articles">Articles</a>
          <a href="#events">Events</a>
          <a href="#team">Meet Our Team</a>
          <a href="#media">Our Media</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <p className="eyebrow">A YOUTH-LED FINANCIAL LITERACY INITIATIVE</p>
        <h1>Small Steps,<br />Big Impact.</h1>
        <p>
          Empowering young people through financial literacy
          for a brighter, more financially confident future.
        </p>
        <a className="cta" href="#vision">Discover Our Mission ↗</a>
        <div className="hero-art" aria-hidden="true">🐷 💰 📚 ✨</div>
      </section>

      <section id="about">
        <p className="eyebrow">GET TO KNOW US</p>
        <h2>What is YouthFunded?</h2>
        <p>
          YouthFunded is a youth-led initiative that makes financial
          literacy more accessible, engaging, and relevant to young people.
        </p>
      </section>

      <section id="vision">
        <p className="eyebrow">OUR PURPOSE</p>
        <h2>Vision & Mission</h2>
        <div className="cards">
          <article className="card">
            <h3>Our Vision ✦</h3>
            <p>
              To create a young generation of Indonesia aware of the
              importance of financial skills, responsible financial
              choices, and financial independence.
            </p>
          </article>
          <article className="card">
            <h3>Our Mission ✦</h3>
            <ul>
              <li>Make financial literacy accessible through engaging, practical lessons.</li>
              <li>Promote responsible money management.</li>
              <li>Bring financial literacy to underserved communities.</li>
              <li>Foster youth-led collaborations.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="articles">
        <h2>Stories & Articles</h2>
        <p>Ideas and insights written by our authors, coming soon.</p>
      </section>

      <section id="events">
        <h2>Our Events</h2>
        <p>Discover our activities and community documentation.</p>
      </section>

      <section id="team">
        <h2>Meet Our Team</h2>
        <p>The young people behind YouthFunded.</p>
      </section>

      <section id="media">
        <h2>Our Media</h2>
        <p>Follow our journey and connect with us online.</p>
        <a className="cta" href="https://www.instagram.com/youthfunded/" target="_blank" rel="noreferrer">
          Visit Our Instagram ↗
        </a>
      </section>

      <footer>
        <p>YouthFunded · Small Steps, Big Impact.</p>
      </footer>
    </main>
  );
}
