import React, {Component} from 'react';
import './TemplateEditor.css';
import DisplayPane from "../generic/DisplayPane";
import ToolboxPane from "./toolbox-pane/ToolboxPane";
import {Canvas, Editor, Element, Frame} from "@craftjs/core";
import {TextIngredient} from "./ingredients/TextIngredient";
import {ContainerIngredient} from "./ingredients/ContainerIngredient";
import {Container, Row} from "reactstrap";

class TemplateEditor extends Component {

    layoutEditor = () => {
        return (
            <div className="ratio ratio-letter bg-info">
                <Frame>
                    <Element canvas
                             is={ContainerIngredient}
                             padding={0}
                             margin={0}
                             background="#fff"
                             data-cy="root-container"
                    >
                        <ContainerIngredient background="#eee" margin={4} padding={2}>
                            <TextIngredient text="Hello!" fontSize={25}></TextIngredient>
                        </ContainerIngredient>

                        <TextIngredient text="Hi!" fontSize={45}></TextIngredient>
                    </Element>
                </Frame>
            </div>
        );
    }

    render() {
        return (
            <Container fluid>

                <Row>
                    <h1>Template Editor</h1>
                </Row>

                <Editor resolver={{TextIngredient, ContainerIngredient}}>
                    <div className="row">
                        <DisplayPane className="col-2">
                            <ToolboxPane />
                        </DisplayPane>
                        <DisplayPane className="col">
                            {this.layoutEditor()}
                        </DisplayPane>
                        <DisplayPane className="col-2">

                        </DisplayPane>
                    </div>
                </Editor>
            </Container>
        );
    }
}

export default TemplateEditor;
