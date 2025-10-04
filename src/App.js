import { useEffect, useState } from "react";
import "./App.css";

function App() {
   const fullText = "Build with AI that feels effortless...";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    // Typewriter effect
    let i = 0;
    const typeInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(i));
      i++;
      if (i === fullText.length) clearInterval(typeInterval);
    }, 80);

    // Sticky header
    const header = document.querySelector(".site-header");
    const onScrollHeader = () => {
      if (window.scrollY > 50) header.classList.add("sticky");
      else header.classList.remove("sticky");
    };
    window.addEventListener("scroll", onScrollHeader);

    // Active link highlight
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");
    const onScrollLinks = () => {
      let current = "";
      sections.forEach((sec) => {
        const sectionTop = sec.offsetTop - 100;
        if (window.scrollY >= sectionTop) current = sec.getAttribute("id");
      });
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current))
          link.classList.add("active");
      });
    };
    window.addEventListener("scroll", onScrollLinks);

    // Countdown timer
    const countdownEl = document.getElementById("countdown");
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    const updateCountdown = () => {
      const now = new Date();
      const diff = endDate - now;
      if (diff <= 0) {
        countdownEl.textContent = "Offer expired!";
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      countdownEl.textContent = `⏳ Offer ends in ${days}d ${hours}h ${minutes}m`;
    };
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();

    // Back to top button
    const backToTop = document.getElementById("backToTop");
    const toggleBackToTop = () => {
      backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    };
    window.addEventListener("scroll", toggleBackToTop);
    backToTop?.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );

    return () => {
      clearInterval(typeInterval);
      window.removeEventListener("scroll", onScrollHeader);
      window.removeEventListener("scroll", onScrollLinks);
      window.removeEventListener("scroll", toggleBackToTop);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <nav className="nav container">
          <div className="brand">
            <span className="logo" aria-hidden="true">◎</span>
            <span className="brand-name">NovaAI</span>
          </div>
          <input id="nav-toggle" type="checkbox" aria-label="Toggle navigation" />
          <label htmlFor="nav-toggle" className="burger" aria-hidden="true">
            <span></span><span></span><span></span>
          </label>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#use-cases">Use Cases</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a className="btn btn--sm" href="#cta">Get Started</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero__grid">
            <div className="hero__copy">
              <h1>{typedText}<span className="highlight"></span></h1>
              <p className="lead">
                NovaAI helps you summarize, generate, and automate—without the complexity.
              </p>
              <div className="hero__actions">
                <a className="btn" href="#cta">Try Free</a>
                <a className="btn btn--ghost" href="#features">See Features</a>
              </div>
              <ul className="hero__badges" aria-label="Highlights">
                <li>⚡ On-device caching</li>
                <li>🔐 Privacy-first</li>
                <li>🧩 Simple API</li>
              </ul>
            </div>
            <div className="hero__art" aria-hidden="true">
              <div className="orb orb--1"></div>
              <div className="orb orb--2"></div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="section">
          <div className="container">
            <h2 className="section__title">Everything you need to ship AI faster</h2>
            <div className="grid grid--3">
              <article className="card">
                <h3>Text Generation</h3>
                <p>Create blogs, emails, and product copy with controllable tone and length.</p>
              </article>
              <article className="card">
                <h3>Embeddings Search</h3>
                <p>Semantic search across your docs for instant, relevant answers.</p>
              </article>
              <article className="card">
                <h3>Workflow Automations</h3>
                <p>Trigger actions from prompts—no-code recipes or simple API calls.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section id="use-cases" className="section section--alt">
          <div className="container">
            <h2 className="section__title">Built for teams</h2>
            <div className="grid grid--3">
              <article className="card card--soft">
                <h3>Support</h3>
                <p>Draft empathetic replies and summarize long tickets in seconds.</p>
              </article>
              <article className="card card--soft">
                <h3>Marketing</h3>
                <p>Spin up campaigns, product pages, and A/B variants—at scale.</p>
              </article>
              <article className="card card--soft">
                <h3>Engineering</h3>
                <p>Explain code, generate tests, and write docs from inline prompts.</p>
              </article>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section">
          <div className="container">
            <h2 className="section__title">Simple pricing</h2>
            <p id="countdown"></p>
            <div className="pricing">
              <article className="price-card">
                <h3>Starter</h3>
                <p className="price"><span className="price__currency">$</span>0</p>
                <ul className="list">
                  <li>200 prompts / mo</li>
                  <li>Basic models</li>
                  <li>Email support</li>
                </ul>
              </article>
              <article className="price-card price-card--accent">
                <h3>Pro</h3>
                <p className="price"><span className="price__currency">$</span>29</p>
                <ul className="list">
                  <li>Unlimited prompts</li>
                  <li>Advanced models</li>
                  <li>Priority support</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* Company Name */}
        <div className="company-marquee">
          <div className="marquee-inner">
            <span><img src="assets/images/image2.jpg" alt="Google" /></span>
            <span><img src="assets/images/image3.jpg" alt="Microsoft" /></span>
            <span><img src="assets/images/image4.jpg" alt="Amazon" /></span>
            <span><img src="assets/images/image5.jpg" alt="OpenAI" /></span>
            <span><img src="assets/images/image6.jpg" alt="Meta" /></span>
            <span><img src="assets/images/image7.jpg" alt="Netflix" /></span>
            {/* repeat for smooth looping */}
            <span><img src="assets/images/image2.jpg" alt="Google" /></span>
            <span><img src="assets/images/image3.jpg" alt="Microsoft" /></span>
            <span><img src="assets/images/image4.jpg" alt="Amazon" /></span>
            <span><img src="assets/images/image5.jpg" alt="OpenAI" /></span>
            <span><img src="assets/images/image6.jpg" alt="Meta" /></span>
            <span><img src="assets/images/image7.jpg" alt="Netflix" /></span>
          </div>
        </div>

        {/* FAQ */}
        <section id="faq" className="section section--alt">
          <div className="container">
            <h2 className="section__title">Frequently asked questions</h2>

            <details className="faq">
              <summary>Is my data used to train models?</summary>
              <p>No—your data stays private and isn’t used to train shared models.</p>
            </details>

            <details className="faq">
              <summary>Do you offer an API?</summary>
              <p>Yes, a simple REST API with SDKs for JS, Python, and Go.</p>
            </details>

            <details className="faq">
              <summary>Can I self-host?</summary>
              <p>Enterprise plans support self-hosting and private cloud.</p>
            </details>

            <details className="faq">
              <summary>What payment methods do you accept?</summary>
              <p>We accept all major credit cards, PayPal, and bank transfers for enterprise clients.</p>
            </details>

            <details className="faq">
              <summary>Is there a free trial?</summary>
              <p>Yes, we offer a 14-day free trial with full feature access—no credit card required.</p>
            </details>

            <details className="faq">
              <summary>Do you provide customer support?</summary>
              <p>Yes, email and live chat support are available for all plans. Enterprise customers receive 24/7 priority
                support.</p>
            </details>

            <details className="faq">
              <summary>Can I cancel anytime?</summary>
              <p>Yes, you can cancel your subscription at any time from your account settings. No long-term contracts.</p>
            </details>
          </div>
        </section>

        {/* video */}
        <div class="hero__art" aria-hidden="false">
          <div class="video-wrapper">
            <video autoPlay muted loop playsInline>
              <source src="assets/videos/video1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        {/* CTA */}
        <section id="cta" className="section cta">
          <div className="container cta__inner">
            <h2>Ready to build with NovaAI?</h2>
            <p>Start free—no credit card required.</p>
            <a className="btn btn--lg" href="!#">Create your account</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__grid">
          {/* Column 1: Brand */}
          <div className="footer__brand">
            <span className="logo">◎</span>
            <span className="brand-name">NovaAI</span>
            <p className="footer__tagline">Simple, powerful AI for your workflow.</p>
          </div>

          {/* Column 2: Links */}
          <div className="footer__links">
            <h4>Company</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#cta">Get Started</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="footer__links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="!#">Docs</a></li>
              <li><a href="!#">Support</a></li>
            </ul>
          </div>

          {/* Column 4: Social */}
          <div className="footer__social">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="!#">Twitter</a></li>
              <li><a href="!#">LinkedIn</a></li>
              <li><a href="!#">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© <span id="year">{new Date().getFullYear()}</span> NovaAI. All rights reserved.</p>
        </div>
      </footer>


      <button
        id="backToTop"
        style={{
          display: "none",
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px",
          border: "none",
          background: "#333",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        ⬆
      </button>
    </>
  );
}

export default App;
