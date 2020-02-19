import React , { Component } from 'react';
import { Link } from "react-router-dom";
import Icon from '../Icon/Icon';

class CardTitle extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="module p100 p100-mob pxs pls prs bold card-title" id="cardTitle">
                <div className="container">
                    <div className="module no-collapse mr">
                        <Icon style={this.props.type} />
                    </div>
                    <div className="module no-collapse">
                        <Link to={`${this.props.path}/${this.props.id}`}>{ this.props.title }</Link>
                    </div>
                    <div className="module no-collapse lowercase self-align-right">
                        { this.props.length !== undefined ? `${this.props.length} min` : '' }
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTitle;