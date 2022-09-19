import React, {useState} from 'react';
import {PropertySection} from "../../properties-pane/PropertySection";
import {PropertyItem} from "../../properties-pane/PropertyItem";
import {PropertyRadio} from "../../properties-pane/PropertyRadio";

export const FlexProperties = () => {

    return (
        <>

            <PropertySection title="Alignment">
                <PropertyItem propKey="fillSpace" type="radio" label="Fill space">
                    <PropertyRadio value="yes" label="Yes" name="fillSpace"/>
                    <PropertyRadio value="no" label="No" name="fillSpace" />
                </PropertyItem>
                <PropertyItem propKey="alignItems" type="radio" label="Align Items" >
                    <PropertyRadio value="flex-start" label="Flex start"  name="alignItems"/>
                    <PropertyRadio value="center" label="Center" name="alignItems" />
                    <PropertyRadio value="flex-end" label="Flex end" name="alignItems" />
                </PropertyItem>
                <PropertyItem
                    propKey="justifyContent"
                    type="radio"
                    label="Justify Content"
                >
                    <PropertyRadio value="flex-start" label="Flex start" name="justifyContent"/>
                    <PropertyRadio value="center" label="Center" name="justifyContent" />
                    <PropertyRadio value="flex-end" label="Flex end"  name="justifyContent" />
                </PropertyItem>
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
