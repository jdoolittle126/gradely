import React from "react";
import {ImageProperties} from "./ImageProperties";
import {useNode} from "@craftjs/core";

export const ImageIngredient = (props: {source: string}) => {
    const {
        connectors: { connect },
        setProp,
    } = useNode();
    return (
        <img ref={connect} src={props.source} width={'98%'}/>
    );
}


ImageIngredient.craft = {
    displayName: 'Image',
    props: {},
    rules: {
        canDrag: () => true,
    },
    related: {
        toolbar: ImageProperties,
    },
};
