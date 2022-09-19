import React from "react"
import {PropertySection} from "../../properties-pane/PropertySection";
import {PropertyItem} from "../../properties-pane/PropertyItem";
import {PropertyRadio} from "../../properties-pane/PropertyRadio";

//                         fontSize,
//                          textAlign,
//                          fontWeight,
//                          color,
export const TextProperties = () => {
    return (
        <>
            <PropertySection
                title="Colors"
                props={['color']}
                summary={({ background, color }: any) => {
                    return ''
                }}
            >
                <PropertyItem
                    full={true}
                    propKey="color"
                    type="bg"
                    label="Color"
                />
            </PropertySection>

            <PropertySection
                title="Sizing"
                props={['fontSize', 'fontWeight']}
                summary={({ background, color }: any) => {
                    return ''
                }}
            >
                <PropertyItem
                    full={true}
                    propKey="fontSize"
                    type="slider"
                    label="Font Size"
                />
                <PropertyItem propKey="fontWeight" type="radio" label="Weight">
                    <PropertyRadio value="400" label="Regular" name="fontSize"/>
                    <PropertyRadio value="500" label="Medium" name="fontSize"/>
                    <PropertyRadio value="700" label="Bold" name="fontSize"/>
                </PropertyItem>

            </PropertySection>

            <PropertySection
                title="Alignment"
                props={['textAlign']}
                summary={({ background, color }: any) => {
                    return ''
                }}
            >
                <PropertyItem propKey="textAlign" type="radio" label="Align">
                    <PropertyRadio value="left" label="Left" name="textAlign"/>
                    <PropertyRadio value="center" label="Center" name="textAlign"/>
                    <PropertyRadio value="right" label="Right" name="textAlign"/>
                </PropertyItem>
            </PropertySection>


        </>
    )
}
