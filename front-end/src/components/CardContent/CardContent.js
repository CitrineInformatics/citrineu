import React , { Component } from 'react';
import { Link } from "react-router-dom";

class CardContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="module p100 ps card-content">
                <p>{ this.props.content }</p>

                <div className={`button ${this.props.buttonTheme} mts`}>
                    <Link to={`${this.props.path}/${this.props.id}`}>{ this.props.buttonText}</Link>
                </div>
            </div>
        )
    }
}

export default CardContent;