import React from "react";
import Navbar from "./Navbar";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <header id="home" className="hero d-flex align-items-center text-center">
        <div className="container">
          <h1 className="display-3 fw-800 text-accent mb-3">
            Hello, I’m Arafat Khan <span className="wave">👋</span>
          </h1>
          <p className="lead text-muted-hero mx-auto mb-4">
            Computer Science Student · MERN Developer · Aspiring Software Engineer
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#projects" className="btn btn-accent btn-lg">
              <i className="bi bi-rocket-takeoff-fill me-2" />
              View My Projects
            </a>
          <a 
  className="doc resume-btn" 
  href="/khans-resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <i className="bi bi-file-earmark-person me-2"></i>
  View Resume (PDF)
</a>

          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="section bg-plain">
        <div className="container">
          <h2 className="section-title">About Me</h2>
         <p className="lead mx-auto maxw-800">
  I’m a passionate <strong>Computer Science student</strong> at 
  <strong> The University of Texas at Dallas</strong> with hands-on 
  experience building <strong>MERN stack applications</strong>, 
  integrating <strong>REST APIs</strong>, and developing 
  <strong> responsive, accessible UIs</strong>. I’ve also gained 
  <strong> real-world internship experience</strong> at BlueCiate 
  (SMSNXT), where I collaborated on production-ready features and 
  optimized frontend workflows. I love solving complex problems, 
  writing clean and maintainable code, and continuously learning 
  new technologies to grow as a <strong>full-stack developer</strong>.
