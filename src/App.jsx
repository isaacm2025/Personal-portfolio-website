import { useEffect, useState } from "react";
import "./App.css";

const typedWords = ["future software engineer", "highly motivated professional", "lifelong learner"];


const experiences = [
  {
    title: "French Learning Journey",
    subtitle: "2024-2025",
    text: "In 2024, I left my bank role and committed to learning French full-time for my Canadian permanent residence journey. I built a daily study routine, immersed myself in French media, and practiced consistently with tutors. After three attempts, I passed the TCF Canada within one year and later received an invitation to apply for Canadian permanent residence. This experience strengthened my persistence, discipline, and confidence in learning difficult things from scratch.",
  },
  
  {
    title: "Financial Advisor",
    subtitle: "The Bank of Nova Scotia (Scotiabank) | 2021-2024",
    logo: `${import.meta.env.BASE_URL}logos/scotiabank.svg`,
    text: "Worked with clients to understand financial goals, explain banking and investment products, and provide practical guidance. The role strengthened my communication, problem-solving, and analytical skills, which I now bring into software development and data analysis.",
  },
];

const projects = [

  {
    title: "SPARC 2026 Hackathon",
    tag: "To be updated...",
    text: "I will participate in the SPARC 2026 Hackathon during this summer at the University of Pennsylvania, to be updated with more information...",
    link: "https://online.seas.upenn.edu/tag/sparc/"
  },

  {
    title: "SkeletonKey",
    tag: "React, TypeScript, Tailwind CSS, Base44",
    text: "Designed and engineered a cybersecurity dashboard prototype in 2026 at Microsoft Vancouver, where we built an app for permission-category visualization and access-risk analysis to help users understand and manage digital security.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7440474932947566592/"
  },
  {
    title: "Pathly",
    tag: "React, MongoDB, Google Maps API, ElevenLabs API",
    text: "My first full-stack hackathon project in 2026 at Concordia University, where we built a web app that helps users discover new places and plan trips based on their interests and preferences.",
    link: "https://devpost.com/software/pathly-254xnw##updates"
  },
  {
    title: "Dice Dungeon",
    tag: "JavaScript, Phaser 3, Git",
    text: "My very first coding project in Hackathon in 2026 at UBC, right after I just started my semester, where we built a simple web-based game and learned the basics of JavaScript, game development, and version control.",
    link: "https://devpost.com/software/dice-dungeon"
  },
];

const snapshotItems = [
  {
    label: "Based in",
    value: "Canada | Open to relocate",
    detail: "I’m open to opportunities in Vancouver, Toronto, and other Canadian tech hubs.",
  },
  {
    label: "Education",
    value: "MSE in Computer Science, UPenn",
    detail: "Currently strengthening my computer science foundation through graduate-level study.",
  },
  {
    label: "Looking for",
    value: "Software Engineering Internships",
    detail: "Especially interested in software development, full-stack, and data-related roles.",
  },
  {
    label: "Core stack",
    value: "Python, Java, C/C++, JavaScript, React, SQL, Git, OOP",
    detail: "I’m building projects while improving my fundamentals in data structures and systems.",
  },
];

