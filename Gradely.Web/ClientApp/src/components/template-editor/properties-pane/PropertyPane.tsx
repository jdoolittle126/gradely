import { useEditor, ROOT_NODE } from '@craftjs/core';
import React, {useState} from 'react';
import {Row, UncontrolledAccordion} from "reactstrap";

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


    return (
        <>
        <div className='text-center'>
            <h3 className='border-bottom pb-1'>Properties</h3>
        </div>
        {isEnabled ? (
            <div className="py-1 h-full">
                {selected && (
                    <div>
                        <UncontrolledAccordion flush open={''}>
                            {selected?.settings && React.createElement(selected?.settings)}
                        </UncontrolledAccordion>
                    </div>

                )}
                {!selected && (
                    <div
                        className="text-center text-muted"
                    >
                        Select an item to see it's properties!
                    </div>
                )}
            </div>
        ) : null}
        </>
)
};
