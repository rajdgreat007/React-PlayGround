import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.css';
import BurgerBuilder from "../../Containers/BurgerBuilder/BurgerBuilder";

const burger = (props)=>{
    let transformedIngredients = Object.keys(props.ingredients).map((igKey)=>{
       return [...Array(props.ingredients[igKey])].map((_,idx)=>{
           return <BurgerIngredient key={igKey+idx} type = {igKey}/>
       });
    }).reduce((arr, el)=>{
        return arr.concat(el);
    }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients</p>
    }

    //Alternative of above code
    /*let transformedIngredients = [];
    for(let key in props.ingredients){
        const num = props.ingredients[key];
        for(let i=0;i<num;i++){
            transformedIngredients.push(
                <BurgerIngredient key={key+i} type={key} />
            );
        }
    }*/


    return <div className={classes.Burger}>
        <BurgerIngredient type="bread-top"/>
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom"/>
    </div>
};
export default burger;