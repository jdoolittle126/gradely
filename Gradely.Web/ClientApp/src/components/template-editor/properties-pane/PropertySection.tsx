import { useNode } from '@craftjs/core';
import React from 'react';
import {
    AccordionBody,
    AccordionHeader,
    AccordionItem, UncontrolledAccordion,
} from 'reactstrap';

export const PropertySection = ({ title, props, summary, children }: any) => {
    const { nodeProps } = useNode((node) => ({
        nodeProps:
            props &&
            props.reduce((res: any, key: any) => {
                res[key] = node.data.props[key] || null;
                return res;
            }, {}),
    }));
    return (
        <UncontrolledAccordion open="1">
            <AccordionItem>
            <AccordionHeader targetId="1">
                {title}
                <div className="px-6 w-full">
                    {summary && props ? (
                        <div>
                            <h5 className="text-light-gray-2 text-sm text-right text-dark-blue">
                                {summary(
                                    props.reduce((acc: any, key: any) => {
                                        acc[key] = nodeProps[key];
                                        return acc;
                                    }, {})
                                )}
                            </h5>
                        </div>
                    ) : null}
                </div>
            </AccordionHeader>
            <AccordionBody accordionId="1">
                {children}
            </AccordionBody>
            </AccordionItem>
        </UncontrolledAccordion>
    );
};
