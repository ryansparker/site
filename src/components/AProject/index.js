import React from 'react'
import './index.css'



function AProject(props) {
    console.log(props);
    return (

        <div className="project-item">

            <div className="project-wrapper2">
                <div id="project-left">
                    <img src={props.image} alt="img" className="image" />
                </div>

                <div className="inner" id="project-right">
                    <div className="project-info">
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                        <p className="techInfo">{props.technology}</p>
                    </div>

                    <div className="project-btns">
                        <div className="btnBlock button-page">
                            <a href={props.link} target="_blank" rel="noopener noreferrer">
                                <span className="btn">view page</span>
                            </a>
                        </div>

                        {props.github ?
                            <div className="btnBlock button-github">
                                <a href={props.github} target="_blank" rel="noopener noreferrer">
                                    <span className="btn"><i className="fa fa-github"></i>&nbsp;github</span>
                                </a>
                            </div> : ''}

                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default AProject