import {useNode} from "@craftjs/core";
import React from "react";
import {PropertyTextInput} from "./PropertyTextInput";
import {FormGroup, Input, InputGroup} from "reactstrap";

export type PropertyItemProps = {
    prefix?: string;
    label?: string;
    full?: boolean;
    propKey?: string;
    index?: number;
    children?: React.ReactNode;
    type: string;
    onChange?: (value: any) => any;
};

export const PropertyItem = ({full = false, propKey, type, onChange, index, ...props}: PropertyItemProps) => {
    const {
        actions: { setProp },
        propValue,
    } = useNode((node) => ({
        propValue: node.data.props[propKey],
    }));
    const value = Array.isArray(propValue) ? propValue[index] : propValue;

    return (
        <div>
            <div className="mb-2">
                {['text', 'color', 'bg', 'number'].includes(type) ? (
                    <PropertyTextInput
                        {...props}
                        type={type}
                        value={value}
                        onChange={(value) => {
                            setProp((props: any) => {
                                if (Array.isArray(propValue)) {
                                    props[propKey][index] = onChange ? onChange(value) : value;
                                } else {
                                    props[propKey] = onChange ? onChange(value) : value;
                                }
                            }, 500);
                        }}
                    />
                ) : type === 'slider' ? (
                    <>
                        {props.label ? (
                            <h4 className="text-sm text-light-gray-2">{props.label}</h4>
                        ) : null}

                        <input
                            name="range"
                            type="range"
                            className="form-range"
                            defaultValue={0}
                            value={parseInt(value) || 0}
                            onChange={(e) => {

                                console.log(e.target.value)

                                setProp((props: any) => {
                                    if (Array.isArray(propValue)) {
                                        props[propKey][index] = onChange
                                            ? onChange(e.target.value)
                                            : e.target.value;
                                    } else {
                                        props[propKey] = onChange ? onChange(e.target.value) : e.target.value;
                                    }
                                }, 1000)
                            }}
                            />
                    </>
                ) : type === 'radio' ? (
                    <>
                        {props.label ? (
                            <h4 className="text-sm text-light-gray-2">{props.label}</h4>
                        ) : null}
                        <FormGroup
                            tag="fieldset"
                            check
                            value={value || 0}
                            onChange={(e) => {
                                //@ts-ignore
                                const value = e.target.value;
                                setProp((props: any) => {
                                    props[propKey] = onChange ? onChange(value) : value;
                                });
                            }}
                        >
                            {props.children}
                        </FormGroup>
                    </>
                ) : type === 'select' ? (
                    <InputGroup
                        value={value || ''}
                        onChange={(value) =>

                            setProp(
                                (props: any) =>
                                    (props[propKey] = onChange ? onChange(value) : value)
                            )
                        }
                    />
                ) : type === 'many' ? (
                    <>
                        {props.label ? (
                            <h4 className="text-sm text-light-gray-2">{props.label}</h4>
                        ) : null}
                        <Input
                            multiple
                            type="select"
                            onChange={(event) => {
                                // @ts-ignore
                                let options = event.target.options;
                                let value = [];
                                for (let i = 0, l = options.length; i < l; i++) {
                                    if (options[i].selected) {
                                        value.push(options[i].value);
                                    }
                                }

                                setProp(
                                    (props: any) =>
                                        (props[propKey] = onChange ? onChange(value) : value)
                                )
                            }

                            }
                        >{props.children}</Input>
                    </>
                ) : null}
            </div>
        </div>
    );
};
