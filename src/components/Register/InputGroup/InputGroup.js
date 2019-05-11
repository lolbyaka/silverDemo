import React from 'react';

const InputGroup = React.forwardRef(({name, type, text, changeCallback, validationClass}, ref) => {
    return(
        <div className={`group ${validationClass}`}>      
            <input type={type} name={name} required ref={ref} onChange={changeCallback}/>
            <span className="highlight"></span>
            <label>{text}</label>
        </div>
    );
})
export default InputGroup;