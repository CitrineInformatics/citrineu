import React , { Component } from 'react';
import FilterBy from '../FilterBy/FilterBy';
import Card from '../Card/Card';
import Course from '../Course/Course';
import data from '../../dummyData.json';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Courses extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // In reality, I'll be fetching from the API here, but importing dummy data from json file for now.

        // fetch('/apidata.json')
        //     .then(response => response.json())
        //     .then(data => this.setState({ courses: data }));
    }

    render() {
        const courses = data.content.educationalContent.filter(item => item.type=='course')
        const path = this.props.match ? this.props.match.path : this.props.path;

        return (
            <section className="banner" id="banner-courses">
                <div className="container">
                    <div className="module p30 ps">
                        <FilterBy />
                    </div>

                    <div className="module p100">
                        <div className="container">
                            { 
                                courses.map(course => 
                                    <div className="module p33 ps">
                                        <div className="container">
                                            <Card 
                                                key={course.id}
                                                content={course}
                                                path="/courses" 
                                                buttonText="Begin Course"
                                                buttonTheme="light" 
                                                visible="true"/>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <Route path={`${path}/:courseId`}  component={Course}/>
            </section>
        )
    }
}

export default Courses;