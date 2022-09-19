import React, {Component, useEffect} from 'react';
import './TemplateEditor.css';
import DisplayPane from "../generic/DisplayPane";
import ToolboxPane from "./toolbox-pane/ToolboxPane";
import {Canvas, Editor, Element, Frame, useEditor} from "@craftjs/core";
import {TextIngredient} from "./ingredients/TextIngredient/TextIngredient";
import {ContainerIngredient} from "./ingredients/ContainerIngredient/ContainerIngredient";
import {Button, Container, Row} from "reactstrap";
import {ToolBarPane} from "./toolbar-pane/ToolBarPane";
import {BaseContainerIngredient} from "./ingredients/ContainerIngredient/BaseContainerIngredient";
import {EditorContext} from "../EditorContext";
import {useLocation} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {PropertyPane} from "./properties-pane/PropertyPane";


const TemplateEditorComponent = () => {

    const {state} = useLocation();

    const {
        enabled,
        connectors,
        actions,
        query
    } = useEditor((state) => ({
        enabled: state.options.enabled,
    }));

    useEffect(() => {
        if (state?.data && state.data !== "") {
            actions.deserialize(state.data);
        }
    }, [])

    return (
        <div className="row">
            <ToolBarPane templateState={state}/>

            <DisplayPane className="col-2">
                <ToolboxPane />
            </DisplayPane>
            <DisplayPane className="col">
                <div className="ratio ratio-letter bg-info editor-pane"
                     ref={(ref) => connectors.select(connectors.hover(ref, null), null)}>
                    <Frame>
                        <Element canvas
                                 is={BaseContainerIngredient}
                                 background="#fff"
                                 padding={0}
                                 data-cy="root-container"
                        >

                        </Element>
                    </Frame>
                </div>
            </DisplayPane>
            <DisplayPane className="col-2">
                <PropertyPane></PropertyPane>
            </DisplayPane>
        </div>
    );
}

export const TemplateEditor = () => {
    return (

        <Container fluid>

            <Row>
                <h1>Template Editor</h1>
            </Row>

            <EditorContext>
               <TemplateEditorComponent></TemplateEditorComponent>
            </EditorContext>
        </Container>

    )

}
