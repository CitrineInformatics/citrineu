import React, { Component } from 'react';
import Markdown from 'react-markdown';
import data from '../../dummyData.json';
import VerticalNavigation from '../VerticalNavigation/VerticalNavigation.js';

class Step extends Component {
    constructor(props) {
        super(props);
    }

    get parentPath() {
        return `/citrineu/courses/${this.props.match.params.courseId}/${this.props.match.params.stageId}`;
    }

    render() {
        const stage = data.content.educationalContent.find(course => course.id == this.props.match.params.courseId)
            .stages.find(stage => stage.id == this.props.match.params.stageId)
        const step = stage.steps.find(step => step.id == this.props.match.params.stepId);

        return (
            <div className="container">
                <div className="module p70 step prl">
                    <h2 className="mbm">{ step.title }</h2>

                    {
                        step.type == 'video'
                        ?   <video width="100%" controls="controls" autoPlay="false">
                                <source src={ step.content }/>
                            </video>
                        : <Markdown source={ step.content }/>
                    }                   
                </div>

                <div className="module p30">
                    <span className="heading bold large mbs">In this Section</span>
                    <VerticalNavigation 
                        theme="compact"
                        data={stage.steps}
                        path={this.parentPath}
                        activeContentId={this.props.match.params.stepId}/>
                    <span className="heading bold large mtm mbs">Notes</span>
                    <p>{step.notes}</p>  
                </div>
            </div>
            
        );
    }
}

export default Step;