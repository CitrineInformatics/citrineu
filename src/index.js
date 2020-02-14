import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import App from './App';
import HorizontalNavigation from './components/HorizontalNavigation/HorizontalNavigation';
import Logo from './components/Logo/Logo';
import Documentation from './components/Documentation/Documentation';
import Tutorials from './components/Tutorials/Tutorials';
import Courses from './components/Courses/Courses';
import Course from './components/Course/Course';
import Discover from './components/Discover/Discover';
import Login from './components/Login/Login';

import * as serviceWorker from './serviceWorker';

const navItems = ['Discover', 'LinkMaster Documentation', 'Tutorials', 'Courses'];

ReactDOM.render(
    <Router>
        <div className="app">
            <div className="background"></div>
            <header className="banner" id="banner-horizontal-navigation">
                <div className="container-extender align-middle">
                    <div className="module">
                        <Logo />
                    </div>

                    <div className="module self-align-right horizontal-navigation">
                        <HorizontalNavigation navItems={navItems}/>
                    </div>
                </div>
            </header>
            
            <Route exact path="/" component={App}/>
            <Route path="/discover" component={Discover}/>
            <Route path="/linkmaster-documentation" component={Documentation}/>
            <Route exact path="/courses" component={Courses}/>
            <Route path="/courses/:courseId" component={Course}/>
            <Route path="/tutorials" component={Tutorials}/>
            {/* <Route path="/login" component={Login}/> */}
        </div>
    </Router>, document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
