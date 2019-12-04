import React , { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Markdown from 'react-markdown';
import Document from '../Document/Document';
import data from '../../dummyData.json';

class Guide extends Component {
    constructor(props) {
        super(props);
    }

    generateDocumentComponents(documents) {
        return documents.map(document => 
            <Document document={ document }/>
        );
    }

    getSections(document) {
        return document.sections.map(section => 
            <div className="module p100 mtm mbm">
                <h3>{ section.title }</h3>
                <p>{ section.description }</p>

                <div className="container">
                    { this.generateDocumentComponents(section.documents) }
                </div>
            </div>
        );
    }

    render() {
        let guide = data.content.discover.find(guide => guide.id == this.props.match.params.guideId);
        const content = guide.sections ? this.getSections(guide) : guide.content;

        return (
            <div className="module p100">
                <div className="container">
                    <div class="module p100">
                        <h2 className="mbm">{guide.title}</h2>
                        <p>{ guide.description }</p>
                    </div>

                    { content }
                </div>
            </div>
        );
    }
}

export default Guide;