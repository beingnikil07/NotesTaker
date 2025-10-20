import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="hero-about">
        <h1>Hi, I'm Nikhil Kumar Rana</h1>
        <p>AI & IT Enthusiast | Educator | Developer | Lifelong Learner</p>
      </section>

      {/* About Me */}
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          I am passionate about AI, IT, and helping students learn concepts
          effectively. Through my notes, tutorials, and projects, I aim to make
          learning easier, practical, and engaging for students from Class 9 to 12.
          I also explore AI advancements and work on personal coding projects.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills & Expertise</h2>
        <div className="skills-list">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>React</span>
          <span>MySQL</span>
          <span>Data Structures & Algorithms</span>
          <span>Machine Learning</span>
          <span>Big Data Computing</span>
          <span>Docker</span>
          <span>Hibernate</span>
          <span>Jenkins</span>
        </div>
      </section>

      {/* Social Links */}
      <section className="social-links">
        <h2>Connect With Me</h2>
        <a
          href="https://www.linkedin.com/in/nikilkumar07/"
          target="_blank"
          rel="noreferrer"
          className="btn linkedin"
        >
          LinkedIn
        </a>
        <a
          href="https://nikhilrana07.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="btn portfolio"
        >
          Portfolio
        </a>
      </section>

      {/* Contact */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:kumarnikil220@gmail.com">kumarnikil220@gmail.com</a></p>
      </section>
    </div>
  );
}

export default About;
