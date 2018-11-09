import React from 'react';
import Actions from './Actions';

const Project = props => {
    return(
        <div>
            <h2>{props.project.name}</h2>
            <p>{props.project.description}</p>
            <Actions />
        </div>
    )
}

export default Project;