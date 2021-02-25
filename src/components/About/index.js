import React from 'react';
import './index.css';





function About() {
    return (

        <div className="box" id="about-box">

            <div className="about-items">

                <div id="about-left">
                    <h1 className="about-h1">about</h1>
                    <img src="images/bio.png" className="bio" />
                    
                    <img src="images/img-element1.png" className="element" />
                </div>

                <div className="inner" id="about-right">
                    <p>Front-end developer with a background in art, design, and education.
                    Many of my skills as a <a href="http://www.ryan-parker.com" id="art" target="_blank" rel="noopener noreferrer">printmaking artist</a> and textile designer transfer into my work in coding: craftsmanship, organization,
                    experimentation, and collaboration. I’m looking for a role as a web developer at a company where I can
                    learn, grow, and continue to master the craft.
                    <br /><br />
                    Recently received a Full Stack Development certificate from the University of
                    Pennsylvania with skills in HTML5, CSS3, Javascript, Node
                    Js, Express, and React.</p>
                    <div className="about-buttons">
                        <a href="/assets/Parker-Ryan-resume-2020.pdf" target="_blank" rel="noopener noreferrer">
                            <span className="btn">resume</span>
                        </a>
                    </div>
                </div>
            </div>
            <div>

            </div>


        </div>

    )
}

export default About