import React , { Component } from 'react';
import { BrowserRouter as Router, Route, matchPath } from "react-router-dom";
import VerticalNavigation from '../VerticalNavigation/VerticalNavigation';
import Document from '../Document/Document';
import data from '../../dummyData.json';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    get parentPath() {
        return `/python-client-documentation/${this.props.match.params.sectionId}`;
    }

    generateResourceComponents(resources) {
        return resources.map(resource => 
            <Document document={ document }/>
        );
    }

    render() {
        let section = data.content.documentation.sections.find(section => section.id == this.props.match.params.sectionId);
        console.log(this.props.match.path)
        return (
            <div className="module p100">
                <div className="container">
                    <div class="module p70">
                        <h2 className="mbm">{section.title}</h2>
                        <p>{ section.description }</p>
                    </div>

                    <div class="module p20 self-align-right">
                        <span className="heading bold large pbs">
                            In this Section
                        </span>
                        <VerticalNavigation 
                            theme="compact"
                            data={section.documents}
                            path={this.parentPath}
                            activeContentId={this.props.match.params.docId}/>
                    </div>
           
                    <Route path={`${this.props.match.path}/:docId`} component={Document}/>
                    {/* { this.generateResourceComponents(document.documents) } */}
                </div>
            </div>
        );
    }
}

export default Section;