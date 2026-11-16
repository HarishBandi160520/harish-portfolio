import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Database, Layers3, Globe2, Download, MapPin,
  GraduationCap, BriefcaseBusiness, ExternalLink, BookOpen
} from "lucide-react";
import profilePhoto from "./assets/profile-photo.jpg";

const skills = [
  { title: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Reusable Components", "Client-side Routing", "Responsive Design"], icon: Globe2 },
  { title: "Backend", items: ["Java", "Core Java", "JDBC", "Servlets", "JSP", "Spring Boot", "Spring MVC", "Spring IOC", "Spring Security (Basic)", "Hibernate", "JPA"], icon: Layers3 },
  { title: "APIs & Authentication", items: ["REST APIs", "JWT", "Role-based Authorization", "Postman"], icon: Code2 },
  { title: "Database & Tools", items: ["SQL", "MySQL", "H2", "Git", "GitHub", "Eclipse", "VS Code"], icon: Database },
];

const projects = [
  { number: "01", name: "StyleKart", type: "Full Stack E-commerce Web Application", description: "Built a responsive ReactJS frontend with reusable components and client-side routing, backed by Spring Boot REST APIs for product catalog, cart, orders and user management. Integrated MySQL with Hibernate and implemented JWT authentication with Admin and User role-based authorization.", stack: ["Java", "Spring Boot", "ReactJS", "REST APIs", "JWT", "MySQL", "Hibernate", "Postman"], note: "Featured project", url: "https://github.com/bandi-harish/stylekart" },
  { number: "02", name: "FreshMart", type: "Grocery Shopping Application", description: "A full-stack grocery application featuring user registration and login, product management and a shopping cart, built with a React frontend and Java Spring Boot backend.", stack: ["Java", "Spring Boot", "ReactJS", "MySQL"], note: "Additional project", url: "https://github.com/bandi-harish" },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } } };

