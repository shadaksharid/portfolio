import { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMoon, 
  FaSun, 
  FaCode, 
  FaGraduationCap,
  FaBriefcase,
  FaCloudversify,
  FaTools,
  FaUserCog,
  FaChevronUp
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Portfolio.css';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setShowScrollTop(position > 500);
      
      const sections = ['about', 'experience', 'projects', 'skills', 'education'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };
  
  const handleSectionClick = (section) => {
    setActiveSection(section);
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const badgeAnimation = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };
  
  const cardAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={`portfolio-container ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
      <header className={`fixed-top shadow-sm py-3 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <motion.h5 
              className="m-0 fw-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToTop()}
              style={{ cursor: 'pointer' }}
            >
              {darkMode ? 'Shadakshari D' : 'Shadakshari D'}
            </motion.h5>
            <div className="d-flex align-items-center">
              <nav className="d-none d-md-flex gap-2">
                {['about', 'experience', 'projects', 'skills', 'education'].map((section) => (
                  <motion.button 
                    key={section}
                    className={`btn rounded-pill px-3 py-1 ${activeSection === section ? 
                      'btn-primary text-white' : 
                      darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}
                    onClick={() => handleSectionClick(section)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </motion.button>
                ))}
              </nav>
              <motion.button
                className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} rounded-circle ms-3`}
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                style={{ width: '38px', height: '38px' }}
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? <FaSun className="m-0" /> : <FaMoon className="m-0" />}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <div className="container pt-5 mt-5 pb-4">
        <motion.section 
          id="about" 
          className="py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className="row align-items-center">
            <div className="col-md-7">
              <motion.h1 
                className="display-4 fw-bold"
                variants={fadeInUp}
              >
                Shadakshari D
              </motion.h1>
              <motion.div 
                className="position-relative mb-4"
                variants={fadeInUp}
              >
                <h4 className="text-primary fw-bold">Software Engineer</h4>
                <div className="animated-underline"></div>
              </motion.div>
              <motion.p 
                className="lead"
                variants={fadeInUp}
              >
                Aspiring software engineer with experience in software development, data structures, algorithms and
                web technologies. Passionate about building impactful applications with cutting-edge technologies.
              </motion.p>
              <motion.div 
                className="d-flex gap-3 pt-3"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {[
                  { href: "mailto:shadakshari2in@gmail.com", icon: <FaEnvelope size={20} />, title: "Email" },
                  { href: "https://www.linkedin.com/in/shadakshari12/", icon: <FaLinkedin size={20} />, title: "LinkedIn" },
                  { href: "https://github.com/shadaksharid", icon: <FaGithub size={20} />, title: "GitHub" }
                ].map((social, index) => (
                  <motion.a 
                    key={index}
                    href={social.href} 
                    className="btn btn-outline-primary social-btn" 
                    title={social.title}
                    variants={badgeAnimation}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: `0 0 12px ${darkMode ? 'rgba(0, 123, 255, 0.7)' : 'rgba(0, 123, 255, 0.5)'}` 
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
                <motion.a 
                    href="/hadakshari_resume.pdf" 
                    className="btn btn-outline-secondary"
                    variants={badgeAnimation}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    📄 Resume
                </motion.a>
              </motion.div>
            </div>
            <div className="col-md-5 d-none d-md-block">
              <motion.div 
                className="profile-blob"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.hr 
          className="my-4" 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.section 
          id="experience" 
          className="py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="mb-4 d-flex align-items-center section-title"
            variants={fadeInUp}
          >
            <FaBriefcase className="me-2" /> Experience
          </motion.h2>
          
          <motion.div 
            className="card experience-card mb-4"
            variants={cardAnimation}
          >
            <div className="card-body">
              <div className="d-flex flex-column">
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-2">
                  <h4>Software Engineer Intern</h4>
                  <div className="d-flex gap-2 mt-2 mt-sm-0">
                    <motion.span 
                      className="badge bg-success"
                      whileHover={{ scale: 1.05 }}
                    >
                      Feb 2025 - Apr 2025
                    </motion.span>
                    <motion.span 
                      className="badge bg-purple"
                      whileHover={{ scale: 1.05 }}
                    >
                      In-Office
                    </motion.span>
                  </div>
                </div>
                <h5 className="text-primary fw-bold">VCNR Technologies</h5>
                <motion.ul 
                  className="mt-3 ps-3"
                  variants={staggerContainer}
                >
                  {[
                    "Developed a full-stack Virtual Art Gallery web application using the MERN stack (MongoDB, Express, React, Node.js)",
                    "Implemented JWT authentication for secure user login/signup",
                    "Integrated Cloudinary for optimized artwork image uploads and storage",
                    "Built interactive features including likes, comments, and artwork uploads",
                    "Designed and developed an admin panel for managing artworks and users",
                    "Utilized Redux for state management"
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      variants={fadeInUp}
                      custom={index}
                    >
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.a 
                  href="https://github.com/shadaksharid/Virtual-Art-Gallery" 
                  className="text-primary d-flex align-items-center mt-2 github-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                >
                  <FaGithub className="me-1" /> View on GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.hr 
          className="my-4" 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.section 
          id="projects" 
          className="py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="mb-4 d-flex align-items-center section-title"
            variants={fadeInUp}
          >
            <FaCode className="me-2" /> Projects
          </motion.h2>
          
          <motion.div 
            className="row g-4"
            variants={staggerContainer}
          >
            {[
              {
                title: "Virtual Art Gallery Application",
                badges: [
                  { text: "MERN Stack", className: "bg-primary" },
                  { text: "React", className: "bg-success" },
                  { text: "MongoDB", className: "bg-warning text-dark" },
                  { text: "Express", className: "bg-purple" },
                  { text: "Node.js", className: "bg-info" },
                  { text: "Redux", className: "bg-danger" }
                ],
                description: "Created a web application for browsing, viewing, and engaging with digital art collections. Built with JWT authentication, Cloudinary for image processing, and Redux for state management. Added features such as user authentication, artwork upload, likes/comments, and an admin panel for artwork management."
              },
              {
                title: "Income Tax Fraud Detection",
                badges: [
                  { text: "Machine Learning", className: "bg-primary" },
                  { text: "Deep Learning", className: "bg-success" },
                  { text: "Random Forest", className: "bg-warning text-dark" },
                  { text: "XGBoost", className: "bg-purple" },
                  { text: "CNN", className: "bg-info" },
                  { text: "LSTM", className: "bg-danger" }
                ],
                description: "Developed a machine learning and deep learning-based framework using a synthetic dataset with real-world complexity for detecting income tax fraud. Designed pre-processing pipelines and developed an evaluation strategy using Random Forest, Decision Trees, XGBoost, CNN, and LSTM models for accurately and efficiently finding frauds in the data set."
              },
              {
                title: "AgriBot: Generative AI-Powered Fertilizer Recommendations",
                badges: [
                  { text: "Generative AI", className: "bg-primary" },
                  { text: "React", className: "bg-success" },
                  { text: "Tailwind CSS", className: "bg-warning text-dark" },
                  { text: "OpenAI GPT", className: "bg-purple" },
                  { text: "Multilingual", className: "bg-info" }
                ],
                description: "Developed a Generative AI-powered multilingual system to provide sustainable fertilizer recommendations to farmers. Built a responsive frontend with React and Tailwind CSS, created an intuitive form-driven interface, and implemented backend logic connecting with OpenAI's GPT models. The system generates context-aware fertilizer recommendations in multiple Indian languages."
              }
            ].map((project, index) => (
              <motion.div 
                className="col-12" 
                key={index}
                variants={cardAnimation}
              >
                <motion.div 
                  className="card project-card h-100"
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 10px 30px ${darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}` 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-body">
                    <h4>{project.title}</h4>
                    <motion.div 
                      className="d-flex flex-wrap gap-2 my-2"
                      variants={staggerContainer}
                    >
                      {project.badges.map((badge, badgeIndex) => (
                        <motion.span 
                          key={badgeIndex} 
                          className={`badge ${badge.className}`}
                          variants={badgeAnimation}
                          whileHover={{ scale: 1.1 }}
                        >
                          {badge.text}
                        </motion.span>
                      ))}
                    </motion.div>
                    <p>{project.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.hr 
          className="my-4" 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.section 
          id="skills" 
          className="py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="mb-4 d-flex align-items-center section-title"
            variants={fadeInUp}
          >
            <FaTools className="me-2" /> Technical Skills
          </motion.h2>
          
          <motion.div 
            className="row g-4"
            variants={staggerContainer}
          >
            {[
              {
                title: "Programming Languages",
                icon: <FaCode className="me-2" />,
                badges: [
                  { text: "Java", className: "bg-primary" },
                  { text: "Python", className: "bg-success" },
                  { text: "C", className: "bg-warning text-dark" },
                  { text: "JavaScript", className: "bg-purple" }
                ]
              },
              {
                title: "Web Technologies",
                icon: <FaCloudversify className="me-2" />,
                badges: [
                  { text: "HTML", className: "bg-primary" },
                  { text: "CSS", className: "bg-success" },
                  { text: "React", className: "bg-warning text-dark" },
                  { text: "MERN", className: "bg-purple" },
                  { text: "Node.js", className: "bg-info" },
                  { text: "Java(Dynammic web programming)", className: "bg-info"}
                ]
              },
              {
                title: "Developer Tools",
                icon: <FaTools className="me-2" />,
                badges: [
                  { text: "VS Code", className: "bg-primary" },
                  { text: "Eclipse", className: "bg-success" },
                  { text: "Google Cloud Platform", className: "bg-warning text-dark" }
                ]
              },
              {
                title: "Database",
                icon: <FaUserCog className="me-2" />,
                badges: [
                  { text: "MongoDB", className: "bg-primary" },
                  { text: "MySQL", className: "bg-success" }
                ]
              }
            ].map((skillCategory, index) => (
              <motion.div 
                className="col-md-6" 
                key={index}
                variants={cardAnimation}
              >
                <motion.div 
                  className="card skill-card h-100"
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 10px 20px ${darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}` 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-body">
                    <h5 className="d-flex align-items-center">
                      {skillCategory.icon} {skillCategory.title}
                    </h5>
                    <motion.div 
                      className="d-flex flex-wrap gap-2 mt-3"
                      variants={staggerContainer}
                    >
                      {skillCategory.badges.map((badge, badgeIndex) => (
                        <motion.span 
                          key={badgeIndex} 
                          className={`badge ${badge.className} px-3 py-2`}
                          variants={badgeAnimation}
                          whileHover={{ scale: 1.1 }}
                        >
                          {badge.text}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}

            <motion.div 
              className="col-12"
              variants={cardAnimation}
            >
              <motion.div 
                className="card skill-card"
                whileHover={{ 
                  y: -5,
                  boxShadow: `0 10px 20px ${darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}` 
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-body">
                  <h5 className="d-flex align-items-center">
                    <FaUserCog className="me-2" /> Soft Skills
                  </h5>
                  <motion.div 
                    className="d-flex flex-wrap gap-2 mt-3"
                    variants={staggerContainer}
                  >
                    {[
                      { text: "Problem Solving", className: "bg-primary" },
                      { text: "Flexibility", className: "bg-success" },
                      { text: "Strong Work Ethic", className: "bg-warning text-dark" },
                      { text: "Communication Skills", className: "bg-purple" },
                      { text: "Team Work", className: "bg-info" }
                    ].map((badge, badgeIndex) => (
                      <motion.span 
                        key={badgeIndex} 
                        className={`badge ${badge.className} px-3 py-2`}
                        variants={badgeAnimation}
                        whileHover={{ scale: 1.1 }}
                      >
                        {badge.text}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>

        <motion.hr 
          className="my-4" 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.section 
          id="education" 
          className="py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="mb-4 d-flex align-items-center section-title"
            variants={fadeInUp}
          >
            <FaGraduationCap className="me-2" /> Education
          </motion.h2>
          
          <motion.div 
            className="row g-4"
            variants={staggerContainer}
          >
            {[
              {
                degree: "BTech in Computer Science and Engineering",
                timeline: "Dec 2021 - Jul 2025",
                institution: "Presidency University, Bengaluru, Karnataka",
                grade: "CGPA: 7.93"
              },
              {
                degree: "PUC",
                timeline: "Jun 2019 - Jun 2021",
                institution: "Hoysala PU College, Bengaluru, Karnataka",
                grade: "Percentage: 94.50%"
              }
            ].map((education, index) => (
              <motion.div 
                className="col-12" 
                key={index}
                variants={cardAnimation}
              >
                <motion.div 
                  className="card education-card"
                  whileHover={{ 
                    y: -5,
                    boxShadow: `0 10px 20px ${darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}` 
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="card-body">
                    <div className="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mb-2">
                      <h4>{education.degree}</h4>
                      <motion.span 
                        className="badge bg-primary mt-2 mt-sm-0"
                        whileHover={{ scale: 1.05 }}
                      >
                        {education.timeline}
                      </motion.span>
                    </div>
                    <h5 className="text-primary fw-bold">{education.institution}</h5>
                    <p>{education.grade}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.hr 
          className="my-4" 
          initial={{ opacity: 0, width: "0%" }}
          whileInView={{ opacity: 1, width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <motion.section 
          className="py-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInUp}
        >
          <motion.h2 
            className="mb-4 d-flex align-items-center section-title"
            variants={fadeInUp}
          >
            <FaCloudversify className="me-2" /> Certifications
          </motion.h2>
          
          <motion.div 
            className="card certification-card"
            variants={cardAnimation}
            whileHover={{ 
              y: -5,
              boxShadow: `0 10px 20px ${darkMode ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'}` 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="card-body">
              <motion.ul 
                className="list-unstyled"
                variants={staggerContainer}
              >
                {[
                  "Google Cloud Skills Boost - Google cloud skills Badges",
                  "SimpliLearn - Introduction to Supervised and unsupervised Machine Learning"
                ].map((certification, index) => (
                  <motion.li 
                    key={index}
                    variants={fadeInUp}
                    className="certification-item"
                  >
                    • {certification}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </motion.section>
      </div>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronUp />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.footer 
        className={`py-4 ${darkMode ? 'bg-dark text-light border-top border-secondary' : 'bg-light text-dark border-top'}`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <p className="m-0">© {new Date().getFullYear()} Shadakshari D. All rights reserved.</p>
            <motion.div 
              className="d-flex gap-3 mt-3 mt-md-0"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { href: "mailto:shadakshari2in@gmail.com", icon: <FaEnvelope size={20} /> },
                { href: "https://www.linkedin.com/in/shadakshari12/", icon: <FaLinkedin size={20} /> },
                { href: "https://github.com/shadaksharid", icon: <FaGithub size={20} /> }
              ].map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.href} 
                  className={darkMode ? "text-light" : "text-dark"}
                  variants={badgeAnimation}
                  whileHover={{ 
                    scale: 1.3,
                    color: '#0d6efd'
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}