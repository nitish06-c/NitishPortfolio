import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills'
import Experience from './Experience';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;