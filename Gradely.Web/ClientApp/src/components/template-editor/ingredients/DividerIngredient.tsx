import React from "react";
import {useNode} from "@craftjs/core";

export const DividerIngredient = () => {

    const {
        connectors: { connect }
    } = useNode();

    return (
        <div ref={connect} style={{padding: '5px', width: '100%'}}>
            <hr />
        </div>
    );
}
