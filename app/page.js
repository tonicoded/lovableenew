export default function Home() {
  return (
    <section className="stage">
      <div className="frame">
        <video
          src="/assets/video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          draggable="false"
          disablePictureInPicture
          controlsList="nofullscreen noremoteplayback nodownload noplaybackrate"
          tabIndex={-1}
        />
        <div className="content">
          <div className="brand">
            <img src="/assets/paywall.gif" alt="lovablee logo" />
            <span>lovablee</span>
          </div>
          <div className="pill-row">
            shared pet rituals
            <span className="pill-dot" />
            live doodles
          </div>
          <div className="hero-badges">
            <span className="badge">live preview</span>
            <span className="badge ghost">cozy · playful · personal</span>
          </div>
          <h1>One calm place for your shared pet.</h1>
          <p className="lede">
            Minimal, focused, and synced so you both feel close to your pet, wherever you are.
          </p>
          <div className="cta-row">
            <a className="store-badge" href="#" aria-label="Download on the App Store">
              <img src="/assets/appstore.svg" alt="Download on the App Store" />
            </a>
            <a className="store-badge" href="#" aria-label="Get it on Google Play">
              <img src="/assets/googleplay.svg" alt="Get it on Google Play" />
            </a>
            <div className="hint-text">Android waitlist coming soon</div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-links">
          <a href="privacy.html">privacy</a>
          <a href="terms.html">terms</a>
          <a href="support.html">support</a>
          <span>&copy; lovablee 2025</span>
        </div>
      </footer>
    </section>
  );
}
