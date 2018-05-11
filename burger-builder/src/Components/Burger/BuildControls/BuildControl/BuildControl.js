import React from 'react';
import classes from './BuildControl.css';
const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div>{props.label}</div>
            <button onClick={()=>{props.clickedLess(props.type)}} disabled={props.disabled}>-</button>
            <button onClick={()=>{props.clickedMore(props.type)}}>+</button>
        </div>
    )
};
export default buildControl;