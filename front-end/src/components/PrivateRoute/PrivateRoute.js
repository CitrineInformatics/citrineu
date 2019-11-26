import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, useParams } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    //   fakeAuth.isAuthenticated === true
    //     ? <Component {...props} />
    //     : <Redirect to={{
    //         pathname: '/login',
    //         state: { from: props.location }
    //       }} />
    )} />
);

export default PrivateRoute;