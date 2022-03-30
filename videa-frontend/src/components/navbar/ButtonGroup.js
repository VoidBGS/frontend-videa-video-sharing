import React from 'react';

const ButtonGroup = (props) =>{
    return (
        <div className='button-group-box'>
            {props.children}
        </div>
    );
}

export default ButtonGroup;