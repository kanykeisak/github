import React from 'react';
import classes from './Button.module.css'

const Button = ({label, onClick, color}) => {
    return (
        <button className={classes[color]} onClick={onClick}>{label}</button>
    );
};

export default Button;