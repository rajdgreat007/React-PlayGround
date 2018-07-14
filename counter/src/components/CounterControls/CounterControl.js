import React from 'react';
import './CounterControl.css';

const CounterControl = (props) => {
    return (
        <button className="control" onClick={props.clicked}>
            {props.label}
        </button>
    );
};

export default CounterControl;