import React, {useEffect, useState} from "react";
import {useNode} from "@craftjs/core";

type EntryIngredientProps = {
    termId?: number;
}


// Move to key service provider
export const EntryIngredient = (props: EntryIngredientProps) => {

    const {
        connectors: { connect, drag },
        selected,
        actions: { setProp },
    } = useNode((state) => ({
        selected: state.events.selected,
        dragged: state.events.dragged,
    }));


    return (
        <div
            ref={(ref: any) => {
                connect(drag(ref))
            } }
            onClick={() => selected}
            style={
                {position: 'relative'}
            }
        >
            <input readOnly style={{width: '100%'}} data-gradely-entry={{
                termFor: 4,
                required: true,
                regex: ''
            }} type={'text'}/>
        </div>
    );
}

const EntryIngredientSettings = () => {
    const {
        actions: { setProp },
        fontSize,
    } = useNode((node) => ({
        text: node.data.props.text,
        fontSize: node.data.props.fontSize,
    }));

    return (
        <>

        </>
    );
};

export const EntryIngredientDefaultProps: EntryIngredientProps = {
    termId: 1
};

EntryIngredient.defaultProps = EntryIngredientDefaultProps;

EntryIngredient.craft = {
    props: EntryIngredientDefaultProps,
    related: {
        settings: EntryIngredientSettings,
    },
};
