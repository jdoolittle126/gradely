import React, {Component} from 'react';
import {TextIngredient} from "../../ingredients/TextIngredient/TextIngredient";
import {useEditor} from "@craftjs/core";

type ToolboxItemProps = {
    spawns: JSX.Element;
    icon: string;
    text: string;
}

export const ToolboxItem = (props: ToolboxItemProps) => {
    const { connectors: {create} } = useEditor();

    return (
        <div
            className={'btn btn-outline-dark d-flex flex-column fw-light m-1 my-2 caption-size'}
            ref={(ref: any) => create(ref, props.spawns)}>
            <i className={`${props.icon} fs-3`}></i>
            {props.text}
        </div>
    );
}

export default ToolboxItem;
