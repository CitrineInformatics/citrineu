import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '../Button/Button';
import data from '../../dummyData.json';
import Loading from '../Loading/Loading';

class CourseOverview extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resources: []
        }

        this.url = "https://citrineu.herokuapp.com/api"
        this.url2 = "http://localhost:5000/api"
    }

    componentDidMount() {
        // In reality, I'll be fetching from the API here, but importing dummy data from json file for now.

        // fetch(`${this.url}/v1/educational_resources/${this.activeContentId}`)
        //     .then(response => response.json())
        //     .then(data => this.setState({ resources: data.resources }));
    }

    getPrerequisites(prerequisites) {
        return prerequisites.map(pr => 
            <li className="prerequisite">
                <Link key={pr.id} to={ `/courses/${pr.id}` }>{ pr.title }</Link>
            </li>
        );
    }

    render() {
        //const course = data.content.educationalContent.find(course => course.id == this.props.match.params.courseId);
        //const course = this.state.resources[0]
        const course = this.props.course
        console.log(course)
        return (
            <div className="module p100">
                {
                    course !== undefined
                    ? <div className="container">
                        <div class="module p70 prl">
                            <h2 className="mbm">{course.title}</h2>

                            <div className="module large">
                                <p className="pbs">Welcome to <span className="italic">{course.title}</span>. Before embarking on this course, be sure you've completed the following prerequisites:</p>
                                {/* { this.getPrerequisites(course.prerequisites) } */}
                            </div>

                            <Link to={`${this.props.match.url}/${course.stages[0]}`}>
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
                : <Loading />
                }
            </div>
           
        );
    }
}

export default CourseOverview;