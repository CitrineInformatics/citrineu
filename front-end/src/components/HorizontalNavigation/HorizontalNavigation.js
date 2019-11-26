import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class HorizontalNavigation extends Component {
    constructor(props) {
        super(props);
    }

    /** 
     * Uses JS's built in map function to generate a <div> for each item
     * passed to the HorizontalNav component via props.navItems
     * @return jsx <div> elements from map function
     */
    generateNavItems() {
        return this.props.navItems.map((item) => (
            <div className="module plm">
                <Link key={item.indexOf()} to={ `/${item.toLowerCase().replace(/\s/g, '-')}` }>{item}</Link>
            </div>
        ));
    }

    render() {
        return (
            <div className="container bold large">
                { this.generateNavItems() }
            </div>
        );
    }
}

export default HorizontalNavigation;