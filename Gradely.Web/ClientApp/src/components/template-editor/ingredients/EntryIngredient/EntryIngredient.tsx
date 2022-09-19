import React, {useEffect, useState} from "react";
import {useNode} from "@craftjs/core";
import {EntryProperties} from "./EntryProperties";

type EntryIngredientProps = {
    termIds: number[];
    required: boolean;
    guid: string;
}

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

            <input readOnly  style={{width: '100%'}} data-gradely-entry={JSON.stringify({
                termsFor: props.termIds,
                required: props.required,
                guide: props.guid
            })}></input>
        </div>
    );
}


export const EntryIngredientDefaultProps: EntryIngredientProps = {
    termIds: [],
    required: false,
    guid: ""
};

EntryIngredient.defaultProps = EntryIngredientDefaultProps;

EntryIngredient.craft = {
    props: EntryIngredientDefaultProps,
    related: {
        toolbar: EntryProperties,
    },
};
