import React from "react";
import {Resizer} from "./helpers/SizableIngredient";
import {ContainerProperties} from "./ContainerIngredient/ContainerProperties";
import {ContainerIngredient} from "./ContainerIngredient/ContainerIngredient";
import {Element} from "@craftjs/core";
import {TextIngredient} from "./TextIngredient/TextIngredient";
import {BaseContainerIngredient} from "./ContainerIngredient/BaseContainerIngredient";

export const ImageIngredient = () => {
    return (
        <img src={'./banner.svg'} width={'98%'}/>
    );
}

/*
        <Resizer
            propKey={{ width: 'width', height: 'height' }}
            style={{
                background: `#000`,
                padding: '20px',
                width: '100px',
                height: '100px'
            }}
            fillSpace={'no'}
        >

        </Resizer>
 */

//

ImageIngredient.craft = {
    displayName: 'Container',
    props: {},
    rules: {
        canDrag: () => true,
    },
    related: {
        toolbar: ContainerProperties,
    },
};
