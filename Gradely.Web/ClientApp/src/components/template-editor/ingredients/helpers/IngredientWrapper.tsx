import { useNode, useEditor } from '@craftjs/core';
import { ROOT_NODE } from '@craftjs/utils';
import React, { useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const IndicatorDiv = styled.div`
  height: 30px;
  margin-top: -29px;
  font-size: 15px;
  line-height: 12px;
  position: absolute;
  i {
    color: #fff
  }
`;

const Btn = styled.a`
  padding: 0 0px;
  display: flex;
  align-items: center;
  text-decoration: none;
  > div {
    position: relative;
    top: -50%;
    left: -50%;
  }
`;

export const IngredientWrapper = ({ render }) => {
    const { id } = useNode();
    const { actions, query, isActive } = useEditor((_, query) => ({
        isActive: query.getEvent('selected').contains(id),
    }));

    const {
        isHover,
        dom,
        name,
        moveable,
        deletable,
        connectors: { drag },
        parent,
    } = useNode((node) => ({
        isHover: node.events.hovered,
        dom: node.dom,
        name: node.data.custom.displayName || node.data.displayName,
        moveable: query.node(node.id).isDraggable(),
        deletable: query.node(node.id).isDeletable(),
        parent: node.data.parent,
        props: node.data.props,
    }));

    const currentRef = useRef<HTMLDivElement>();

    useEffect(() => {
        if (dom) {
            if ((isHover || isActive) && id !== ROOT_NODE) dom.classList.add('component-selected');
            else dom.classList.remove('component-selected');
        }
    }, [dom, isActive, isHover]);

    const getPos = useCallback((dom: HTMLElement) => {

        const { top, left, bottom } = dom
            ? dom.getBoundingClientRect()
            : { top: 0, left: 0, bottom: 0 };
        return {
            top: `${(top > 0 ? top + document.documentElement.scrollTop : bottom - document.documentElement.scrollTop)}px`,
            left: `${left}px`,
        };
    }, []);


    return (
        <>
            {(isHover) && id !== ROOT_NODE
                ? ReactDOM.createPortal(
                    <IndicatorDiv
                        ref={currentRef}
                        className="px-2 py-2 text-white bg-secondary d-flex items-center"
                        style={{
                            left: getPos(dom).left,
                            top: getPos(dom).top,
                            zIndex: 9999,
                        }}
                    >
                        <div className="flex-1 me-4">{name.replace('Ingredient', '')}</div>
                        {moveable ? (
                            <Btn className="me-2 cursor-move" ref={drag}>
                                <i className="fa-solid fa-up-down-left-right"></i>
                            </Btn>
                        ) : null}
                        {id !== ROOT_NODE && (
                            <Btn
                                className="me-2 cursor-pointer"
                                onClick={() => {
                                    actions.selectNode(parent);
                                }}
                            >
                                <i className="fa-solid fa-arrow-up"></i>
                            </Btn>
                        )}
                        {deletable ? (
                            <Btn
                                className="cursor-pointer"
                                onMouseDown={(e: React.MouseEvent) => {
                                    e.stopPropagation();
                                    actions.delete(id);
                                }}
                            >
                                <i className="fa-solid fa-circle-minus"></i>
                            </Btn>
                        ) : null}
                    </IndicatorDiv>,
                    document.querySelector('.page-container')
                )
                : null}
            {render}
        </>
    );
};
