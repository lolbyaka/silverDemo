import React from 'react';

const LevelButton = ({active, select, number}) => {
    return(
        <div className={active ? 'level__element level__element--active' : 'level__element'} onClick={select}>{number}</div>
    );
}
export default LevelButton;