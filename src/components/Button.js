import React, { memo } from 'react';

const Button = (props) => {
    console.log('Rendering Button - ', props.children);
    return (
        <button onClick={props.clickHandler}>
            {props.children}
        </button>
    )
}

export default memo(Button)