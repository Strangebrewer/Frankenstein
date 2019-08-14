import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import { Main, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import Footer from '../components/Elements/Footer';

import buttons from './calc.json';

const Calculatorium = props => {
   return (
      <Page>
         <Main>
            <Content>
               <Calculator>
                  <Droppable droppableId="display" type="calc" direction="horizontal">
                     {(provided, snapshot) => (
                        <Display
                           ref={provided.innerRef}
                           {...provided.droppableProps}
                        >
                           {props.display.map((button_id, index) => {
                              const button = buttons.filter(button => button.id === button_id);
                              return (
                                 <Draggable draggableId={button_id} key={index} index={index}>
                                    {(provided, snapshot) => (
                                       <DisplayDiv
                                          {...provided.draggableProps}
                                          ref={provided.innerRef}
                                          isDragging={snapshot.isDragging}
                                          {...provided.dragHandleProps}
                                          value={button_id}
                                       >
                                          {
                                             button[0].type === 'icon'
                                                ? <i className={`${button[0].label}`} />
                                                : button[0].label
                                          }
                                       </DisplayDiv>
                                    )}
                                 </Draggable>
                              )
                           })}
                           {provided.placeholder}
                        </Display>
                     )}
                  </Droppable>

                  <Droppable droppableId="buttons" type="calc" direction="horizontal">
                     {(provided, snapshot) => (
                        <NumberBox
                           ref={provided.innerRef}
                           {...provided.droppableProps}
                           isDraggingOver={snapshot.isDraggingOver}
                        >
                           {buttons.map((button, index) => {
                              if (index <= 3)
                                 return (
                                    <Draggable draggableId={button.id} key={index} index={index}>
                                       {(provided, snapshot) => (
                                          <Button
                                             {...provided.draggableProps}
                                             ref={provided.innerRef}
                                             isDragging={snapshot.isDragging}
                                             {...provided.dragHandleProps}
                                             value={button.id}
                                          >
                                             {
                                                button.type === 'icon'
                                                   ? <i className={`${button.label}`} />
                                                   : button.label
                                             }
                                          </Button>
                                       )}
                                    </Draggable>
                                 )
                           })}
                           {provided.placeholder}
                        </NumberBox>
                     )}
                  </Droppable>
               </Calculator>
            </Content>
         </Main>
      </Page>
   );
};

function mapStateToProps(state) {
   return {
      display: state.calcDisplay
   }
}

function mapDispatchToProps(dispatch) {
   return {

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculatorium);

const Calculator = styled.div`
   border: 1px solid grey;
   margin: auto;
   width: 442px;
   background: #383838;
   padding: 20px;
`;

const Display = styled.div`
   border: 2px solid black;
   border-bottom: 2px solid #fff;
   border-right: 2px solid #fff;
   background: #aaa;
   margin: 0 4px 20px 4px;
   height: 160px;
   display: flex;
`;

const NumberBox = styled.div`
   width: 100%;
   display: flex;
   /* flex-wrap: wrap; */
`;

const Button = styled.div`
   background: #d9d9d9;
   border: 2px solid #111;
   border-top: 2px solid #fff;
   border-left: 2px solid #fff;
   color: black;
   display: flex;
   justify-content: center;
   align-items: center;
   font-size: 2rem;
   height: 75px;
   width: 90px;
   margin: 5px;
`;

const DisplayDiv = styled.div``;