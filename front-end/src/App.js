import React, {Component} from 'react';

import VerticalNavigation from './components/VerticalNavigation/VerticalNavigation';
import Button from './components/Button/Button';
import Courses from './components/Courses/Courses'

import './paint.scss';
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <section className="banner" id="banner-welcome">
                    <div className="container">
                        <div className="module p60">
                            <h2 className="x2 mbm">THE AI PLATFORM FOR MATERIALS DEVELOPMENT</h2>
                            <p className="xl">The Citrine Platform empowers your teams to develop new high-performance materials and chemicals faster than ever before.</p>
                            <Button theme="dark" text="Start Learning"/>
                        </div>
                    </div>
                </section>

                <Courses path={this.props.match.path}/>
            </div>
        );
    }
}

export default App;
