import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '../Button/Button';
import data from '../../dummyData.json';

class CourseOverview extends Component {
    constructor(props) {
        super(props);
    }

    getPrerequisites(prerequisites) {
        return prerequisites.map(pr => 
            <li className="prerequisite">
                <Link key={pr.id} to={ `/courses/${pr.id}` }>{ pr.title }</Link>
            </li>
        );
    }

    render() {
        const course = data.content.educationalContent.find(course => course.id == this.props.match.params.courseId);

        return (
            <div className="module p100">
                <div className="container">
                    <div class="module p70 prl">
                        <h2 className="mbm">{course.title}</h2>

                        <div className="module large">
                            <p className="pbs">Welcome to <span className="italic">{course.title}</span>. Before embarking on this course, be sure you've completed the following prerequisites:</p>
                            { this.getPrerequisites(course.prerequisites) }
                        </div>

                        <Link to={`${this.props.match.url}/1`}>
                            <Button
                                theme="light"
                                text="Begin Course" />
                        </Link>
                    </div>

                    <div class="module p30">
                        <p className="heading bold large mbs">Related Content</p>
                        {course.relatedContent}
                    </div>
                </div>
            </div>
           
        );
    }
}

export default CourseOverview;