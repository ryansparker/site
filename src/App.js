import React from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="wrapper">
    <Menu />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;

