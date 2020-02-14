import React , { Component } from 'react';
import Icon from '../Icon/Icon';
import Loader from './loader.gif';

class Loading extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="banner" id="banner-loading">
                <div className="container-extender align-center text-center">
                    <div className = "module p10">
                        <img className="loader"src={Loader} alt="loading..." />
                    </div>
                    <div className="module p100">
                        <h1>Hold tight, this page is loading!</h1>
                    </div>
                </div>
            </section>
        );
    }
}

export default Loading;