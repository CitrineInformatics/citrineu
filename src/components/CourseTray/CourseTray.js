import React, { Component } from 'react';
import Stage from '../Stage/Stage';

class CourseTray extends Component {
    constructor(props) {
        super(props);
    }

    // generateStageComponents(){
    //     return this.props.data.stages.map(stage => (
    //         <Stage key={stage.id} data={stage}/>
    //     ));
    // }

    getStages() {
        return this.props.data.stages.map(stage => (
            <li>
                { stage.title }
                <ul>
                    { this.getSteps(stage.steps) }
                </ul>
            </li>
        ));
    }

    getSteps(steps) {
        return steps.map(step => (
            <li>{ step.title }</li>
        ));
    }

    render() {
        console.log(this.state)
        return (
            <div className="module per100 course-tray">
                { this.getStages() }
            </div>
        );
    }
}

export default CourseTray;