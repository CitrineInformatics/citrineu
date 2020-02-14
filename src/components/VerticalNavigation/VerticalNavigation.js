import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Icon from '../Icon/Icon';

class VerticalNavigation extends Component {
    constructor(props) {
        super(props);
    }

    get overview() {
        return (
            <li className={`overview`}>
                <Link key="overview" to={ `${this.props.path}` }>
                    <p className="overviewTitle">{ this.props.overviewTitle }</p>
                    <p>{ this.props.overviewDescription }</p>
                </Link>
            </li>
        );
    }

    get navItems() {
        return this.props.data.map((item) => (
            <li className={`bold ${this.props.activeContentId == item.id ? 'active' : ''} nav-item`}>
                <Link key={item.id} to={ `citrineu/${this.props.path}/${item.id}` }>
                    { item.type ? <Icon style={item.type}/> : ''} 
                    <span className="nav-item-title">
                        {item.title}  
                    </span>
                    { this.props.theme == 'robust' ? <p className="nav-item-description">{ item.description }</p> : '' }
                </Link>
            </li>
        ));
    }

    render() {
        return (
            <div className={`module p100 vertical-navigation ${this.props.theme}`}>
                <div className="container">
                    { this.props.includeOverview ? this.overview : '' }
                    <p className="large navItemsTitle">{ this.props.includeNavItemsTitle ? this.props.navItemsTitle : '' }</p>
                    { this.navItems }
                </div>
            </div>
        )
    }
}

export default VerticalNavigation;