import React from "react";
import FloatingHeader from "./FloatingHeader"; // Include header
import "./ResumeForm.css";
import { useNavigate } from "react-router-dom";

const ResumeForm = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/newpage"); // Redirects to NewPage
  };

  return (
    <div className="resume-forms">
      {/* Header Section */}
      <FloatingHeader />

      {/* Main Content Section */}
      <main className="main-content">
        <div className="card">
          <div className="icon">
            <img
              src={`${process.env.PUBLIC_URL}/icons/output-onlinepngtools.png`} // Sample PDF icon URL
              alt="PDF Icon"
              className="pdf-icon"
              style={{ width: '100px', height: '100px' ,float: 'left'}} // Adjust the size here
            />
          </div>
          <h1 className="title">
          Fed up with hunting down endless resume templates like it's a treasure map? 🗺️ We've got you covered!
          </h1>
          <p className="description">
          Crafting your dream resume has never been this easy (or this fun)! Just give us the details—like you're filling out a really important Mad Lib—and we'll whip up a shiny, ATS-approved masterpiece that screams 'Hire me!' Fast, simple, and so good, even your cat would be impressed!
          </p>
          <div className="button-container">
      <button className="popout-button" onClick={handleButtonClick}>Alright, let's turn blanks into brilliance! 📝✨</button>
    </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>👇 Get to Know Us 👇</p>
        <div className="social-icons">
          <a href=" https://www.linkedin.com/in/vennela-vollala-a5bb68201" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
          </a>
          <a href="https://www.linkedin.com/in/david-kumar-56836b166/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" />
          </a>
          
        </div>
        <p className="footer-text">Privacy Policy · Legal · © 2024. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ResumeForm;
