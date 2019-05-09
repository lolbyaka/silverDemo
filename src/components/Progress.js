import React from 'react';

const Progress = ({current, count, percent}) => {
    return(
        <div className="progress">
            <div className="progress__result" style={{width: percent + '%'}}></div>
            <div className="progress__counter" style={{left: percent + '%'}}><span>{current}</span>/{count}</div>
        </div>
    );
}
export default Progress;