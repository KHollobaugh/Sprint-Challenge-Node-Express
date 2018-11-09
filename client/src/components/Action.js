import React from 'react';


const Action = props => {
    return(
        <div>
            <p>{props.action.description}</p>
            <p>{props.action.notes}</p>
        </div>
    )
}

export default Action;