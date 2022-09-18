import React, {useState} from 'react';
import {useNode} from "@craftjs/core";
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    FormGroup,
    Input,
    Label,
    UncontrolledAccordion
} from "reactstrap";
import { SketchPicker } from 'react-color';
import {PropertySection} from "../../properties-pane/PropertySection";
import {PropertyItem} from "../../properties-pane/PropertyItem";

export const FlexProperties = () => {

    return (
        <>
            <PropertySection
                title="Dimensions"
                props={['width', 'height']}
                summary={({ width, height }: any) => {
                    return `${width || 0} x ${height || 0}`;
                }}>
                <PropertyItem propKey="width" type="text" label="Width" />
                <PropertyItem propKey="height" type="text" label="Height" />
            </PropertySection>

            <PropertySection
                title="Colors"
                props={['background', 'color']}
                summary={({ background, color }: any) => {
                    return (
                        <div className="flex flex-row-reverse">
                            <div
                                style={{
                                    background:
                                        background && `rgba(${Object.values(background)})`,
                                }}
                                className="shadow-md flex-end w-6 h-6 text-center flex items-center rounded-full bg-black"
                            >
                                <p
                                    style={{
                                        color: color && `rgba(${Object.values(color)})`,
                                    }}
                                    className="text-white w-full text-center"
                                >
                                    T
                                </p>
                            </div>
                        </div>
                    );
                }}
            >
                <PropertyItem
                    full={true}
                    propKey="background"
                    type="bg"
                    label="Background"
                />
                <PropertyItem full={true} propKey="color" type="color" label="Text" />
            </PropertySection>

        </>
    );
}
