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


const TemplateEditorComponent = () => {
    const { getAccessTokenSilently } = useAuth0();
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
        // @ts-ignore
        if (state.data && state.data !== "") {
            // @ts-ignore
            actions.deserialize(state.data);
        }
    }, [])

    return (
        <div className="row">
            <DisplayPane className="col-2">
                <Button color={'primary'}
                onClick={() => {

                    const test = async () => {
                        const accessToken = await getAccessTokenSilently();
                        // @ts-ignore

                        let stateTest: {id: number, name: string, data: string} = state;

                        // @ts-ignore
                        let val = {
                            id: stateTest.id,
                            name: stateTest.name,
                            data: query.serialize()
                        };


                        // @ts-ignore
                        const response = await fetch(`${window.location.origin}/api/Template`, {
                            headers: {
                                'Accept': "application/json, text/plain, */*",
                                'Content-Type': "application/json;charset=utf-8",
                                'Authorization': `Bearer ${accessToken}`
                            },
                            method: "PUT",
                            body: JSON.stringify(val)
                        });

                        console.log(response);
                    }

                    test()
                }}

                >Save</Button>
                <ToolBarPane />
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
