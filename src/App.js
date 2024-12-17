// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ResumeForm from "./components/ResumeForm";
import NewPage from "./components/NewPage";
import FloatingHeader from "./components/FloatingHeader";

function App() {
  const words = [
    "Resume",
    "Career",
    "IT",
    "Technology",
    "Skills",
    "Professional",
    "Experience",
    "Portfolio",
    "React",
    "Frontend",
    "Backend",
    "Developer",
    "Projects",
    "Web Development",
    "JavaScript",
    "Full Stack",
    "UI/UX",
    "Design",
    "Innovation",
  ];
  return (
    <Router>
      <div className="app-container">
        {/* Optional Header with FloatingHeader */}
        {/* Uncomment if needed */}
        {/* <header className="app-header">
          <FloatingHeader />
        </header> */}

        <main>
          <Routes>
            {/* Route for ResumeForm */}
            <Route path="/" element={<ResumeForm />} />

            {/* Route for NewPage */}
            <Route path="/newpage" element={<NewPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
