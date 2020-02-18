import React , { Component } from 'react';
import CardContent from '../CardContent/CardContent';
import CardTitle from '../CardTitle/CardTitle';

class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="module p100 course-card">
                <div className="container">
                    <CardTitle 
                        id={this.props.content.id} 
                        path={this.props.path} 
                        title={this.props.content.title}
                        type={this.props.content.step_type}
                        length={this.props.content.length}
                        />
                    <CardContent 
                        id={this.props.content.id} 
                        content={this.props.content.description} 
                        path={this.props.path}
                        buttonText={this.props.buttonText}
                        buttonTheme={this.props.buttonTheme}/>
                </div>
            </div>
        )
    }
}

export default Card;