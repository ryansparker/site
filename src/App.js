import React from 'react';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
    <Menu />
    <Home />
    <About />
    <Footer />
    </div>
  );
}

export default App;

{/* <img src={logo} className="App-logo" alt="logo" /> */}