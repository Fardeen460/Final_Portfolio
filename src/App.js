import React from 'react';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <div className="styled-section">
          <Skills />
        </div>
        <div className="styled-section alt">
          <Experience />
        </div>
        <div className="styled-section">
          <Education />
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
