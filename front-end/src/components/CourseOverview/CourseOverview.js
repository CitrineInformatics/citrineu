import React , { Component } from 'react';
import data from '../../dummyData.json';

class CourseOverview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const course = data.content.educationalContent.find(course => course.id == this.props.match.params.courseId);
        return (
            <div class="module p100">
                <h2 className="mbm">{course.title}</h2>
                <p>{course.description}</p>
                <p><span class="bold">Prerequisites: </span>{course.prerequisites}</p>
            </div>
        );
    }
}

export default CourseOverview;