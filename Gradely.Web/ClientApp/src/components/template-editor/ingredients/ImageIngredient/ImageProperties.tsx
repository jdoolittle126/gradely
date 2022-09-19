import React from 'react';
import {PropertySection} from "../../properties-pane/PropertySection";
import {PropertyItem} from "../../properties-pane/PropertyItem";

export const ImageProperties = () => {

    return (
        <>
            <PropertySection
                title="Image"
                props={['source']}
                summary={({ }: any) => {
                    return ''
                }}
            >
                <PropertyItem propKey="source" type="text" label="Source" />
            </PropertySection>

        </>
    );
}
