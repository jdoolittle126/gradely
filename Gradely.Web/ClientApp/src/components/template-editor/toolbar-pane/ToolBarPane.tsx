import React from "react"
import {useEditor} from "@craftjs/core";
import LZString from "lz-string";


export const ToolBarPane = () => {
    const { actions, query, enabled, canUndo, canRedo } = useEditor(
        (state, query) => ({
            enabled: state.options.enabled,
            canUndo: state.options.enabled && query.history.canUndo(),
            canRedo: state.options.enabled && query.history.canRedo(),
        })
    );

    return (
        <>
            <button onClick={() => actions.history.undo()}>Undo</button>
            <button onClick={() => actions.history.redo()}>Redo</button>
            <button onClick={() => {
                const json = query.serialize();
                //let oop = LZString.compress(json)
                console.log(json);
            }}>Json to Console</button>
        </>
    )
}
