import * as React from 'react';
import {EditorContext} from "../EditorContext";
import {GradeEditor} from "./GradeEditor";

export const GradeEditorPage = () => {
    return (
        <>
        Wow cool stuff!
            <EditorContext enabled={false}>
                <GradeEditor></GradeEditor>
            </EditorContext>

        </>
    )
}
