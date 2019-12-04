import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useParams, matchPath } from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import VerticalNavigation from '../VerticalNavigation/VerticalNavigation';
import Icon from '../Icon/Icon';
import data from '../../dummyData.json';

class DocSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="banner" id="banner-doc-search">
                <div className="container-extender">
                    <div className="module p25 doc-search self-align-right">
                        <Icon style="search" />
                        <input type="text" className="input-doc-search" placeholder="What are you looking for?"/>
                    </div>

                    {/* <div className="module p50 self-align-right">

                    </div> */}
                </div>
            </section>
        );
    }
}

export default DocSearch;