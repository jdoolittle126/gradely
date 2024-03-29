import React from 'react';

import { ContainerProperties } from './ContainerProperties';

import { Resizer } from '../helpers/SizableIngredient';
import {useNode} from "@craftjs/core";

export type ContainerProps = {
    background: Record<'r' | 'g' | 'b' | 'a', number>;
    color: Record<'r' | 'g' | 'b' | 'a', number>;
    flexDirection: string;
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fillSpace: 'yes',
    padding: ['0', '0', '0', '0'],
    margin: ['0', '0', '0', '0'],
    background: { r: 200, g: 200, b: 200, a: 1 },
    color: { r: 0, g: 0, b: 0, a: 1 },
    shadow: 0,
    radius: 0,
    width: '100%',
    height: 'auto',
};

export const ContainerIngredient = (props: Partial<ContainerProps>) => {
    const {
        connectors: { connect, drag },
    } = useNode();
    props = {
        ...defaultProps,
        ...props,
    };
    const {
        flexDirection,
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
        <Resizer
            propKey={{ width: 'width', height: 'height' }}
            style={{
                justifyContent,
                flexDirection,
                alignItems,
                background: `rgba(${Object.values(background)})`,
                padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
                margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
                boxShadow:
                    shadow === 0
                        ? 'none'
                        : `0px 3px 100px ${shadow}px rgba(0, 0, 0, 0.13)`,
                borderRadius: `${radius}px`
            }}
        >
            <div className={'d-flex w-100 flex-column'}>
                {children}
            </div>

        </Resizer>
    );
};

ContainerIngredient.craft = {
    displayName: 'Container',
    props: defaultProps,
    rules: {
        canDrag: () => true,
    },
    related: {
        toolbar: ContainerProperties,
    },
};
