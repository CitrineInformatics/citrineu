import React , { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = "button mtm bold large " + this.props.theme;

        return (
            <div className={classes}>
                { this.props.text }
            </div>
        );
    }
}

export default Button;