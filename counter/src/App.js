import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterControl from './components/CounterControls/CounterControl';
import CounterOutput from './components/CounterOutput/CounterOutput';

class App extends Component {

  state = {
    counter: 0
  };

  render() {
    return (
      <div className="App">
        <CounterOutput counterValue={this.state.counter}/>
        <CounterControl label="Increment" clicked={()=>this.setState({counter: this.state.counter + 1})}/>
        <CounterControl label="Decrement" clicked={()=>this.setState({counter: this.state.counter - 1})}/>
      </div>
    );
  }
}

export default App;
