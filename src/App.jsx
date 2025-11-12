import React, { useState } from "react";
import "./App.css";

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Smooth scroll
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  // Form Validation (Gmail only)
  const validateForm = (e) => {
    e.preventDefault();
    let tempErrors = {};
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Email validation
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!gmailRegex.test(formData.email)) {
      tempErrors.email = "Only Gmail addresses are allowed (e.g., user@gmail.com)";
    }

    // Password validation
    if (!formData.password.trim()) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    setSuccess("");

    // If no errors, show success
    if (Object.keys(tempErrors).length === 0) {
      setSuccess("✅ Login successful!");
      setFormData({ email: "", password: "" });
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">MyPortfolio</div>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a onClick={() => scrollToSection("about")}>About</a>
          <a onClick={() => scrollToSection("projects")}>Projects</a>
          <a onClick={() => scrollToSection("gallery")}>Gallery</a>
          <a onClick={() => scrollToSection("contact")}>Contact</a>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

  {/* About Section */}
<section id="about" className="section">
  <h2>About Me</h2>
  <p>
    I’m a passionate <b>Software Developer</b> with expertise in ReactJS, JavaScript,
    and modern front-end technologies. I enjoy crafting clean, responsive,
    and user-friendly interfaces while continuously learning new tools
    and frameworks.
  </p>
  <img
    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
    alt="Software Developer working on a project"
    className="about-img"
  />
</section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>
        <ul>
          <li>🌐 Portfolio Website – Built with ReactJS and responsive design principles</li>
          <li>🛒 E-commerce App – Product filtering, search, and cart management</li>
          <li>🔐 Form Validation App – Real-time validation and user authentication flow</li>
        </ul>
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
          alt="Teamwork and projects"
          className="projects-img"
        />
      </section>
{/* Image Gallery */}
<section id="gallery" className="section gallery">
  <h2>Gallery</h2>
  <div className="image-grid">
    {[
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80", // coding on laptop
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80", // developer team
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // modern office setup
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80", // developer desk ✅ (new)
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=600&q=80", // focused developer
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80", // creative team
    ].map((src, i) => (
      <div key={i} className="img-box">
        <img src={src} alt={`Gallery ${i + 1}`} />
      </div>
    ))}
  </div>
</section>



      {/* Contact / Form */}
      <section id="contact" className="section form-section">
        <h2>Login / Signup</h2>
        <form onSubmit={validateForm}>
          <input
            type="email"
            placeholder="Enter Gmail"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button type="submit">Submit</button>

          {success && (
            <p style={{ color: "limegreen", marginTop: "10px" }}>{success}</p>
          )}
        </form>
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=80"
          alt="Contact developer"
          className="contact-img"
        />
      </section>
    </>
  );
}
