import React from 'react';
import Project from './Project';

const Projects = props => {
    return(
        <div>
            {props.projects.map(project => {
                return (
                    <div key={project.id}>
                        <Project project={project}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;