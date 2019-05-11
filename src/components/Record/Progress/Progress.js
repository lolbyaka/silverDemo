import React from 'react';

const Progress = ({current, count, percent, lastStep}) => {
    return(
        <div className="progress">
            <div className="progress__result" style={{width: percent + '%'}}></div>
            <div className="progress__counter" style={{left: lastStep ? '95%' : percent + '%'}}><span>{current + 1}</span>/{count}</div>
        </div>
    );
}
export default Progress;