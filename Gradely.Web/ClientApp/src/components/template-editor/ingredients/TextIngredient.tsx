import {useNode} from "@craftjs/core";
import React, {useEffect, useState} from "react";
import ContentEditable from "react-contenteditable";

type TextIngredientProps = {
    text?: string;
    font?: string;
    fontSize?: number;
    textColor?: string;
    classList?: string;
}
//AIzaSyBuPvzYgIKydAl9X877lwj-cr48S3Gvahc

// Move to key service provider
export const TextIngredient = (props: TextIngredientProps) => {

        const {
            connectors: { connect, drag },
            selected,
            actions: { setProp },
        } = useNode((state) => ({
            selected: state.events.selected,
            dragged: state.events.dragged,
        }));

        const [editable, setEditable] = useState(false);

        useEffect(() => {
            if (selected) {
                return;
            }
            setEditable(false);
        }, [selected]);

        return (
            <div
                ref={(ref: any) => {
                    connect(drag(ref))
                } }
                onClick={() => selected && setEditable(true)}
            >
                <ContentEditable
                    html={props.text ?? ''}
                    disabled={!editable}
                    onChange={(e) =>
                        setProp(
                            (props: { text: string; }) =>
                                (props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, '')),
                            500
                        )
                    }
                    tagName="p"
                    style={{ fontSize: `${props.fontSize}px`, fontFamily: props.font, color: props.textColor ?? 'black'}}
                    className={props.classList}
                />
            </div>
        );
}

const TextIngredientSettings = () => {
    const {
        actions: { setProp },
        fontSize,
    } = useNode((node) => ({
        text: node.data.props.text,
        fontSize: node.data.props.fontSize,
    }));

    return (
        <>

        </>
    );
};

export const TextDefaultProps: TextIngredientProps = {
    text: 'My text',
    font: 'times new roman',
    fontSize: 20,
    textColor: '',
    classList: ''
};

TextIngredient.defaultProps = TextDefaultProps;

TextIngredient.craft = {
    props: TextDefaultProps,
    related: {
        settings: TextIngredientSettings,
    },
};
