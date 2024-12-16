import React, { useState } from "react";
import ReactQuill from "react-quill";
import "./NewPage.css"; // Import your custom CSS
import "react-quill/dist/quill.snow.css"; // Import Quill styles

function NewPage() {
  // State management for input fields
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    websites: "",
  });

  // State for rich text fields
  const [summary, setSummary] = useState("");
  const [competencies, setCompetencies] = useState("");
  const [experience, setExperience] = useState("");
  const [achievements, setAchievements] = useState("");
  const [disclaimer, setDisclaimer] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [fluency, setFluency] = useState("");

  // Handle regular input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Generate Button Click Handler
  const handleGenerate = async () => {
    const dataToSend = {
      ...formData,
      summary,
      competencies,
      experience,
      achievements,
      disclaimer,
      hobbies,
      fluency,
    };

    console.log("Sending Data to API:", dataToSend); // Debugging purpose

    try {
      const response = await fetch("https://example.com/api/xyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("API Response:", result);
        alert("Resume generated successfully!");
      } else {
        console.error("Error:", response.statusText);
        alert("Failed to generate resume.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the request.");
    }
  };

  return (
    <div className="new-page">
      {/* Header Section */}
      <div className="section box">
        <h2>Header</h2>
        <div className="input-group">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Summary Section */}
      <div className="section box">
        <h2>Summary</h2>
        <ReactQuill value={summary} onChange={setSummary} placeholder="Write your summary here..." />
      </div>

      {/* Competencies Section */}
      <div className="section box ">
        <h2>Competencies</h2>
        <ReactQuill value={competencies} onChange={setCompetencies} placeholder="Add competencies..." />
      </div>

      {/* Professional Experience */}
      <div className="section box">
        <h2>Professional Experience</h2>
        <ReactQuill value={experience} onChange={setExperience} placeholder="Describe your experience..." />
      </div>

      {/* Websites, Portfolios, Profiles */}
      <div className="section box">
        <h2>Websites, Portfolios, Profiles</h2>
        <input
        className="wide-input"
          type="text"
          name="websites"
          placeholder="Add links here..."
          value={formData.websites}
          onChange={handleChange}
        />
      </div>

      {/* Achievements */}
      <div className="section box">
        <h2>Achievements</h2>
        <ReactQuill value={achievements} onChange={setAchievements} placeholder="List your achievements..." />
      </div>

      {/* Disclaimer */}
      <div className="section box">
        <h2>Disclaimer</h2>
        <ReactQuill value={disclaimer} onChange={setDisclaimer} placeholder="Add a disclaimer..." />
      </div>

      {/* Hobbies and Interests */}
      <div className="section box">
        <h2>Hobbies and Interests</h2>
        <ReactQuill value={hobbies} onChange={setHobbies} placeholder="List your hobbies and interests..." />
      </div>

      {/* Fluency */}
      <div className="section box">
        <h2>Fluency</h2>
        <ReactQuill value={fluency} onChange={setFluency} placeholder="Mention languages you are fluent in..." />
      </div>

      <div className="button-container">
  <button className="funky-button" onClick={handleGenerate}>Generate</button>
</div>

    </div>
  );
}

export default NewPage;
