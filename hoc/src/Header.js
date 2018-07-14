import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return (
            <ul>
                <li><Link path="/">Home</Link></li>
                <li><Link path="/resources">Resources</Link></li>
                <li><Link path="/sign-in">Sign In</Link></li>
            </ul>
        )
    }
}

export default Header;