import React from 'react';
import {PropertySection} from "../../properties-pane/PropertySection";
import {PropertyItem} from "../../properties-pane/PropertyItem";

export const ContainerProperties = () => {

    return (
        <>
            <PropertySection
                title="Dimensions"
                props={['width', 'height']}
                summary={({ width, height }: any) => {
                    return ``;
                }}>
                <PropertyItem propKey="width" type="text" label="Width" />
                <PropertyItem propKey="height" type="text" label="Height" />
            </PropertySection>

            <PropertySection
                title="Colors"
                props={['background', 'color']}
                summary={({ background, color }: any) => {
                    return ''
                }}
            >
                <PropertyItem
                    full={true}
                    propKey="background"
                    type="bg"
                    label="Background"
                />
            </PropertySection>

            <PropertySection
                title="Margin"
                props={['margin']}
                summary={({ padding, margin }: any) => {
                    return ''
                }}
            >
                <PropertyItem propKey="margin" index={0} type="slider" label="Top" />
                <PropertyItem propKey="margin" index={1} type="slider" label="Right" />
                <PropertyItem propKey="margin" index={2} type="slider" label="Bottom" />
                <PropertyItem propKey="margin" index={3} type="slider" label="Left" />
            </PropertySection>
            <PropertySection
                title="Padding"
                props={['padding']}
                summary={({ padding, margin }: any) => {
                    return ''
                }}
            >
                <PropertyItem propKey="padding" index={0} type="slider" label="Top" />
                <PropertyItem propKey="padding" index={1} type="slider" label="Right" />
                <PropertyItem propKey="padding" index={2} type="slider" label="Bottom" />
                <PropertyItem propKey="padding" index={3} type="slider" label="Left" />
            </PropertySection>
            <PropertySection
                title="Radius"
                props={['radius']}
                summary={({ }: any) => {
                    return ''
                }}
            >
                <PropertyItem propKey="radius" type="slider" label="Radius" />
            </PropertySection>
        </>
    );
}
