import React, {Component} from 'react';
import {useEditor, Element, useNode, Editor} from '@craftjs/core';
import {Button, Col, Container, Row} from "reactstrap";
import {TextIngredient} from "../ingredients/TextIngredient/TextIngredient";
import {ContainerIngredient} from "../ingredients/ContainerIngredient/ContainerIngredient";
import './ToolboxPane.css';
import {ImageIngredient} from "../ingredients/ImageIngredient";
import {DividerIngredient} from "../ingredients/DividerIngredient";
import {TableIngredient} from "../ingredients/TableIngredient";
import {EntryIngredient} from "../ingredients/EntryIngredient";
import ToolboxItem from "./toolbox-item/ToolboxItem";
import {FlexIngredient} from "../ingredients/FlexIngredient/FlexIngredient";

export const ToolboxPane = () => {
    return (
       <Container className='text-center'>

           <Row className='px-3'>
               <h3 className='border-bottom pb-1'>Toolbox</h3>
           </Row>

           <Row>
               <Col>
                   <ToolboxItem
                       spawns={<TextIngredient />}
                       icon={'fas fa-font'}
                       text={'Text'} />
               </Col>
               <Col>
                   <ToolboxItem
                       spawns={<Element
                           canvas
                           id={'sdknaoidjnaisjd'}
                           is={ContainerIngredient}
                           background={{ r: 0, g: 255, b: 0, a: 0 }}
                           flexDirection="column"
                           width="100%"
                           height="auto"
                           padding={['10', '10', '10', '10']}
                           margin={['1', '1', '1', '1']}
                       >
                            <ImageIngredient></ImageIngredient>
                       </Element>}
                       icon={'fa-solid fa-image'}
                       text={'Image'} />
               </Col>
           </Row>

           <Row>
               <Col>
                   <ToolboxItem
                       spawns={<Element
                           canvas
                           is={FlexIngredient}
                           background={{ r: 255, g: 0, b: 0, a: 1 }}
                           flexRow={true}
                           width="100%"
                           height="auto"
                           padding={['10', '10', '10', '10']}
                           margin={['1', '1', '1', '1']}
                       >
                           <TextIngredient text={'This is a row!'}></TextIngredient>
                       </Element>}
                       icon={'fa-solid fa-grip-lines'}
                       text={'Row'} />
               </Col>
               <Col>
                   <ToolboxItem
                       spawns={
                           <Element
                               canvas
                               is={FlexIngredient}
                               background={{ r: 0, g: 0, b: 255, a: 1 }}
                               flexRow={false}
                               width="100%"
                               height="auto"
                               padding={['10', '10', '10', '10']}
                               margin={['1', '1', '1', '1']}
                           >
                               <TextIngredient text={'This is a column!'}></TextIngredient>
                           </Element>
                   }
                       icon={'fa-solid fa-grip-lines-vertical'}
                       text={'Column'} />
               </Col>
           </Row>

           <Row>
               <Col>
                   <ToolboxItem
                       spawns={<DividerIngredient />}
                       icon={'fa-solid fa-arrows-down-to-line'}
                       text={'Divider'} />
               </Col>
               <Col>
                   <ToolboxItem
                       spawns={<TableIngredient />}
                       icon={'fa-solid fa-table'}
                       text={'Table'} />
               </Col>
           </Row>

           <Row>
               <Col>
                   <ToolboxItem
                       spawns={
                           <Element
                               canvas
                               is={ContainerIngredient}
                               background={{ r: 0, g: 255, b: 0, a: 1 }}
                               flexDirection="column"
                               width="100%"
                               height="auto"
                               padding={['10', '10', '10', '10']}
                               margin={['1', '1', '1', '1']}
                           />}
                       icon={'fa-regular fa-square'}
                       text={'Freeform'} />
               </Col>
               <Col>
                   <ToolboxItem
                       spawns={<EntryIngredient />}
                       icon={'fa-solid fa-keyboard'}
                       text={'Input'} />
               </Col>
           </Row>

       </Container>
    );

}


export default ToolboxPane;
