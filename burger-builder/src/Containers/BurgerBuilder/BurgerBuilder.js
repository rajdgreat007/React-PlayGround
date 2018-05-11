import React, {Component} from 'react';
import Burger from '../../Components/Burger/Burger';
import Aux from "../../Components/hoc/Aux";
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'

const PRICES = {
    meat : 0.6,
    cheese : 0.5,
    bacon : 0.3,
    celary : 0.1
};
class BurgerBuilder extends Component{
    state = {
      ingredients : {
          meat : 0,
          cheese : 0,
          bacon : 0,
          celary : 0
      },
      totalPrice : 4
    };

    updateDisabledLess = (ingredient, count)=>{
        const disabledLess = {...this.state.disabledLess};
        disabledLess[ingredient] = count === 0;
        this.setState({
            disabledLess : disabledLess
        })
    };

    clickedMore = (ingredient)=>{
        const ingredients = {
            ...this.state.ingredients
        };
        ingredients[ingredient]++;
        const totalPrice = this.state.totalPrice + PRICES[ingredient];
        this.setState({
            ingredients : ingredients,
            totalPrice : totalPrice
        });
        this.updateDisabledLess(ingredient, ingredients[ingredient]);
    };



    clickedLess = (ingredient)=>{
        const ingredients = {
            ...this.state.ingredients
        };
        ingredients[ingredient]--;
        const totalPrice = this.state.totalPrice - PRICES[ingredient];
        this.setState({
            ingredients : ingredients,
            totalPrice : totalPrice
        });
        this.updateDisabledLess(ingredient, ingredients[ingredient]);
    };

    render(){
        const disabledInfo = {...this.state.ingredients};
        for(let key in disabledInfo){
            disabledInfo[key] =  disabledInfo[key]===0;
        }
        return <Aux>
            <Burger ingredients = {this.state.ingredients} />
            <BuildControls clickedMore = {this.clickedMore} clickedLess = {this.clickedLess} disabledInfo={disabledInfo} price={this.state.totalPrice}/>
        </Aux>
    }
}

export default BurgerBuilder;