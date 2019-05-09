import React from 'react';

const InputGroup = React.forwardRef(({type, text}, ref) => {
    return(
        <div className="group">      
            <input type={type} required ref={ref}/>
            <span className="highlight"></span>
            <label>{text}</label>
        </div>
    );
})
export default InputGroup;