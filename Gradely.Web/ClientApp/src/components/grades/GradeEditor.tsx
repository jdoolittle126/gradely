import React, {useEffect, useState} from "react";
import {Editor, Element, Frame, useEditor} from "@craftjs/core";
import {ContainerIngredient} from "../template-editor/ingredients/ContainerIngredient/ContainerIngredient";
import {FormGroup, Input, Label} from "reactstrap";
import DisplayPane from "../generic/DisplayPane";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const GradeEditor = () => {

    const { actions, query, enabled } = useEditor((state) => ({
        enabled: state.options.enabled
    }));

    const [stateToLoad, setStateToLoad] = useState<string>("");
    const [state, setState] = useState(true);

    useEffect(() => {
        // @ts-ignore
        let elements = document.querySelector('[data-gradely-entry]');

        if (!elements) return;

        if (!state) {
            // @ts-ignore
            elements.readOnly = true;
            // @ts-ignore
            elements.className = 'border-0'
        } else {
            // @ts-ignore
            elements.readOnly = false;
            // @ts-ignore
            elements.className = 'border-1'
        }

        console.log(elements);

    }, [state])

    return (
        <>


           <div className={'container'}>
               <Input type={'text'} onChange={(e) => {
                    setStateToLoad(e.target.value);
               }}/>

               <button className={'btn btn-primary'} onClick={() => {
                   actions.deserialize(stateToLoad)
               }}>Load</button>

               <button className={'btn btn-primary'} onClick={() => {

                   let ellys = document.querySelector("#capture").querySelectorAll('img');
                   ellys.forEach(function(item) {
                       item.setAttribute("width", item.getBoundingClientRect().width.toString());
                       item.setAttribute("height", item.getBoundingClientRect().height.toString());
                       item.style.width = null;
                       item.style.height= null;
                   });

                   html2canvas(document.querySelector("#capture"), {allowTaint: true}).then(canvas => {
                       let imgData = canvas.toDataURL("image/jpeg", 1.0);
                       let pdf = new jsPDF();
                       //210 x 297 mm
                       pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297);
                       //pdf.save("download.pdf");
                   });
               }}>PDF</button>

               <FormGroup switch>
                   <Input
                       type="switch"
                       checked={state}
                       onClick={() => {
                           setState(!state);
                       }}
                   />
                   <Label check>Edit Mode</Label>
               </FormGroup>

           </div>
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
