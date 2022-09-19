import React, {useEffect, useState} from "react";
import {Editor, Element, Frame, useEditor} from "@craftjs/core";
import {ContainerIngredient} from "../template-editor/ingredients/ContainerIngredient/ContainerIngredient";
import {FormGroup, Input, Label} from "reactstrap";
import DisplayPane from "../generic/DisplayPane";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import {useAuth0} from "@auth0/auth0-react";
import {useLocation} from "react-router-dom";

export const GradeEditor = (props: {template: string}) => {

    const { actions, query, enabled } = useEditor((state) => ({
        enabled: state.options.enabled
    }));


    useEffect(() => {
        actions.deserialize(props.template);
    }, []);


    return (
        <>
            <DisplayPane className="col">
                <div className="ratio ratio-letter bg-info editor-pane" id={'capture'}>
                        <Frame>
                            <Element canvas
                                     is={ContainerIngredient}
                                     data-cy="root-container"
                            >
                            </Element>
                        </Frame>
                </div>
            </DisplayPane>

        </>
    );
}
