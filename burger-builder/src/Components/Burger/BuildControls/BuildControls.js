import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';
import Button from '../../UI/Button/Button';

const buildControls = (props)=>{
    const controls = [
        {label : 'Meat', type : 'meat'},
        {label : 'Bacon', type : 'bacon'},
        {label : 'Celary', type : 'celary'},
        {label : 'Cheese', type : 'cheese'}
    ];

    return <div className={classes.BuildControls}>
        <p style={{fontWeight:'bold', textAlign : 'center'}}>Total price : $ {props.price.toFixed(2)}</p>
        {controls.map((ctr, idx)=>{
            return <BuildControl
                label={ctr.label}
                key={ctr.label}
                type={ctr.type}
                clickedMore = {props.clickedMore}
                clickedLess = {props.clickedLess}
                disabled = {props.disabledInfo[ctr.type]}
            />
        })}
        <Button buttonType="Success" disabled={!props.orderable} clicked={props.checkoutClicked}>Checkout</Button>
    </div>
};
export default buildControls;