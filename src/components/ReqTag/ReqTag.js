import React , { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Markdown from 'react-markdown';

class ReqTag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className={`req-tag ${this.props.theme}`}>{this.props.theme}</span>
        );
    }
}

export default ReqTag;