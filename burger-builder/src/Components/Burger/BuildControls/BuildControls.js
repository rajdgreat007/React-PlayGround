import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const buildControls = (props)=>{
    const controls = [
        {label : 'Meat', type : 'meat'},
        {label : 'Bacon', type : 'bacon'},
        {label : 'Celary', type : 'celary'},
        {label : 'Cheese', type : 'cheese'},
    ];

    const buildControl = controls.map((ctr, idx)=>{
        return <BuildControl
            label={ctr.label}
            key={ctr.label}
            type={ctr.type}
            clickedMore = {props.clickedMore}
            clickedLess = {props.clickedLess}
            disabled = {props.disabledInfo[ctr.type]}
        />
    });

    return <div className={classes.BuildControls}>
        <p style={{fontWeight:'bold', textAlign : 'center'}}>Total price : $ {props.price.toFixed(2)}</p>
        {buildControl}
    </div>
};
export default buildControls;