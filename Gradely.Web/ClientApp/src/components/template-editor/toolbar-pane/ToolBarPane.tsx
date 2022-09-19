import React from "react"
import {useEditor} from "@craftjs/core";
import {Button, InputGroup} from "reactstrap";
import {useAuth0} from "@auth0/auth0-react";


export const ToolBarPane = (props: {templateState: {id: number, name: string, data: string}}) => {

    const { getAccessTokenSilently } = useAuth0();

    const { actions, query, enabled, canUndo, canRedo } = useEditor(
        (state, query) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
        })
    );

    return (
        <div className={'d-flex flex-row rounded-2 mt-2'}>

            <div className={'col'}>
                <InputGroup>
                    <Button color={'primary'} disabled={!canUndo} onClick={() => actions.history.undo()}>Undo</Button>
                    <Button color={'secondary'} disabled={!canRedo} onClick={() => actions.history.redo()}>Redo</Button>
                </InputGroup>

            </div>

            <div>
                <Button color={'primary'}
                        onClick={() => {
                            const test = async () => {
                                const accessToken = await getAccessTokenSilently();
                                // @ts-ignore
                                let val = {
                                    id: props.templateState.id,
                                    name: props.templateState.name,
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
            </div>
        </div>
    )
}
