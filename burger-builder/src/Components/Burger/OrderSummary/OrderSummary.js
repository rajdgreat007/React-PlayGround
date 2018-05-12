import React from 'react';
import classes from './OrderSummary.css';
import Button from '../../UI/Button/Button';
//import Aux from "../../hoc/Aux/Aux";

const orderSummary = (props)=>{
        return <div>
                <h3>Order summary : </h3>
                <ul>
                    {Object.keys(props.ingredients).map((igKey)=>{
                        return <li key={igKey}>{igKey} : {props.ingredients[igKey]}</li>
                    })}
                </ul>
                <h3>Total : ${props.totalPrice.toFixed(2)}</h3>
                <div className={classes.ButtonWrapper}>
                    <Button buttonType="Danger" clicked = {props.cancelClicked}>Cancel</Button>
                    <Button buttonType="Success" clicked = {props.continueClicked}>Continue</Button>
                </div>
            </div>
        
    
}

export default orderSummary;    