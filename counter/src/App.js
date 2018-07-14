import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import CounterControl from './components/CounterControls/CounterControl';
import CounterOutput from './components/CounterOutput/CounterOutput';
import { INC, DEC } from './store/actionTypes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CounterOutput counterValue={this.props.counter}/>
        <CounterControl label="Increment" clicked={this.props.increment}/>
        <CounterControl label="Decrement" clicked={this.props.decrement}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
};

const mapDispatchToProps = dispatch => {
  return {
    increment: ()=>dispatch({type: INC}),
    decrement: ()=>dispatch({type: DEC})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
