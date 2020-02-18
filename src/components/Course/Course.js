import React, { Component } from 'react';
import { BrowserRouter as Router, Route, matchPath } from "react-router-dom";
import VerticalNavigation from '../VerticalNavigation/VerticalNavigation';
import Stage from '../Stage/Stage';
import Step from '../Step/Step';
import CourseOverview from '../CourseOverview/CourseOverview';
import ProgressBar from '../ProgressBar/ProgressBar';
import Loading from '../Loading/Loading';


class Course extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: 0
        }

        this.url = "https://citrineu.herokuapp.com/api"
    }

    componentDidMount() {
        fetch(`${this.url}/v1/educational_resources/${this.props.match.params.courseId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    resource: data.resources[0]
                })
            })
            .then( () => {
                const stageIds = this.state.resource.stages.join(',');
                fetch(`${this.url}/v1/stages?ids=${stageIds}`)
                    .then(response => response.json())
                    .then(data => {
                        this.setState({ 
                            stages: data.stages
                        })
                    })
                    .then( () => {
                        const reducerFunc = (acc, stage) => acc.concat(stage.steps);
                        const allStepIds = this.state.stages.reduce( reducerFunc, []).join(',')

                        fetch(`${this.url}/v1/steps?ids=${allStepIds}`)
                            .then(response => response.json())
                            .then(data => {
                                this.setState({ 
                                    allSteps: data.steps
                                })
                            })
                    });
                
            });
        
        
    }

    get activeContentId() {
        const matchProfile = matchPath(this.props.location.pathname, {
            path: `/citrineu/courses/:courseId/:stageId`,
        });

        return (matchProfile && matchProfile.params) ? matchProfile.params.stageId : 0;
    }

    get progress() {
        const progress = this.state.stages.find(stage => stage.id == this.activeContentId)
        return progress !== undefined ? parseInt((progress.order/this.state.stages.length) * 100) : 0;
    }

    render() {
        const course = this.state.resource;
        const stages = this.state.stages;
        const steps = this.state.allSteps;

        return (
            <div>
                {
                    steps
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
                                <Route exact path={`${this.props.match.path}/:stageId`} render={(props) => 
                                    <Stage { ...props} 
                                        key={this.activeContentId}
                                        stages={stages}
                                        steps={steps}
                                        stage={ stages.find(stage=>stage.id == this.activeContentId) }
                                        />} />
                                <Route path={`${this.props.match.path}/:stageId/:stepId`} render={(props) => <Step { ...props} steps={steps} stages={stages} />} />
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