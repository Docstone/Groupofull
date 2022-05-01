import React from 'react';

const Button = (props) => {
    return (
        <button className={props.cname}>{props.children}</button>
    );
}

export default Button;
