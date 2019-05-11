import React from 'react';

export const RegisterErrors = ({formErrors, showErrors}) => {
    return (
        <div className='formErrors'>
            {Object.keys(formErrors).map((fieldName, i) => {
                if(formErrors[fieldName].length > 0 && showErrors){
                    return (<p key={i}>{fieldName} {formErrors[fieldName]}</p>);        
                } else { return ''; }
            })}
        </div>
    )
}