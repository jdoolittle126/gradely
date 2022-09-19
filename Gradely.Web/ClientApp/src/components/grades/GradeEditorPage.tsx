import * as React from 'react';
import {EditorContext} from "../EditorContext";
import {GradeEditor} from "./GradeEditor";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {FormGroup, Input, Label} from "reactstrap";
import {GradeEditorSideBar} from "./GradeEditorSideBar";
import DisplayPane from "../generic/DisplayPane";

export const GradeEditorPage = () => {

    const {state} = useLocation();
    const { getAccessTokenSilently } = useAuth0();
    const [rawData, setRawData] = useState<any>();

    const fetchData = async () => {

        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${window.location.origin}/api/Terms`, {
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': "application/json;charset=utf-8",
                'Authorization': `Bearer ${accessToken}`
            },
            cache: "force-cache",
            method: "GET"
        });

        //let stuff = JSON.parse(document.querySelector('[data-gradely-entry]').getAttribute('data-gradely-entry'));
        //let id = stuff.termsFor[0];

        let id = state.roster.termSchedule.id;
        const data = await response.json();

        for(const item of data) {
            const i = item.terms.findIndex(e => e.id == id)
            if (i > -1) {
                setRawData(item.terms);
                break;
            }
        }
    }

    useEffect(() => {
        console.log(state)
        fetchData();
    }, []);


    return (
        <div className={'row'}>

            <DisplayPane className="col-2">
                <GradeEditorSideBar students={state.roster.students}></GradeEditorSideBar>
            </DisplayPane>

            <div className="col">
                <EditorContext enabled={false}>
                    <GradeEditor template={state.template.data}></GradeEditor>
                </EditorContext>
            </div>
            <DisplayPane className="col-2">
                <div className='text-center'>
                    <h3 className='border-bottom pb-1'>Term</h3>
                </div>
                <FormGroup tag={'fieldset'}
                           onChange={(u) => {

                               document.querySelectorAll('[data-gradely-entry]')
                                   .forEach(e => {
                                       let data = JSON.parse(e.getAttribute('data-gradely-entry'))
                                       // @ts-ignore
                                       let readOnly = !data.termsFor.some(x => x === u.target.value);
                                       // @ts-ignore
                                       e.readOnly = readOnly
                                       e.className = readOnly ? "noput" : "";
                                   });
                           }}

                >

                    {rawData?.map(value => (
                        <>
                            <FormGroup check>
                                <Input
                                    name="radio1"
                                    type="radio"
                                    value={value.id}
                                />
                                {' '}
                                <Label check>
                                    {value.name}
                                </Label>
                            </FormGroup>
                        </>
                    ))}

                </FormGroup>
            </DisplayPane>

        </div>
    )
}
