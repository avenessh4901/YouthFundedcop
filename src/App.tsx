return (
    <>
      <header
        className="site-header"
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* LOGO NAVBAR */}
        <a
          href="/"
          aria-label="YouthFunded home"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            flex: "0 0 150px",
            width: "150px",
            height: "65px",
            position: "relative",
            zIndex: 100,
            overflow: "visible",
          }}
        >
          <img
            src="/images/youthfunded-logo.png"
            alt="YouthFunded Logo"
            style={{
              display: "block",
              width: "150px",
              height: "65px",
              objectFit: "contain",
              objectPosition: "left center",
              opacity: 1,
              visibility: "visible",
              flexShrink: 0,
            }}
          />
        </a>

        <nav
          className="nav-links"
          aria-label="Main navigation"
        >
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
        {/* LOGO FOOTER */}
        <a
          href="/"
          aria-label="YouthFunded home"
          style={{
            display: "flex",
            alignItems: "center",
            width: "160px",
            height: "65px",
            position: "relative",
            zIndex: 10,
          }}
        >
          <img
            src="/images/youthfunded-logo.png"
            alt="YouthFunded Logo"
            style={{
              display: "block",
              width: "160px",
              height: "65px",
              objectFit: "contain",
              objectPosition: "left center",
              opacity: 1,
              visibility: "visible",
            }}
          />
        </a>

        <p>
          Small steps, big impact. Made for the next generation.
        </p>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} YouthFunded</span>
          <a href="/">Back to Home ↑</a>
        </div>
      </footer>
    </>
  );
