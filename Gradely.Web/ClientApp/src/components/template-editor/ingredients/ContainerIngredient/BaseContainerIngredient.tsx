import {useNode} from "@craftjs/core";
import React from "react";

export const BaseContainerIngredient = ({ background, padding, children, ...props }) => {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <div
            {...props}
            ref={(ref: any) => {
                connect(drag(ref))
            }}
            style={{ background, padding: `${padding}px` }}
        >
            {children}
        </div>
    );
};

export const ContainerSettings = () => {
    const {
        background,
        padding,
        actions: { setProp },
    } = useNode((node) => ({
        background: node.data.props.background,
        padding: node.data.props.padding,
    }));

    return (
        <div>

        </div>
    );
};

export const ContainerDefaultProps = {
    background: '#ffffff',
    padding: 0,
};

BaseContainerIngredient.craft = {
    props: ContainerDefaultProps,
    related: {
        settings: ContainerSettings,
    },
};
