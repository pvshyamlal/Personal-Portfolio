import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // Detect screen size to reset navbar state
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);  // Navbar will be open on desktop
      } else {
        setIsOpen(false); // Navbar closed on mobile by default
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call once on initial load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={toggleNavbar} style={{ backgroundColor: isOpen ? "#00adb5" : "#222831" }}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar */}
      <div className={`navbar ${isOpen ? "open" : ""}`}>
        <div className="profile">
          <img
            src="https://res.cloudinary.com/dwwpovlcs/image/upload/fl_preserve_transparency/v1717385123/lttms5pdcvvorus9x9ru.jpg?_s=public-apps" // Replace with your image URL
            alt="Profile"
          />
          <h2>PALLAVARAM SHYAM SUNDAR LAL</h2>
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`main-content ${isOpen ? "shifted" : ""}`}>
        <section id="home">
          <h1>Welcome to My Portfolio</h1>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <p>Here are some of my featured projects.</p>
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>I am a passionate developer.</p>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: example@example.com</p>
        </section>
      </div>
    </div>
  );
}

export default App;
