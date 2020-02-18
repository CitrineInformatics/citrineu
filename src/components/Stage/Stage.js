import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, matchPath } from "react-router-dom";
import Card from '../Card/Card';
import Loading from '../Loading/Loading';

class Stage extends Component {

    generateStepComponents = (steps) => {
        return steps.map(step => 
            <div className="module p100 mtm">
                <Card 
                    content={step} 
                    buttonText="Begin Step"
                    buttonTheme="light" 
                    path={this.props.match.url} />
            </div>
        )
    }

    get activeContentId() {
        const matchProfile = matchPath(this.props.location.pathname, {
            path: `/citrineu/courses/:courseId/:stageId/:stepId`,
        });

        return (matchProfile && matchProfile.params) ? matchProfile.params.stepId : '';
    }

    render() {
        const stage = this.props.stages.find(stage => stage.id == this.props.match.params.stageId);
        const stepIds = stage.steps;
        const steps = this.props.steps.filter(step => stepIds.includes(step.id.toString())) 

        return (
            <div>
{
                steps
                ?<div className="module per100">
                    <h2 className="titlecase mbm">{ stage.title }</h2>
                    <p className="large">{ stage.description }</p>

                    <div className="container">
                        { this.generateStepComponents(steps) }
                    </div>
                </div>
                : <Loading />
            }
            </div>
            
            
        );
    }
}

export default Stage;