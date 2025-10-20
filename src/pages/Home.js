import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header className="hero">
        <div className="overlay">
          <h1 className="title">Welcome to <span>My Academy</span></h1>
          <p className="subtitle">
            Learn AI, IT, and School Concepts with Simplicity and Clarity.
          </p>
          <Link to="/notes" className="cta-btn">Explore Notes</Link>
        </div>
      </header>

      <section className="intro">
        <h2>About Me</h2>
        <p>
          Hi, I'm <strong>Nikhil Kumar Rana</strong> — passionate about technology,
          AI, and education. My goal is to make learning easy and interesting
          for every student. Here you’ll find high-quality notes, concept
          breakdowns, and curated video lessons from Class 9 to 12.
        </p>
      </section>

      <section className="features">
        <h2>Why Study With Me?</h2>
        <div className="cards">
          <div className="card">
            <h3>📘 Easy-to-Understand Notes</h3>
            <p>Concise and exam-focused notes to help you study smartly.</p>
          </div>
          <div className="card">
            <h3>🎥 Video Guidance</h3>
            <p>Learn through selected YouTube videos that simplify tough concepts.</p>
          </div>
          <div className="card">
            <h3>💡 Updated Daily</h3>
            <p>New topics and resources are added every day to keep your learning fresh.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Start Learning?</h2>
        <Link to="/notes" className="cta-btn">Go to Notes</Link>
      </section>
    </div>
  );
}

export default Home;
