import React, { useState, useEffect } from 'react';
import './index.css';


function Menu() {

  const [highlighted, setHighlight] = useState(false);
  const [menuToggled, setMenuToggled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeMenu);

    function changeMenu(event) {
      setHighlight(window.scrollY > 500);
    }



  }, []);

  function toggleMenu(event){
    event.preventDefault();
    if (menuToggled===true) {
      setMenuToggled(false);
    }else {
      setMenuToggled(true);
    }
  }
 

  return (
    <header className={`flex-nav ${highlighted ? "highlighted" : ""}`} >
      <a href="#" onClick={ toggleMenu } className="toggleNav">☰</a>
      <ul className={`menuList ${menuToggled ? "toggled" : ""}`} >
        <li className="home"><a href="#box-home" >ryan parker</a></li>
        <li className="spacer" />
        <li><a href="#about-box" className="left">about</a></li>
        <li><a href="#project-box" className="left">projects</a></li>
        <li><a href="#contact-box" className="left">contact</a></li>
      </ul>
    </header>
  )
}

export default Menu