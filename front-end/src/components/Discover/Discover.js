import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useParams, matchPath } from "react-router-dom";
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import VerticalNavigation from '../VerticalNavigation/VerticalNavigation';
import Guide from '../Guide/Guide';
import DocSearch from '../DocSearch/DocSearch';
import data from '../../dummyData.json';

class Discover extends Component {
    constructor(props) {
        super(props);
    }

    get activeContentId() {
        const matchProfile = matchPath(this.props.location.pathname, {
            path: `/discover/:guideId`,
        });

        console.log(matchProfile)

        return (matchProfile && matchProfile.params) ? matchProfile.params.docId : null;
    }

    getRoute(guides, path) {
        const guide = guides.find(guide => guide.id == this.activeContentId);

        return (guide && guide.auth_required) 
        ? <PrivateRoute path={`${path}/:guideId`} component={Guide}/> 
        : <Route path={`${path}/:guideId`} component={Guide}/>
    }

    render() {
        const guides = data.content.discover;
        const path = this.props.match ? this.props.match.path : this.props.path;

        return (
            <div>
                <DocSearch />
                <section className="banner" id="banner-documentation">
                    <div className="container">
                        <div className="module p50 prm">
                            <h2 className="mbm">Discover Citrine</h2>
                            <VerticalNavigation theme="robust" path={this.props.match.url} data={guides}/>
                        </div>
                        <div className="module p50">
                            { this.getRoute(guides, path) }
                        </div>
                    </div>
                </section>
            </div>
            
        );
    }
}

export default Discover;