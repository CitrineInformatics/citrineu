import React , { Component } from 'react';
import Icon from '../Icon/Icon';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="banner" id="banner-progress-bar">
                <div className="container-extender">
                    <div className="module progress-bar" style={{width:this.props.progress + '%'}}>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProgressBar;