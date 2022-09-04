import React, {Component} from 'react';
import {useEditor, Element, useNode, Editor} from '@craftjs/core';
import {Button, Col, Container, Row} from "reactstrap";
import {TextIngredient} from "../ingredients/TextIngredient";
import {ContainerIngredient} from "../ingredients/ContainerIngredient";
import './ToolboxPane.css';
import {ImageIngredient} from "../ingredients/ImageIngredient";
import {DividerIngredient} from "../ingredients/DividerIngredient";
import {TableIngredient} from "../ingredients/TableIngredient";
import {EntryIngredient} from "../ingredients/EntryIngredient";
import ToolboxItem from "./toolbox-item/ToolboxItem";

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
                       spawns={<ImageIngredient />}
                       icon={'fa-solid fa-image'}
                       text={'Image'} />
               </Col>
           </Row>

           <Row>
               <Col>
                   <ToolboxItem
                       spawns={<ImageIngredient />}
                       icon={'fa-solid fa-grip-lines'}
                       text={'Row'} />
               </Col>
               <Col>
                   <ToolboxItem
                       spawns={<ImageIngredient />}
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
                       spawns={<EntryIngredient />}
                       icon={'fa-solid fa-keyboard'}
                       text={'Input'} />
               </Col>
               <Col>

               </Col>
           </Row>

       </Container>
    );

}


export default ToolboxPane;
