import React from 'react';

const validation = (props) => {
    
    let validationMessage = 'Text long enough';

    if(props.inputLength <=5) {
        validationMessage = 'Text too short'
    }
    
    
    return(
        <div className="Validation">
        <p>{validationMessage}</p>
        </div>
    );
}

export default validation;