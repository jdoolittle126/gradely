import React from "react";
import {FormGroup, Input, InputGroup, Label} from "reactstrap";

export const PropertyRadio = ({ value, label, name }: any) => {
    return (
        <>
            <FormGroup check>
                <Input
                    name={name}
                    value={value}
                    type="radio"
                />
                {' '}
                <Label check>
                    {label}
                </Label>
            </FormGroup>

        </>
    );
};
