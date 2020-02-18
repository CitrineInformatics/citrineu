import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useParams, matchPath } from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import VerticalNavigation from '../VerticalNavigation/VerticalNavigation';
import Section from '../Section/Section';
import DocSearch from '../DocSearch/DocSearch';
import DocsOverview from '../DocsOverview/DocsOverview';
import documentation from '../../lm.json'

class Documentation extends Component {
    constructor(props) {
        super(props);
    }

    get activeContentId() {
        const matchProfile = matchPath(this.props.location.pathname, {
            path: `/citrineu/linkmaster-documentation/:docId`,
        });

        return (matchProfile && matchProfile.params) ? matchProfile.params.docId : 0;
    }

    getRoute(documentation, path) {
        return (document && document.auth_required) 
        ? <PrivateRoute exact path={`${path}/:sectionId`} component={Section}/> 
        : <Route exact path={`${path}/:sectionId`} component={Section}/>
    }

    render() {
        //const documentation = data.content.documentation;
        const path = this.props.match ? this.props.match.path : this.props.path;

        return (
            <div>
                {/* <DocSearch /> */}
                <section className="banner" id="banner-documentation">
                    <div className="container">
                        { 
                        // DELETE THIS PART UP UNTIL NEXT COMMENT BLOCK AFTER DM1/WHEN CONTENT IS READY
                        }
                        {/* <div className="module p50 prm">
                            <h2 className="mbm">API Documentation</h2>

                            <p className="large">The API Documentation section of CitrineU will feature robust and user-friendly CitrinePython documentation to guide your code-based efforts on the CitrinePlatform. As CitrineU grows, this section will grow as well. Please check back soon.</p>
                        </div> */}
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
                                <Route exact path={`${this.props.match.path}`} render={(props) => <DocsOverview {...props} documentation={documentation}/>} />
                                <Route path={`${this.props.match.path}/:sectionId`} component={Section}/>
                            </div> 
                    </div>
                </section>
            </div>
            
        );
    }
}

export default Documentation;