function SectionHeading({ eyebrow, title, text }) {
  return <motion.div className="section-heading" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}>
    <span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}
  </motion.div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["About", "Skills", "Projects", "Experience", "Training", "Education", "Contact"];
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Harish Bandi home"><span className="brand-mark">HB</span><span>HARISH BANDI<span className="brand-dot">.</span></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
      <nav className={menuOpen ? "nav-links open" : "nav-links"}>{navItems.map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}<a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a></nav>
    </header>
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy"><motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <div className="availability"><span className="pulse-dot" /> OPEN TO OPPORTUNITIES</div>
          <p className="hero-kicker">HELLO, I'M</p><h1>Harish <span>Bandi</span><i>.</i></h1><h2>Java Full Stack <span>Developer</span></h2>
          <p className="hero-description">Java Full Stack Developer with hands-on experience building responsive web applications using ReactJS, Spring Boot, REST APIs and MySQL. Interested in creating reliable, user-friendly applications and growing through collaborative software development.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a><a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={17} /></a><a className="resume-link" href="/Harish-Resume.pdf" target="_blank" rel="noreferrer"><Download size={15} /> View Resume</a></div>
          <div className="social-row"><a href="https://github.com/bandi-harish" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a><a href="https://www.linkedin.com/in/bandi-harish" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a><a href="mailto:bandiharish.dev@gmail.com" aria-label="Email"><Mail size={19} /></a><span className="social-divider" /><span className="location"><MapPin size={15} /> Hyderabad, India</span></div>
        </motion.div></div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}>
          <div className="photo-orbit orbit-a" /><div className="photo-orbit orbit-b" /><div className="photo-card"><div className="photo-topline"><span>PROFILE / 01</span><span className="photo-live">●</span></div><img src={profilePhoto} alt="Harish Bandi profile photograph" className="profile-photo" /><div className="photo-caption"><span>JAVA FULL STACK DEVELOPER</span><strong>Building with purpose.</strong></div></div>
          <div className="floating-tag tag-java"><span className="tag-icon">☕</span> Java</div><div className="floating-tag tag-react"><span className="react-symbol">⚛</span> React.js</div><div className="hero-index">01 <span>—</span> 06</div>
        </motion.div><a href="#about" className="scroll-cue"><ArrowDown size={15} /> SCROLL TO EXPLORE</a>
      </section>

      <section className="section-wrap about-section" id="about"><SectionHeading eyebrow="01 / ABOUT ME" title={<>A little about <span>myself.</span></>} /><div className="about-grid">
        <motion.div className="about-lead" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><span className="quote-mark">“</span><p>I enjoy building responsive applications and solving practical problems through code.</p></motion.div>
        <motion.div className="about-detail" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p>I'm a Java Full Stack Developer with hands-on experience in ReactJS, Spring Boot, REST APIs and MySQL. I built a full-stack e-commerce application with JWT authentication and role-based authorization.</p>
          <p>I also contributed to a live team project during my software development internship at Voidmain Technologies. I enjoy API testing, debugging, teamwork and writing clean, reusable code.</p>
          <div className="about-facts"><div><strong>02<span>+</span></strong><small>PROJECTS</small></div><div><strong>Full Stack</strong><small>FOCUS AREA</small></div><div><strong>MCA</strong><small>2ND YEAR</small></div></div>
        </motion.div></div></section>

      <section className="section-wrap skills-section" id="skills"><SectionHeading eyebrow="02 / WHAT I WORK WITH" title={<>Tools of the <span>trade.</span></>} text="Technical skills and tools from my development training and project experience." /><div className="skills-grid">
        {skills.map(({ title, items, icon: Icon }, index) => <motion.article className="skill-card" key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: index * 0.08 }}><div className="skill-card-head"><span className="skill-icon"><Icon size={20} /></span><span className="skill-count">0{index + 1}</span></div><h3>{title}</h3><div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div></motion.article>)}
      </div></section>

      <section className="section-wrap projects-section" id="projects"><SectionHeading eyebrow="03 / SELECTED WORK" title={<>Things I've <span>built.</span></>} text="Full-stack projects demonstrating frontend development, backend APIs, authentication and database integration." /><div className="projects-list">
        {projects.map(project => <motion.article className="project-card" key={project.number} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="project-number">{project.number}</div><div className="project-content"><div className="project-meta"><span>{project.note}</span><span>{project.type}</span></div><h3>{project.name}<span>.</span></h3><p>{project.description}</p><div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div></div><a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}><ArrowUpRight size={23} /></a><div className="project-glow" /></motion.article>)}
      </div><a className="text-link" href="https://github.com/bandi-harish" target="_blank" rel="noreferrer">More on GitHub <ExternalLink size={15} /></a></section>

      <section className="section-wrap experience-section" id="experience"><SectionHeading eyebrow="04 / EXPERIENCE" title={<>Learning through <span>real work.</span></>} />
        <motion.article className="education-item experience-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="education-icon"><BriefcaseBusiness size={21} /></div><div className="education-main"><h3>Software Development Intern</h3><p>Voidmain Technologies · Hyderabad</p><p className="experience-description">May 2026 · 1 month · Project: Online Sport Talent Discovery & Match Making Hub</p><p className="experience-description">Contributed to platform modules and collaborated with the development team on coding, testing and code reviews. Applied Core Java and full-stack concepts to a live project under mentorship.</p></div><span className="education-status">Internship</span></motion.article>
      </section>

      <section className="section-wrap training-section" id="training"><SectionHeading eyebrow="05 / TRAINING" title={<>Building a strong <span>foundation.</span></>} />
        <motion.div className="education-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="education-icon"><BookOpen size={21} /></div><div className="education-main"><h3>Java Full Stack Development</h3><p>Sathya Technologies</p><p className="experience-description">Training in Core Java, Advanced Java, Spring Boot, REST API development, HTML, CSS, JavaScript, React and MySQL.</p></div><span className="education-status">Completed</span></motion.div>
      </section>

      <section className="section-wrap education-section" id="education"><SectionHeading eyebrow="06 / EDUCATION" title={<>Learning is a <span>journey.</span></>} /><div className="education-list">
        <motion.div className="education-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="education-icon"><GraduationCap size={21} /></div><div className="education-main"><h3>Master of Computer Applications (MCA)</h3><p>Spectrum Institute of Management</p></div><span className="education-status">2nd Year · Pursuing</span></motion.div>
        <motion.div className="education-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="education-icon"><GraduationCap size={21} /></div><div className="education-main"><h3>B.Sc — MPCS</h3><p>Avanthi Degree & PG College, Hyderabad · 70% · 2021–2024</p></div><span className="education-status">2021–2024</span></motion.div>
        <motion.div className="education-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="education-icon"><GraduationCap size={21} /></div><div className="education-main"><h3>Intermediate — MPC</h3><p>Narayana Junior College, Hyderabad · 77%</p></div><span className="education-status">2019–2021</span></motion.div>
        <motion.div className="education-item" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}><div className="education-icon"><GraduationCap size={21} /></div><div className="education-main"><h3>SSC</h3><p>Marry Mother High School · 8.2 CGPA</p></div><span className="education-status">2018–2019</span></motion.div>
      </div></section>

      <section className="section-wrap contact-section" id="contact"><motion.div className="contact-panel" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="eyebrow">07 / CONTACT</span><h2>Have an opportunity<br />or idea in mind<span>?</span></h2><p>I'm open to connecting with developers, recruiters and teams working on meaningful products.</p><a className="button button-primary" href="mailto:bandiharish.dev@gmail.com">Say hello <Mail size={17} /></a><p className="contact-phone">8919941978 · bandiharish.dev@gmail.com</p>
        <div className="contact-socials"><a href="https://www.linkedin.com/in/bandi-harish" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a><a href="https://github.com/bandi-harish" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a></div>
      </motion.div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">HB</span><span>HARISH BANDI<span className="brand-dot">.</span></span></a><span>Designed & built with React.js</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
  </div>;
}
export default App;
