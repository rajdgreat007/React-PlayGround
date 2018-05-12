import React from 'react';
import classes from './Modal.css';

const modal = (props)=>{
    return <div className={[classes.Modal, props.showModal? classes.Show : classes.Hide].join(" ")}>
        {props.children}
    </div>
}
export default modal;