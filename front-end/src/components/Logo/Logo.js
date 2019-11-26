import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './Logo.css';
import logo from './logo.svg';

class Logo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to="/"><img id="logo" src={logo}></img></Link>
        );
    }
}

export default Logo;