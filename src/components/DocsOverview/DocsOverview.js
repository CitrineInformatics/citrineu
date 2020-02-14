import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '../Button/Button';
import Loading from '../Loading/Loading';

class DocsOverview extends Component {
    render() {
        const documentation = this.props.documentation;
        return (
            <div className="module p100">
                {
                    documentation !== undefined
                    ? <div className="container">
                        <div class="module p70 prl">
                            <h2 className="mbm">{documentation.title}</h2>

                            <div className="module large">
                                <p className="pbs">Welcome to <span className="italic">{documentation.title}</span>.</p>
                                <p>{documentation.description}</p>
                            </div>

                            <Link to={`${this.props.match.url}/${documentation.sections[0].id}`}>
                                <Button
                                    theme="light"
                                    text="Start Exploring" />
                            </Link>
                        </div>

                        <div class="module p30">
                            <p className="heading bold large mbs">Related Content</p>
                            {documentation.relatedContent}
                        </div>
                    </div>
                : <Loading />
                }
            </div>
           
        );
    }
}

export default DocsOverview;