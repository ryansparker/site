import React from 'react';
import './index.css';

function Contact() {
  return (
    <div className="box" id="contact-box">

      <main className="inner" id="contact-wrapper">

        <div className="inner" id="contact-items">
          <div className="inner" id="contact-left">
            <h1>contact</h1>
            <img src="images/img-element2.png" className="element2" />
          </div>

          <div className="inner" id="contact-right">
            <h2><a href="mailto:ryansparker@gmail.com" className="left">ryansparker@gmail.com</a></h2>
            <h2>267 978 4916</h2>
            <div className="contact-buttons">
              <a href="https://github.com/ryansparker" target="_blank" rel="noopener noreferrer">
                <span className="btn">github</span>
              </a>
              <a href="https://www.linkedin.com/in/parkerrs/" target="_blank" rel="noopener noreferrer">
                <span className="btn">linkedin</span>
              </a>
              <a href="https://www.instagram.com/rysparker/" target="_blank" rel="noopener noreferrer">
                <span className="btn">instagram</span>
              </a>
            </div>

          </div>
        </div>
      
      </main>

    </div>
  )
}

export default Contact;