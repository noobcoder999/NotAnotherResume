import React, { useState } from "react";
import "./ResumeForm.css";
import FloatingHeader from "./FloatingHeader";


function ResumeForm() {
 /* const [formData, setFormData] = useState(
    Array(10).fill("") // Initialize 10 input fields
  );

  const handleChange = (index, value) => {
    const updatedData = [...formData];
    updatedData[index] = value;
    setFormData(updatedData);
  };

  const handleSubmit = () => {
    alert("Resume generation feature coming soon!");
  };

  return (
    <div className="form-container">
      {formData.map((value, index) => (
        <div className="form-group" key={index}>
          <label>Label {index + 1}:</label>
          <input
            type="text"
            placeholder={`Enter information for Label ${index + 1}`}
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </div>
      ))}
      <button className="generate-btn" onClick={handleSubmit}>
        Generate Resume
      </button>
    </div>
  );
}
*/

return (
  <div className="resume-forms">
    {/* Header Section */}
    {/* <FloatingHeader /> */}
    {/* <header className="header">
      <button className="get-started-button">Get started</button>
    </header> */}

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
          Tired of searching for countless Resume templates?
        </h1>
        <p className="description">
          Our Resume Creator makes it easy to build a professional,
          ATS-friendly resume in minutes. Just fill out simple inputs, and
          we’ll generate a clean, optimized resume to help you stand out to
          employers. Simple, fast, and effective!
        </p>
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
