import React from 'react';
import AProject from '../AProject';
import projectsData from '../../projectsData.json'
import './index.css';

function Projects() {
    
    const projectComponents = projectsData.map(function(project){
        return (
            <AProject 
            key={project.id}
            name={project.name} 
            description={project.description} 
            technology={project.technology}
            image={project.image} 
            link={project.link} 
            github={project.github} />
        )
    })
    

    return(

        <div className="box" id="project-box">
            <div className="project-wrapper">
                <div className="project-title">
                <h1 className="project-h1">projects</h1>
                </div>

                {projectComponents}
            </div>
        </div>
       
    )
}

export default Projects