import React , { Component } from 'react';
import Markdown from 'react-markdown';
import ReqTag from '../ReqTag/ReqTag';
import Icon from '../Icon/Icon';

class Argument extends Component {
    constructor(props) {
        super(props);
    }

    get reqTag() {
        return this.props.argument.optional ? <ReqTag theme="optional" /> : <ReqTag theme="required" />
    }

    render() {
        const argument = this.props.argument;
        //const content = `${argument.type }: ${ argument.description }`;
        return (
            <div className="module p100 ps mbs argument">
                <Icon style={ argument.style }/>{ this.reqTag }
                <p className="large bold code argument-name pts">{ argument.name } </p>
                <p><Markdown source={argument.description}/></p>
                <p className="italic"><Markdown source={ `  \n${argument.notes}`}/></p>
            </div>
        );
    }
}

export default Argument;