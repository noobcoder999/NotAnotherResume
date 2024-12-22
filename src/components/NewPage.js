import React, { useState,useEffect } from "react";
import ReactQuill from "react-quill";
import "./NewPage.css"; // Import your custom CSS
import "react-quill/dist/quill.snow.css"; // Import Quill styles
import { saveAs } from 'file-saver';

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
  const [education, setEducation] = useState("");
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
      education,
      achievements,
      disclaimer,
      hobbies,
      fluency,
    };

    console.log("Sending Data to API:", dataToSend); // Debugging purpose

    try {
      const response = await fetch("https://notanotherresumejava-production.up.railway.app/resume/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
       // const result = await response.json();
       // console.log("API Response:", result);
       const result = await response.blob();
       // Trigger the "Save As" dialog, and allow the user to choose where to save
       saveAs(result, 'resume.pdf'); // You can dynamically pass a name if needed
        alert("Resume generated successfully!");
        // window.location.href = '/';
      } else {
       // console.error("Error:", response.statusText);
        alert("Failed to generate resume.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the request.");
    }
  };

    // List of icon paths (replace with your actual icons from the public/icons folder)
    const iconPaths = [
      "/icons/1.png",
      "/icons/2.png",
      "/icons/3.png",
      "/icons/4.png",
      "/icons/5.png",
      "/icons/6.png",
      "/icons/7.png",
      "/icons/8.png",
      "/icons/9.png",
      "/icons/10.png",
      "/icons/11.png",
      "/icons/12.png",
      "/icons/13.png",
      "/icons/14.png",
      "/icons/15.png",
      "/icons/16.png",

      // Add more icon paths as necessary
    ];

    const [icons, setIcons] = useState([]);

    // Function to generate grid-based positions for icons
    const generateGridPositions = () => {
      const iconElements = [];
      const iconSize = 40; // Fixed size of the icons (width & height)
      const spacing = 90; // Fixed space between icons (50px)
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
  
      // Calculate how many icons can fit horizontally and vertically
      const cols = Math.floor(screenWidth / spacing); // Number of columns
      const rows = Math.floor(screenHeight / spacing); // Number of rows
  
      // Create a grid of icons ensuring no overlap
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const icon = iconPaths[(row * cols + col) % iconPaths.length]; // Reuse icons
          const x = col * spacing;
          const y = row * spacing;
  
          iconElements.push({
            src: icon,
            id: row * cols + col,
            style: {
              top: `${y}px`, // Position the icon vertically
              left: `${x}px`, // Position the icon horizontally
              position: "absolute", // Positioning icons absolutely
              width: `${iconSize}px`, // Set the size of the icons
              height: `${iconSize}px`, // Set the size of the icons
              animationDelay: `${Math.random() * 3}s`, // Random animation delay for appearance/disappearance
            },
          });
        }
      }
  
      setIcons(iconElements);
    };
  
    useEffect(() => {
      generateGridPositions(); // Generate grid-based positions when the component mounts
      window.addEventListener("resize", generateGridPositions); // Recalculate on window resize
  
      return () => {
        window.removeEventListener("resize", generateGridPositions); // Cleanup on component unmount
      };
    }, []);
  

  return (
    <div className="new-page">
       {/* Animated Background with icons */}
       <div className="icon-background">
        {icons.map((icon) => (
          <img
            key={icon.id}
            src={icon.src}
            alt={`icon-${icon.id}`}
            className="background-icon"
            style={icon.style}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="content">
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

   {/* Education */}
      <div className="section box">
        <h2>Education</h2>
        <ReactQuill value={education} onChange={setEducation} placeholder="Add your degree..." />
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
    </div>
  );
}

export default NewPage;
