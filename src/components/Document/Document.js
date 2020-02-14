import React , { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Markdown from 'react-markdown';
import Argument from '../Argument/Argument';
import data from '../../dummyData.json';
import documentation from '../../lm.json';

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
        let docId = this.props.match !== null ? this.props.match.params.docId : this.props.docId;
        let sectionId = this.props.match !== null ? this.props.match.params.sectionId : this.props.sectionId;

        let document = documentation.sections.find(section => section.id == sectionId)
            .documents.find(document => document.id == docId);

        return (
            <div className="module p100 mtm document">
                <div className="container">
                    <div className="module p100 mbm">
                        {/* add `code` as a classname to the document-title to get a code-like font for code documents  */}
                        <h3 className="document-title heading bold underline mbs" id={`document-${document.id}`}>{ document.title }</h3>
                        <p className="large"><Markdown source={ document.content }/></p>
                    </div>

                    {
                        document.arguments
                        ? <div className="module p100">
                                {/* <p className="heading large bold pbs">Keyword</p> */}
                                <div className="container">
                                    { document.arguments === undefined
                                    ? ''
                                    : this.generateArgumentComponents(document.arguments) }
                                </div>
                            </div>
                        : ''
                    }
                    
                    
                    {/* <div className="module p50">
                    <p className="heading large bold pbs">Example</p>

                        { document.code_example === undefined
                          ? ''
                          : <SyntaxHighlighter language="python" style={vs2015} showLineNumbers={true}>
                                { document.code_example.code_string }
                            </SyntaxHighlighter>
                        }
                        
                    </div> */}
                    
                </div>
            </div>
        );
    }
}

export default Document;