import React , { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Markdown from 'react-markdown';
import Argument from '../Argument/Argument';
import data from '../../dummyData.json';

class Document extends Component {
    constructor(props) {
        super(props);
    }

    generateArgumentComponents(args) {
        return args.map(argument => 
            <Argument argument={ argument } />
        )
    }

    render() {
        // const resource = this.props.resource;
        console.log(data.content.documentation.sections.find(section => section.id == this.props.match.params.sectionId))
        const resource = data.content.documentation.sections.find(section => section.id == this.props.match.params.sectionId)
            .documents.find(document => document.id == this.props.match.params.docId);

        return (
            <div className="module p100 mtm resource">
                <div className="container">
                    <div className="module p100 mbm">
                        <h3 className="resource-title code">{ resource.title }</h3>
                        <p><Markdown source={ resource.content }/></p>
                    </div>

                    <div className="module p50 prm">
                        <p className="heading large bold pbs">Arguments</p>
                        <div className="container">
                            { this.generateArgumentComponents(resource.arguments) }
                        </div>
                    </div>
                    
                    <div className="module p50">
                    <p className="heading large bold pbs">Example</p>
                        <SyntaxHighlighter language="python" style={vs2015} showLineNumbers={true}>
                            { resource.code_example.code_string }
                        </SyntaxHighlighter>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Document;