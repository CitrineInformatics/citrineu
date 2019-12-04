import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useParams, matchPath } from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import VerticalNavigation from '../VerticalNavigation/VerticalNavigation';
import Section from '../Section/Section';
import Document from '../Document/Document';
import DocSearch from '../DocSearch/DocSearch';
import data from '../../dummyData.json';

class Documentation extends Component {
    constructor(props) {
        super(props);
    }

    get activeContentId() {
        const matchProfile = matchPath(this.props.location.pathname, {
            path: `/python-client-documentation/:docId`,
        });

        return (matchProfile && matchProfile.params) ? matchProfile.params.docId : null;
    }

    getRoute(documentation, path) {
        return (document && document.auth_required) 
        ? <PrivateRoute exact path={`${path}/:sectionId`} component={Section}/> 
        : <Route exact path={`${path}/:sectionId`} component={Section}/>
    }

    render() {
        const documentation = data.content.documentation;
        const path = this.props.match ? this.props.match.path : this.props.path;

        return (
            <div>
                <DocSearch />
                <section className="banner" id="banner-documentation">
                    <div className="container">
                        <div className="module p30 prl">
                            <VerticalNavigation 
                                theme="standard"
                                includeOverview={true}
                                overviewTitle="In this Guide"
                                overviewDescription={documentation.description} 
                                path={this.props.match.url} 
                                data={documentation.sections}
                                activeContentId={this.activeContentId}/>
                        </div>
                        <div className="module p70">
                            <Route path={`${this.props.match.path}/:sectionId`} component={Section}/>
                        </div>
                    </div>
                </section>
            </div>
            
        );
    }
}

export default Documentation;