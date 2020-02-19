import React , { Component } from 'react';
import FilterBy from '../FilterBy/FilterBy';
import Card from '../Card/Card';
import Course from '../Course/Course';
import data from '../../dummyData.json';
import Loading from '../Loading/Loading';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class Courses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resources: [],
            loading: true
        }

        this.url = "https://citrineu.herokuapp.com/api"
        this.url2 = "http://localhost:5000/api"
    }

    componentDidMount() {
        fetch(`${this.url}/v1/educational_resources`)
            .then(response => response.json())
            .then(data => this.setState({ resources: data.resources, loading: false }));
    }

    render() {
        const resources = this.state.resources;
        const path = this.props.match ? this.props.match.path : this.props.path;

        return (
            <section className="banner" id="banner-courses">
                <div className="container">

                    <div className="module p100">
                        <h2 className="mbm">Browse Courses</h2>
                    </div>

                    {
                        this.state.loading
                        ? <Loading />
                        :   <div class="module p100">
                            {/* <div className="module p30 ps">
                                <FilterBy />
                            </div> */}

                            <div className="module p100">
                                <div className="container">
                                    { 
                                        resources.map(course => 
                                            <div className="module p33 ps">
                                                <div className="container">
                                                    <Card
                                                        type="course" 
                                                        key={course.id}
                                                        content={course}
                                                        path="/citrineu/courses" 
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
                    }

                    
                </div>
                <Route path={`${path}/:courseId`}  component={Course}/>
            </section>
        )
    }
}

export default Courses;