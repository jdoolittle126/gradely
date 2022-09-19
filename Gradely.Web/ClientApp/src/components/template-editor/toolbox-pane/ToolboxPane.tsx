import React, {Component} from 'react';
import {useEditor, Element, useNode, Editor} from '@craftjs/core';
import {Button, Col, Container, Row} from "reactstrap";
import {TextIngredient} from "../ingredients/TextIngredient/TextIngredient";
import {ContainerIngredient} from "../ingredients/ContainerIngredient/ContainerIngredient";
import './ToolboxPane.css';
import {ImageIngredient} from "../ingredients/ImageIngredient/ImageIngredient";
import {DividerIngredient} from "../ingredients/DividerIngredient";
import {EntryIngredient} from "../ingredients/EntryIngredient/EntryIngredient";
import ToolboxItem from "./toolbox-item/ToolboxItem";
import {FlexIngredient} from "../ingredients/FlexIngredient/FlexIngredient";

export const ToolboxPane = () => {
    const makeGuid = () => {
        let S4 = function() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    return (
       <Container className='text-center'>

           <div className='text-center'>
               <h3 className='border-bottom pb-1'>Toolbox</h3>
           </div>

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
                           custom={{ displayName: 'Image Container' }}
                       >
                            <ImageIngredient source={"https://dummyimage.com/640x360/fff/aaa"}></ImageIngredient>
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
                           margin={['0', '0', '0', '0']}
                           custom={{ displayName: 'Row' }}
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
                               margin={['0', '0', '0', '0']}
                               custom={{ displayName: 'Column' }}
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
                       spawns={<Element
                           canvas
                           is={ContainerIngredient}
                           background={{ r: 255, g: 255, b: 255, a: 1 }}
                           width="100%"
                           height="auto"
                           padding={['10', '10', '10', '10']}
                           margin={['0', '0', '0', '0']}
                           custom={{ displayName: 'Table' }}
                       >
                           <Element
                               canvas
                               is={FlexIngredient}
                               background={{ r: 200, g: 200, b: 200, a: 1 }}
                               flexRow={true}
                               width="100%"
                               height="auto"
                               padding={['10', '10', '10', '10']}
                               margin={['0', '0', '0', '0']}
                               custom={{ displayName: 'Row' }}
                           >
                               <Element
                                   canvas
                                   is={FlexIngredient}
                                   background={{ r: 0, g: 0, b: 255, a: 0 }}
                                   flexRow={false}
                                   width="100%"
                                   height="auto"
                                   padding={['1', '25', '1', '25']}
                                   margin={['0', '0', '0', '0']}
                                   custom={{ displayName: 'Column' }}
                               >
                                   <TextIngredient text={'Header'} fontWeight={'bold'} fontSize={'25px'}></TextIngredient>
                               </Element>
                               <Element
                                   canvas
                                   is={FlexIngredient}
                                   background={{ r: 0, g: 0, b: 255, a: 0 }}
                                   flexRow={false}
                                   width="100%"
                                   height="auto"
                                   padding={['1', '25', '1', '25']}
                                   margin={['0', '0', '0', '0']}
                                   custom={{ displayName: 'Column' }}
                               >
                                   <TextIngredient text={'Header'} fontWeight={'bold'} fontSize={'25px'}></TextIngredient>
                               </Element>
                               <Element
                                   canvas
                                   is={FlexIngredient}
                                   background={{ r: 0, g: 0, b: 255, a: 0 }}
                                   flexRow={false}
                                   width="100%"
                                   height="auto"
                                   padding={['1', '25', '1', '25']}
                                   margin={['0', '0', '0', '0']}
                                   custom={{ displayName: 'Column' }}
                               >
                                   <TextIngredient text={'Header'} fontWeight={'bold'} fontSize={'25px'}></TextIngredient>
                               </Element>
                               <Element
                                   canvas
                                   is={FlexIngredient}
                                   background={{ r: 0, g: 0, b: 255, a: 0 }}
                                   flexRow={false}
                                   width="100%"
                                   height="auto"
                                   padding={['1', '25', '1', '25']}
                                   margin={['0', '0', '0', '0']}
                                   custom={{ displayName: 'Column' }}
                               >
                                   <TextIngredient text={'Header'} fontWeight={'bold'} fontSize={'25px'}></TextIngredient>
                               </Element>
                           </Element>

                           { [1,2,3,4,5].map(value => (
                               <Element
                                   canvas
                                   is={FlexIngredient}
                                   background={{ r: 200, g: 200, b: 200, a: 0.2 }}
                                   flexRow={true}
                                   width="100%"
                                   height="auto"
                                   padding={['10', '10', '10', '10']}
                                   margin={['0', '0', '0', '0']}
                                   custom={{ displayName: 'Row' }}
                               >
                                   <Element
                                       canvas
                                       is={FlexIngredient}
                                       background={{ r: 0, g: 0, b: 0, a: 0 }}
                                       flexRow={false}
                                       width="100%"
                                       height="auto"
                                       padding={['1', '25', '1', '25']}
                                       margin={['0', '0', '0', '0']}
                                       custom={{ displayName: 'Column' }}
                                   >
                                       <TextIngredient text={'Label'}></TextIngredient>
                                   </Element>
                                   <Element
                                       canvas
                                       is={FlexIngredient}
                                       background={{ r: 0, g: 0, b: 0, a: 0 }}
                                       flexRow={false}
                                       width="100%"
                                       height="auto"
                                       padding={['1', '25', '1', '25']}
                                       margin={['0', '0', '0', '0']}
                                       custom={{ displayName: 'Column' }}
                                   >
                                       <EntryIngredient guid={makeGuid()}/>
                                   </Element>
                                   <Element
                                       canvas
                                       is={FlexIngredient}
                                       background={{ r: 0, g: 0, b: 0, a: 0 }}
                                       flexRow={false}
                                       width="100%"
                                       height="auto"
                                       padding={['1', '25', '1', '25']}
                                       margin={['0', '0', '0', '0']}
                                       custom={{ displayName: 'Column' }}
                                   >
                                       <EntryIngredient guid={makeGuid()}/>
                                   </Element>
                                   <Element
                                       canvas
                                       is={FlexIngredient}
                                       background={{ r: 0, g: 0, b: 0, a: 0 }}
                                       flexRow={false}
                                       width="100%"
                                       height="auto"
                                       padding={['1', '25', '1', '25']}
                                       margin={['0', '0', '0', '0']}
                                       custom={{ displayName: 'Column' }}
                                   >
                                       <EntryIngredient guid={makeGuid()}/>
                                   </Element>
                               </Element>
                           ))}

                       </Element>}
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
                       spawns={<EntryIngredient guid={makeGuid()}/>}
                       icon={'fa-solid fa-keyboard'}
                       text={'Input'} />
               </Col>
           </Row>

       </Container>
    );

}


export default ToolboxPane;
