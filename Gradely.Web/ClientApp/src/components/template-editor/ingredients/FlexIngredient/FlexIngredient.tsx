import React from 'react';

import { FlexProperties } from './FlexProperties';

import {useNode} from "@craftjs/core";

export type ContainerProps = {
    background: Record<'r' | 'g' | 'b' | 'a', number>;
    color: Record<'r' | 'g' | 'b' | 'a', number>;
    flexRow: boolean;
    alignItems: string;
    justifyContent: string;
    fillSpace: string;
    width: string;
    height: string;
    padding: string[];
    margin: string[];
    marginTop: number;
    marginLeft: number;
    marginBottom: number;
    marginRight: number;
    shadow: number;
    children: React.ReactNode;
    radius: number;
};

const defaultProps = {
    flexRow: false,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fillSpace: 'no',
    padding: ['0', '0', '0', '0'],
    margin: ['0', '0', '0', '0'],
    background: { r: 200, g: 200, b: 200, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    shadow: 0,
    radius: 0,
    width: '100%',
    height: 'auto',
};

export const FlexIngredient = (props: Partial<ContainerProps>) => {
    const {
        connectors: { connect, drag },
    } = useNode();
    props = {
        ...defaultProps,
        ...props,
    };
    const {
        flexRow,
        alignItems,
        justifyContent,
        fillSpace,
        background,
        color,
        padding,
        margin,
        shadow,
        radius,
        children,
    } = props;
    return (
        <div
            className={'d-flex'}

            style={{
                justifyContent,
                alignItems,
                flexDirection: flexRow ? 'row' : 'column',
                height: 'auto',
                background: `rgba(${Object.values(background)})`,
                color: `rgba(${Object.values(color)})`,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
                margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
                boxShadow:
                    shadow === 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius}px`,
                flex: 1,
            }}
            ref={(ref: any) => {
                connect(drag(ref))
            }}
        >
            {children}
        </div>
    );
};

FlexIngredient.craft = {
    displayName: 'Container',
    props: defaultProps,
    rules: {
        canDrag: () => true,
    },
    related: {
        toolbar: FlexProperties,
    },
};
