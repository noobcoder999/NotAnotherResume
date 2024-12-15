import React from "react";
import FloatingHeader from "./FloatingHeader"; // Include header
import "./ResumeForm.css";
import backgroundImage from '../assets/backgroundimg.webp';

const ResumeForm = () => {
  return (
    <div className="resume-forms">
      {/* Header Section */}
      <FloatingHeader />

      {/* Main Content Section */}
      <main className="main-content">
        <div className="card">
          <div className="icon">
            <img
              src="https://cdn-icons-png.flaticon.com/512/337/337946.png" // Sample PDF icon URL
              alt="PDF Icon"
              className="pdf-icon"
            />
          </div>
          <h1 className="title">
          Fed up with hunting down endless resume templates like it's a treasure map? 🗺️ We've got you covered!
          </h1>
          <p className="description">
          Crafting your dream resume has never been this easy (or this fun)! Just give us the details—like you're filling out a really important Mad Lib—and we'll whip up a shiny, ATS-approved masterpiece that screams 'Hire me!' Fast, simple, and so good, even your cat would be impressed!
          </p>
          <div className="button-container">
      <button className="popout-button">Alright, let's turn blanks into brilliance! 📝✨</button>
    </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
          </a>
        </div>
        <p className="footer-text">Privacy Policy · Legal · © 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResumeForm;
