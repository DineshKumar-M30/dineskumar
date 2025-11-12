import React, { useState } from "react";

export default function ResponsiveNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">NOVA AI</div>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#features" className="nav-item">Features</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* AI-related content section */}
      <section id="home" className="hero-section">
        <h1>Welcome to NOVA AI</h1>
        <p>
          Empowering the future with intelligent solutions. NOVA AI brings 
          cutting-edge artificial intelligence tools to automate workflows, 
          enhance decision-making, and transform how you interact with technology.
        </p>
        <button className="cta-button">Explore AI Tools</button>
      </section>

      <section id="features" className="features">
        <h2>Our AI Features</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Smart Automation</h3>
            <p>Streamline your business processes with intelligent task automation powered by AI.</p>
          </div>
          <div className="feature-card">
            <h3>Predictive Insights</h3>
            <p>Leverage data analytics and machine learning to make accurate and informed decisions.</p>
          </div>
          <div className="feature-card">
            <h3>Natural Language Processing</h3>
            <p>Communicate naturally with AI that understands and responds like a human.</p>
          </div>
        </div>
      </section>

      {/* CSS in same file */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: "Poppins", sans-serif;
          background-color: #f8f9fa;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #004aad; /* Deep blue */
          color: white;
          padding: 15px 25px;
          position: relative;
        }

        .logo {
          font-size: 1.6rem;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        .nav-item {
          color: white;
          text-decoration: none;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-item::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #fff;
          transition: width 0.3s ease;
        }

        .nav-item:hover::after {
          width: 100%;
        }

        .nav-item:hover {
          color: #ffd700;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background-color: white;
          transition: all 0.3s ease;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translateY(8px);
        }

        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translateY(-8px);
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
            position: absolute;
            top: 60px;
            right: 0;
            flex-direction: column;
            background-color: #004aad;
            width: 100%;
            text-align: center;
            padding: 15px 0;
          }

          .nav-links.open {
            display: flex;
            animation: slideDown 0.3s ease forwards;
          }

          .hamburger {
            display: flex;
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Hero Section */
        .hero-section {
          text-align: center;
          padding: 80px 20px;
          background: linear-gradient(to right, #004aad, #007bff);
          color: white;
        }

        .hero-section h1 {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        .hero-section p {
          max-width: 700px;
          margin: 0 auto 30px;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .cta-button {
          background-color: white;
          color: #004aad;
          border: none;
          padding: 12px 25px;
          border-radius: 25px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .cta-button:hover {
          background-color: #ffd700;
          color: #004aad;
        }

        /* Features */
        .features {
          padding: 60px 20px;
          text-align: center;
        }

        .features h2 {
          font-size: 2rem;
          color: #004aad;
          margin-bottom: 40px;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .feature-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-card h3 {
          color: #004aad;
          margin-bottom: 10px;
        }

        .feature-card p {
          font-size: 0.95rem;
          color: #333;
        }
      `}</style>
    </>
  );
}
