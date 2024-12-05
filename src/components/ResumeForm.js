import React, { useState } from "react";
import "./ResumeForm.css";

function ResumeForm() {
  const [formData, setFormData] = useState(
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

export default ResumeForm;
