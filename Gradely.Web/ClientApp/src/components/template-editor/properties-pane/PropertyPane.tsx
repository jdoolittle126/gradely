import { useEditor, ROOT_NODE } from '@craftjs/core';
import React, {useState} from 'react';
import {UncontrolledAccordion } from "reactstrap";

export const PropertyPane = () => {

    const { actions, selected, isEnabled } = useEditor((state, query) => {
        const currentNodeId = query.getEvent('selected').last();
        let selected;

        if (currentNodeId && currentNodeId !== ROOT_NODE) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings:
                    state.nodes[currentNodeId].related &&
                    state.nodes[currentNodeId].related.toolbar,
                isDeletable: query.node(currentNodeId).isDeletable(),
            };
        }

        return {
            selected,
            isEnabled: state.options.enabled,
        };
    });


    return isEnabled && (
        <div className="py-1 h-full">
            {selected && (

                    <div>
                        {selected?.settings && React.createElement(selected?.settings)}
                    </div>

            )}

            {!selected && (
                <div
                    className="px-5 py-2 flex flex-col items-center h-full justify-center text-center"
                    style={{
                        color: 'rgba(0, 0, 0, 0.5607843137254902)',
                        fontSize: '11px',
                    }}
                >
                    MERP
                </div>
            )}
        </div>
    );
};
