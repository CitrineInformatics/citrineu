import React , { Component } from 'react';
import { BrowserRouter as Router, Route, matchPath, Redirect } from "react-router-dom";
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

    generateDocumentComponents(documents) {
        return documents.map(document => 
            <Document document={ document }/>
        );
    }

    get activeContentId() {
        const matchProfile = matchPath(this.props.location.pathname, {
            path: `/python-client-documentation/:sectionId/:docId`,
        });

        return (matchProfile && matchProfile.params) ? matchProfile.params.docId : '';
    }

    render() {
        let section = data.content.documentation.sections.find(section => section.id == this.props.match.params.sectionId);
        console.log(this.props.match.params.docId)
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
                            activeContentId={this.activeContentId}/>
                    </div>

                    <Route
                        path={`${this.props.match.path}/:docId`}
                        children={(match) => <Document docId={1} sectionId={this.props.match.params.sectionId} {...match}  /> } />
                    

                </div>
            </div>
        );
    }
}

export default Section;