function App() {
  const [wordIndex, setWordIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSnapshot, setActiveSnapshot] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((current) => (current + 1) % typedWords.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="website">
      <section id="home" className="home-section">
        <nav className="navbar">
          <a href="#home" className="logo">
            Isaac<span>.</span>
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>

          <div className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#education" onClick={() => setMenuOpen(false)}>
              Education
            </a>
          
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        </nav>

        <div className="hero">
          <div className="hero-text">
            <p className="hello">Hello, My name is </p>

            <h1>
              Isaac Murong
            </h1>

            <div className="type-line">
              <span>I am a</span>
              <strong>{typedWords[wordIndex]}</strong>
            </div>

            <p className="hero-description">
              I studied Economics at McGill University, worked in the finance industry for three years, and now I’m building my way into software and data through small, practical projects.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn primary-btn">
                View Projects
              </a>
              <a href="#contact" className="btn secondary-btn">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="employee-card">
              <div className="badge-header">
                <div>
                  <p>TECH PROFILE</p>
                  <span>Candidate Badge</span>
                </div>

                <div className="badge-id">SWE-2026</div>
              </div>

              <div className="employee-photo-wrap">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                  alt="Isaac Murong"
                  className="employee-photo"
                />
              </div>

              <div className="employee-main">
                <h2>Isaac Murong</h2>
                <h3>Aspiring Software Engineer</h3>
              </div>

              <div className="badge-info-grid">
                <div>
                  <span>Status</span>
                  <strong>Open to SWE Internships</strong>
                </div>

                <div>
                  <span>Location</span>
                  <strong>Based in Canada</strong>
                </div>

                <div>
                  <span>Focus</span>
                  <strong>Full-stack / Data</strong>
                </div>

                <div>
                  <span>Stack</span>
                  <strong>React · Java · Python · SQL · Git</strong>
                </div>
              </div>

              <div className="badge-footer">
                <div className="barcode">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>Learning by building</p>
              </div>
            </div>

            <div className="floating-card card-one">React</div>
            <div className="floating-card card-two">SQL</div>
            <div className="floating-card card-three">JavaScript</div>
            <div className="floating-card card-four">C/C++</div>
            <div className="floating-card card-five">Python</div>
            <div className="floating-card card-six">Java</div>
            <div className="floating-card card-seven">Git</div>
            <div className="floating-card card-eight">TypeScript</div>   
            <div className="floating-card card-eleven">HTML/CSS</div>
            <div className="floating-card card-twelve">Phaser 3</div>
            
          </div>
        </div>
      </section>

      <section id="about" className="about-section section">
        <div className="about-content">
          <div className="about-left">
            <div className="section-heading">
              <p>About Me</p>
              <h2>A non-traditional path into tech.</h2>
            </div>

            <div className="about-text">
              <p>
                My path into tech didn’t start with code. I studied Economics at
                McGill, then worked in finance, where I learned how to analyze
                problems, explain complex ideas clearly, and work closely with people.
              </p>

              <p>
                One of the biggest self-learning challenges I’ve taken on was learning
                French for my Canadian permanent residence journey. That experience
                taught me discipline, patience, and how to keep motivated even when
                progress feels difficult and unfamiliar.
              </p>

              <p>
                Now, I’m pursuing a master’s degree in Computer Science at the
                University of Pennsylvania. I’m building projects with React,
                JavaScript, SQL, and Git while strengthening my fundamentals in data
                structures, algorithms, and computer systems. I enjoy turning ideas
                into working applications and improving my ability to write clean,
                reliable code.
              </p>

              <a href="#contact" className="btn primary-btn">
                Let’s Connect
              </a>
            </div>
          </div>

          <div className="about-right">
            <div className="snapshot-card">
              <p className="snapshot-label">Quick Snapshot</p>

              <div className="snapshot-list">
                {snapshotItems.map((item, index) => (
                  <button
                    className={
                      activeSnapshot === index
                        ? "snapshot-item active"
                        : "snapshot-item"
                    }
                    key={item.label}
                    onClick={() => setActiveSnapshot(index)}
                  >
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </button>
                ))}
              </div>

              <div className="snapshot-detail">
                <p>{snapshotItems[activeSnapshot].detail}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="education-section section">
  <div className="section-heading">
    <p>Education</p>
    <h2>Where I studied and what I’m learning.</h2>
  </div>

  <div className="education-grid">
    <article className="education-card">
      <div className="school-badge">
        <img src={`${import.meta.env.BASE_URL}logos/upenn.png`} alt="University of Pennsylvania logo" />
      </div>

      <div className="education-content">
        <div className="education-top">
          <div>
            <h3>University of Pennsylvania</h3>
            <h4>Master of Applied Science in Computer Science</h4>
          </div>

          <div className="education-meta">
            <span>Philadelphia, PA</span>
            <span>Jan 2026 – Expected 2028</span>
          </div>
        </div>

        <ul>
          <li>Curriculum GPA: 4.0/4.0</li>
          <li>
            Coursework: Software Development (Python, Java, SQL, Git),
            Computer Systems Programming (C, C++), Data Structures and Algorithms... to be continued as I take more classes!
          </li>
        </ul>
      </div>
    </article>

    <article className="education-card">
      <div className="school-badge mcgill">
        <img src={`${import.meta.env.BASE_URL}logos/mcgill.png`} alt="McGill University logo" />
      </div>

      <div className="education-content">
        <div className="education-top">
          <div>
            <h3>McGill University</h3>
            <h4>B.A. Economics with Minor in Statistics</h4>
          </div>

          <div className="education-meta">
            <span>Montreal, Canada</span>
            <span>Sep 2017 – Apr 2021</span>
          </div>
        </div>

        <ul>
          <li>
            GPA: 3.7/4.0
          </li>
          <li>
            Coursework: Stochastic Processes, Sampling Theory, Game Theory, Applied
            Regression, Probability, Advanced Calculus, Statistical Modeling
          </li>
          <li>
            Built a strong foundation in economics, statistics, and analytical
            thinking.
          </li>
        </ul>
      </div>
    </article>
  </div>
</section>


      <section className="cta-section">
        <h2>One project, one lesson, one small improvement at a time.</h2>
        
        <a href="#projects" className="btn secondary-btn">
          See What I’m Building
        </a>
      </section>

      <section id="experience" className="experience-section section">
        <div className="section-heading">
          <p>Experience</p>
          <h2>What I bring from my past work.</h2>
        </div>

        <div className="experience-grid">
          {experiences.map((item) => (
            <article className="experience-card" key={item.title}>
              <div className="experience-card-top">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt={`${item.title} logo`}
                    className="experience-logo"
                  />
                ) : (
                  <div className="experience-icon">🇫🇷</div>
                )}

                <div>
                  <h3>{item.title}</h3>
                  <span>{item.subtitle}</span>
                </div>
              </div>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section section">
        <div className="section-heading">
          <p>Projects</p>
          <h2>Selected work and learning projects.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-tag">{project.tag}</div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Find out more →
            </a>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section section">
  <div className="section-heading">
    <p>Contact</p>
    <h2>Let’s get in touch.</h2>
    <p className="contact-intro">

    I’m actively looking for software development or data analysis internship opportunities in Canada. I’m open to relocating, and I do not require sponsorship. </p>
  </div>

  <div className="contact-layout">
    <div className="contact-info">
      <div className="contact-item">
        <div className="contact-icon">📍</div>
        <div>
          <h3>My Location</h3>
          <p>Vancouver / Toronto / Open to relocate within Canada </p>
        </div>
      </div>


      <div className="contact-item">
        <div className="contact-icon">✉️</div>
        <div>
          <h3>Email Address</h3>
          <p>isaac.murong@mail.mcgill.ca</p>
        </div>
      </div>

      <div className="contact-socials">
        <a href="https://github.com/isaacm2025" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/isaacm2021/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
    </div>

    <form
        className="contact-form"
        onSubmit={(event) => {
          event.preventDefault();
          alert("Thanks for your message! Please email me directly at isaac.murong@mail.mcgill.ca for now.");
        }}
      >
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message" rows="6"></textarea>
      <button type="submit" className="contact-submit">
        Send Message
      </button>
    </form>
  </div>
</section>

      <footer className="footer">
        <p>Built by Isaac with React.</p>
      </footer>
    </div>
  );
}

export default App;