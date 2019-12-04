import React , { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Icon extends Component {
    constructor(props) {
        super(props);
    }

    get icon() {
        if (this.props.style == "course") {
            return <i class="fas fa-book-open"></i>
        } else if (this.props.style == "tutorial") {
            return <i class="fas fa-chalkboard-teacher"></i>
        } else if (this.props.style == "video") {
            return <i class="fas fa-video"></i>
        } else if (this.props.style == "text") {
            return <i class="fas fa-file-alt"></i>
        } else if (this.props.style == "search") {
            return <i class="fas fa-search"></i>
        } else if (this.props.style == "string") {
            return <i class="fas fa-align-left"></i>
        } else if (this.props.style == "object") {
            return <i class="fas fa-project-diagram"></i>
        } else if (this.props.style == "list") {
            return <i class="fas fa-list"></i>
        } else if (this.props.style == "map") {
            return <i class="fas fa-globe-americas"></i>
        } else {
            return ''
        }

    }

    render() {
        return (
            this.icon
        );
    }
}

export default Icon;