import React from "react";
import "./FloatingHeader.css";

const FloatingHeader = () => {
  const words = ["Experience", "Summary", "Skills", "Passion", "Projects", "Leadership", "Teamwork"];

  return (
    <div className="floating-header">
      <h1 className="funky-title">Not Another Resume</h1>
      <div className="sparkle-container">
        {words.map((word, index) => (
          <span key={index} className="sparkle-word">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FloatingHeader;
