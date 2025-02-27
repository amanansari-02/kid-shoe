import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import React from "react";

const Portfolio = () => {
  return (
    <div className="container mt-5">
      
      <motion.header
        className="text-center mb-5"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="fw-bold">👋 Hi, I'm <span className="text-primary">Shoaib Bagwan</span></h1>
        <h4 className="text-secondary">Full Stack Developer 🚀</h4>
      </motion.header>

      
      <motion.section
        className="mb-5"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-secondary">About Me</h2>
        <p>
          I am a **passionate Full Stack Developer** with expertise in **PHP, Java, Python, React, JavaScript, and PostgreSQL**.
          I have a Bachelor's degree in Computer Applications and specialize in **developing scalable web applications**.
          <br /><br />
          My goal is to create **efficient, user-friendly, and responsive web solutions** that solve real-world problems.
          I also have a keen interest in **Quality Assurance (QA) and Testing**.
        </p>
      </motion.section>

      
      <motion.section
        className="mb-5"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-secondary">Skills</h2>
        <div className="row">
          {[
            "React.js", "Node.js", "PHP & Laravel", "Java & Spring Boot",
            "Python & Django", "PostgreSQL & MySQL", "Bootstrap & Tailwind CSS",
            "API Development", "Testing & QA", "Git & GitHub"
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-3"
              whileHover={{ scale: 1.1 }}
            >
              <div className="card text-center p-3 shadow-sm">{skill}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      
      <motion.section
        className="mb-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-secondary">Projects</h2>
        <div className="row">
          {[
            { title: "Car Appointment Booking Website", description: "A full-fledged online garage booking system built using React and PHP.", link: "#" },
            { title: "Kids Shoes E-Commerce", description: "A stylish online shopping platform for kids' shoes built using React and Node.js.", link: "#" },
            { title: "Portfolio Website", description: "A personal portfolio website built using React and Bootstrap.", link: "#" }
          ].map((project, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="card shadow">
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-primary">View Project</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      
      <motion.section
        className="mb-5 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-secondary">Contact Me</h2>
        <p><strong>Email:</strong> shoaibbagwan727@gmail.com</p>
        <p><strong>Phone:</strong> 8669018078</p>
        <p><strong>Instagram:</strong> <a href="https://www.instagram.com/shoaib_bagwan04" target="_blank" rel="noopener noreferrer">@shoaib_bagwan04</a></p>
      </motion.section>
    </div>
  );
};

export default Portfolio;
