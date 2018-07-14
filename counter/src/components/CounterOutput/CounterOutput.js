import React from 'react';
import './CounterOutput.css';
const CounterOutput = (props)=>{
    return <div className="output">{props.counterValue}</div>
}
export default CounterOutput;