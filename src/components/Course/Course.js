import React, { Component } from 'react';
import { BrowserRouter as Router, Route, matchPath } from "react-router-dom";
import VerticalNavigation from '../VerticalNavigation/VerticalNavigation';
import Stage from '../Stage/Stage';
import Step from '../Step/Step';
import CourseOverview from '../CourseOverview/CourseOverview';
import ProgressBar from '../ProgressBar/ProgressBar';
import Loading from '../Loading/Loading';
import data from '../../dummyData.json';

class Course extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            progress: 0
        }
        this.url = "https://citrineu.herokuapp.com/api"
        this.url2 = "http://localhost:5000/api"
    }

    componentDidMount() {
        fetch(`${this.url2}/v1/educational_resources/${this.props.match.params.courseId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    resource: data.resources[0]
                })
            })
            .then( () => {
                const stageIds = this.state.resource.stages.join(',');
                fetch(`${this.url2}/v1/stages?ids=${stageIds}`)
                    .then(response => response.json())
                    .then(data => {
                        
                        this.setState({ 
                            stages: data.stages,
                            loading: false,
                            progress: parseInt((1/data.stages.length) * 100)
                        })
                    });
            });
        
        
    }

    get activeContentId() {
        const matchProfile = matchPath(this.props.location.pathname, {
            path: `citrineu/courses/:courseId/:stageId`,
        });

        return (matchProfile && matchProfile.params) ? matchProfile.params.stageId : this.state.stages[0].id;
    }

    get progress() {
        // console.log(this.activeContentId)
        // const currentStage = this.activeContentID === undefined ? data.stages[0] : this.activeContentId;
                        
        const progress = this.state.stages.find(stage => stage.id == this.activeContentId).order;
        return parseInt((progress/this.state.stages.length) * 100)
    }

    render() {
        console.log('rerender')
        //const course = data.content.educationalContent.find(course => course.id == this.props.match.params.courseId);
        const course = this.state.resource;
        const stages = this.state.stages;

        return (
            <div>
                {
                    stages
                    ? <div><ProgressBar progress={this.progress}/>
                    <section className="banner" id="banner-course">
                        <div className="container">
                            <div className="module p30 prl">
                                <VerticalNavigation 
                                    path={ this.props.match.url }
                                    includeOverview={true}
                                    overviewTitle="In this Course"
                                    overviewDescription={ course.description }
                                    includeNavItemsTitle={true}
                                    navItemsTitle="Course Sections"
                                    data={ stages }
                                    theme="standard"
                                    activeContentId={this.activeContentId}/>
                            </div>
                            <div className="module per70">
                                <Route exact path={`${this.props.match.path}`} render={(props) => <CourseOverview {...props} course={course}/>} />
                                <Route exact path={`${this.props.match.path}/:stageId`} render={(props) => <Stage { ...props} stages={stages}/>} />
                                <Route path={`${this.props.match.path}/:stageId/:stepId`} component={Step}/>
                            </div>
                        </div>    
                    </section></div>
                    : <Loading />
                }
                
            </div>
        );
    }
}

export default Course;