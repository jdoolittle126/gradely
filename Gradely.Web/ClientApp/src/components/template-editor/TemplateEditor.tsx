import React, {Component} from 'react';
import {Container} from "reactstrap";
import './TemplateEditor.css';

class TemplateEditor extends Component {

    layoutEditor = () => {
        return (
            <div className="p-1 border rounded-1">
                <div className="ratio ratio-letter bg-info">

                </div>
            </div>
        );
    }

    render() {
        return (
            <Container fluid>
                <div className="row">
                    <div className="col-2 p-1 border rounded-1">TEST</div>
                    <div className="col">
                        {this.layoutEditor()}
                    </div>
                    <div className="col-2 p-1 border rounded-1">TEST</div>
                </div>
            </Container>
        );
    }
}

export default TemplateEditor;
