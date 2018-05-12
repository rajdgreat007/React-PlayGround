import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import Aux from "../../Components/hoc/Aux";
import Modal from "../../Components/UI/Modal/Modal";

import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const PRICES = {
    meat: 0.6,
    cheese: 0.5,
    bacon: 0.3,
    celary: 0.1
};
class BurgerBuilder extends Component {
    state = {
        ingredients: {
            meat: 0,
            cheese: 0,
            bacon: 0,
            celary: 0
        },
        totalPrice: 4,
        orderable: false,
        showModal: false
    };

    clickedMore = (ingredient) => {
        const ingredients = {
            ...this.state.ingredients
        };
        ingredients[ingredient]++;
        const totalPrice = this.state.totalPrice + PRICES[ingredient];
        this.setState({
            ingredients: ingredients,
            totalPrice: totalPrice
        });
        this.updateOrderable(ingredients);
    };



    clickedLess = (ingredient) => {
        const ingredients = {
            ...this.state.ingredients
        };
        ingredients[ingredient]--;
        const totalPrice = this.state.totalPrice - PRICES[ingredient];
        this.setState({
            ingredients: ingredients,
            totalPrice: totalPrice
        });
        this.updateOrderable(ingredients);
    };

    updateOrderable = (ingredients) => {
        const sum = Object.values(ingredients).reduce((sum, current) => {
            return sum + current;
        }, 0);
        this.setState({
            orderable: sum !== 0
        })
    };

    checkoutClicked = () => {
        this.setState({
            showModal: true
        })
    };

    cancelPurchase =()=>{
        this.setState({
            showModal: false
        })
    };

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0;
        }
        return <Aux>
            <Burger ingredients={this.state.ingredients} />
            <Modal showModal={this.state.showModal}>
                <OrderSummary ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} 
                    cancelClicked = {this.cancelPurchase} continueClicked = {this.continuePurchase}    
                />
            </Modal>
            <BuildControls clickedMore={this.clickedMore} clickedLess={this.clickedLess}
                disabledInfo={disabledInfo} price={this.state.totalPrice} orderable={this.state.orderable}
                checkoutClicked={this.checkoutClicked}
            />
        </Aux>
    }
}

export default BurgerBuilder;