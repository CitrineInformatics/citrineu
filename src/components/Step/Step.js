import React, { Component } from 'react';
import Markdown from 'react-markdown';
import data from '../../dummyData.json';
import VerticalNavigation from '../VerticalNavigation/VerticalNavigation.js';
import Loading from '../Loading/Loading';

class Step extends Component {


    get parentPath() {
        return `/citrineu/courses/${this.props.match.params.courseId}/${this.props.match.params.stageId}`;
    }


    render() {
        const stage = this.props.stages.find(stage => stage.id == this.props.match.params.stageId);
        const stepIds = stage.steps;
        const steps = this.props.steps.filter(step => stepIds.includes(step.id.toString())) 
        const step = this.props.steps.find(step => step.id == this.props.match.params.stepId);
       
        return (

                step
                ? <div className="container">
                    <div className="module p70 step prl mob-order-2">
                        <h2 className="mbm">{ step.title }</h2>
                        {
                            step.step_type == 'video'
                            ? 
                            <iframe src={step.content} width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                            : <Markdown source={ step.content }/>
                        }                   
                    </div>

                    <div className="module p30 mob-order-1">
                        <span className="heading bold large mbs">In this Section</span>
                        <VerticalNavigation 
                            theme="compact"
                            data={steps}
                            path={this.parentPath}
                            activeContentId={this.props.match.params.stepId}/>
                        <span className="heading bold large mtm mbs">Notes</span>
                        <p>{step.notes}</p>  
                    </div>
                </div>
                : <Loading />

            
            
        );
    }
}

export default Step;