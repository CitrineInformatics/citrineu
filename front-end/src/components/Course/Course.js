import React, { Component } from 'react';
import { BrowserRouter as Router, Route, matchPath } from "react-router-dom";
import VerticalNavigation from '../VerticalNavigation/VerticalNavigation';
import Stage from '../Stage/Stage';
import Step from '../Step/Step';
import CourseOverview from '../CourseOverview/CourseOverview';
import ProgressBar from '../ProgressBar/ProgressBar';
import data from '../../dummyData.json';

class Course extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // In reality, I would fetch from API here

        // fetch('/apidata.json')
        //     .then(response => response.json())
        //     .then(data => this.setState({ courses: data }));
    }

    get activeContentId() {
        const matchProfile = matchPath(this.props.location.pathname, {
            path: `/courses/:courseId/:stageId`,
        });

        return (matchProfile && matchProfile.params) ? matchProfile.params.stageId : "";
    }

    render() {
        const course = data.content.educationalContent.find(course => course.id == this.props.match.params.courseId);
        const progress = parseInt((this.activeContentId/course.stages.length) * 100);

        return (
            <div>
                <ProgressBar progress={progress}/>
                <section className="banner" id="banner-course">
                    <div className="container">
                        <div className="module p30 prl">
                            <VerticalNavigation 
                                path={ this.props.match.url }
                                includeOverview={true}
                                overviewTitle="In this Course"
                                overviewDescription={ course.description }
                                data={ course.stages }
                                theme="standard"
                                activeContentId={this.activeContentId}/>
                        </div>
                        <div className="module per70">
                            <Route exact path={`${this.props.match.path}`} component={CourseOverview}/>
                            <Route exact path={`${this.props.match.path}/:stageId`} component={Stage}/>
                            <Route path={`${this.props.match.path}/:stageId/:stepId`} component={Step}/>
                        </div>
                    </div>    
                </section>
            </div>
        );
    }
}

export default Course;