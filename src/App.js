import React from 'react';
import { useSpring, animated } from 'react-spring';
import './App.css';

function App() {
  // About Me Section Animation
  const aboutProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  // Projects Section Animation
  const projectProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div className="App">
      {/* Left Sidebar (Navbar) */}
      <div className="navbar">
        <h2>My Portfolio</h2>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Main Content Area */}
      <div className="main-content">
        <header className="App-header">
          <h1>Welcome to My Portfolio</h1>
          <p>Full-Stack Developer | Web Designer</p>
        </header>

        <animated.section id="about" style={aboutProps}>
          <h2>About Me</h2>
          <p>Hello! I'm a passionate full-stack developer with experience in building dynamic web applications.</p>
        </animated.section>

        <animated.section id="projects" style={projectProps}>
          <h2>Projects</h2>
          <div className="project-list">
            <div className="project-item">
              <h3>Project 1</h3>
              <p>Project description...</p>
            </div>
            <div className="project-item">
              <h3>Project 2</h3>
              <p>Project description...</p>
            </div>
          </div>
        </animated.section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Email: example@example.com</p>
          <p>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-profile</a></p>
        </section>

        <footer>
          <p>&copy; 2025 Your Name</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