</p>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section bg-panel">
        <div className="container">
          <h2 className="section-title">Projects</h2>

          <div className="row g-4">
            {/* 1. Taste-Crafter */}
            <div className="col-md-6">
              <div className="card project">
                <div className="card-body">
                  <h3 className="card-title">Taste-Crafter Restaurant System</h3>
                  <p className="card-text">
                    Full-stack MERN app with authentication, menu browsing,
                    online ordering and table reservations. Focused on smooth
                    checkout UX and secure auth.
                  </p>
                  <div className="d-flex gap-2">
                    <a href="https://github.com/Khan232001/Taste-Crafter"
                       target="_blank" rel="noreferrer"
                       className="btn btn-outline-accent">
                      GitHub →
                    </a>
                    <a href="https://keen-cuchufli-3b28d6.netlify.app/"
                       target="_blank" rel="noreferrer"
                       className="btn btn-outline-accent">
                      Live Demo →
                    </a>
                  </div>
                </div>
                <div className="card-footer small text-muted">
                  Stack: MongoDB · Express · React · Node
                </div>
              </div>
            </div>

            {/* 2. DBMS – Recruitment & Sales */}
            <div className="col-md-6">
              <div className="card project">
                <div className="card-body">
                  <h3 className="card-title">DBMS — Recruitment & Sales</h3>
                  <p className="card-text">
                    SQL + Python project with 20+ tables, joins and CRUD console
                    app for recruitment and sales workflows. Emphasis on data modeling
                    & consistency.
                  </p>
                  <div className="d-flex gap-2">
                    <a href="https://github.com/Khan232001/DBMS_Project"
                       target="_blank" rel="noreferrer"
                       className="btn btn-outline-accent">
                      GitHub →
                    </a>
                  
                  </div>
                </div>
                <div className="card-footer small text-muted">
                  Stack: Python · MySQL · SQL
                </div>
              </div>
            </div>

            {/* 3. Airbnb-Style Rental Management */}
            <div className="col-md-6">
              <div className="card project">
                <div className="card-body">
                  <h3 className="card-title">Airbnb-Style Rental Management</h3>
                  <p className="card-text">
                    MERN app for property listings, CRUD, reviews and bookings.
                    Features Mapbox integration, filters, and responsive UI.
                  </p>
                  <div className="d-flex gap-2">
                    <a href="https://github.com/Khan232001/airbnb"
                       target="_blank" rel="noreferrer"
                       className="btn btn-outline-accent">
                      GitHub →
                    </a>
                    <a href="https://airbnb-bmo0.onrender.com/listings"
                       target="_blank" rel="noreferrer"
                       className="btn btn-outline-accent">
                      Live Demo →
                    </a>
                  </div>
                </div>
                <div className="card-footer small text-muted">
                  Stack: MongoDB · Express · React · Node · Mapbox
                </div>
              </div>
            </div>

            {/* 4. ATM Machine Simulator */}
            <div className="col-md-6">
              <div className="card project">
                <div className="card-body">
                  <h3 className="card-title">ATM Machine Simulator</h3>
                  <p className="card-text">
                    Java-based OOP simulator for deposits, withdrawals, balance
                    checks and transaction logs. Clean class design and error handling.
                  </p>
                  <div className="d-flex gap-2">
                    <a href="https://github.com/Khan232001/ATM-Machine"
                       target="_blank" rel="noreferrer"
                       className="btn btn-outline-accent">
                      GitHub →
                    </a>
                    
                  </div>
                </div>
                <div className="card-footer small text-muted">
                  Stack: Java · OOP
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section bg-plain">
        <div className="container">
          <h2 className="section-title">Experience</h2>

          <div className="timeline">
            <div className="t-item">
              <div className="t-dot" />
              <div className="t-content">
                <h5 className="mb-1">Frontend Developer Intern — BlueCiate Inc. (SMSNXT)</h5>
                <div className="text-muted small mb-2">Jan 2025 – Aug 2025</div>
                <ul className="mb-0">
                  <li>Built and optimized React components & UI flows.</li>
                  <li>Integrated REST APIs; fixed bugs and improved performance.</li>
                  <li>Collaborated on code reviews and Git workflows.</li>
                </ul>
              </div>
            </div>

            <div className="t-item">
              <div className="t-dot" />
              <div className="t-content">
                <h5 className="mb-1">Transfer & Career Services — Dallas College</h5>
                <div className="text-muted small mb-2">2022 – 2023</div>
                <ul className="mb-0">
                  <li>Supported data entry, records management and research.</li>
                  <li>Helped streamline student-facing processes.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section bg-panel">
        <div className="container">
          <h2 className="section-title">Skills</h2>

          <div className="row g-3 justify-content-center">
            {[
              "JavaScript","React","Node.js","Express",
              "MongoDB","SQL","Java","C++","Python","C#",
              "HTML","CSS","Bootstrap","REST APIs","Git & GitHub",
              "Linux (basics)","Microsoft Office"
            ].map((s) => (
              <div key={s} className="col-6 col-md-3 col-lg-2">
                <div className="skill-badge">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certs" className="section bg-plain">
  <div className="container">
  <h2 className="section-title">Certificates</h2>
  <div className="row g-3">
    <div className="col-md-4">
      <a className="doc" href="/apna-college-dsa.pdf" download>
        <i className="bi bi-patch-check-fill me-2" />
        Apna College — DSA Certificate (PDF)
      </a>
    </div>
    <div className="col-md-4">
      <a className="doc" href="/mern-stack-certificate.pdf" download>
        <i className="bi bi-patch-check-fill me-2" />
        MERN Stack Certification (PDF)
      </a>
    </div>
    <div className="col-md-4">
      <a className="doc" href="/blueciate-experience-letter.pdf" download>
        <i className="bi bi-briefcase-fill me-2" />
        BlueCiate (SMSNXT) — Experience Letter (PDF)
      </a>
    </div>
  </div>

 
</div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="section bg-panel">
        <div className="container text-center">
          <h2 className="section-title">Contact</h2>
          <p className="lead text-muted mx-auto maxw-800">
            Feel free to reach out if you'd like to collaborate or just say hi!
          </p>
          <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
            <a className="btn btn-accent"
               href="mailto:arafatk538@gmail.com">
              <i className="bi bi-envelope-fill me-2" />
              Email Me
            </a>
            <a className="btn btn-outline-accent"
               href="tel:+17472709082">
              <i className="bi bi-telephone-fill me-2" />
              747-270-9082
            </a>
            <a className="btn btn-outline-accent"
               href="https://www.linkedin.com/in/arafatkhancs/"
               target="_blank" rel="noreferrer">
              <i className="bi bi-linkedin me-2" />
              LinkedIn
            </a>
            <a className="btn btn-outline-accent"
               href="https://github.com/Khan232001"
               target="_blank" rel="noreferrer">
              <i className="bi bi-github me-2" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
     <footer className="footer text-center">
  <div className="container small text-muted">
    © {new Date().getFullYear()} <span className="text-accent">Arafat Khan</span>. All rights reserved.
  </div>
</footer>

    </>
  );
}
