import React, { PureComponent } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Text from './Text';

import texts from '../../utils/texts.json';

class Column extends PureComponent {

   render() {
      return (
         <Draggable draggableId={this.props.id + 1} index={this.props.id + 1}>
            {(provided, snapshot) => (
               <ColumnContainer
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  isDragging={snapshot.isDragging}
                  isDraggingOver={snapshot.draggingOver}
               >
                  <ColumnHeader>
                     <h2>{this.props.subject.subject}</h2>
                     <p>{this.props.subject.thesis}</p>
                  </ColumnHeader>

                  <Droppable droppableId={this.props.id + 10} type="text">
                     {(provided, snapshot) => (
                        <TextContainer
                           ref={provided.innerRef}
                           {...provided.droppableProps}
                           isDraggingOver={snapshot.isDraggingOver}
                        >
                           {texts.map((text, index) => <Text {...provided} key={index} text={text} index={index} id={index} />)}
                           {provided.placeholder}
                        </TextContainer>
                     )}
                  </Droppable>
               </ColumnContainer>
            )}
         </Draggable>
      );
   }
}

export default Column;

const ColumnContainer = styled.div`
   background: ${props => (
      props.published
         ? props.isDragging ? "rgba(22, 136, 130, 0.1)" : "rgba(22, 136, 130, 0.2)"
         : props.isDragging ? "rgba(255, 255, 255, 0.183)" : "rgba(255, 255, 255, 0.133)"
   )};
   border-left: 1px solid ${props => props.published ? 'rgb(18, 110, 106)' : 'rgb(255, 255, 255, 0.183)'};
   border-top: 1px solid ${props => props.published ? 'rgb(22, 136, 130)' : 'rgb(255, 255, 255, 0.533)'};
   box-shadow: 4px 4px 4px rgb(0,0,0);
   display: flex;
   flex-direction: column;
   margin: 20px 10px 10px 10px;
   min-height: 600px;
   min-width: 300px;
   position: relative;
   text-shadow: 2px 2px 2px rgb(0,0,0);
   width: ${props => props.theme.column_width};
`;

const ColumnHeader = styled.div`
   position: absolute;
   top: 20px;
   width: 100%;
   h2 {
      font-family: ${props => props.theme.font_playfair};
      font-size: 2.4rem;
      margin: 8px 0 2px 0;
      overflow: hidden;
      padding: 10px 8px 5px 8px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 300px;
   }
   p {
      border-top: 1px solid ${props => props.theme.mainColor};
      color: ${props => props.theme.mainColor};
      font-size: 1.3rem;
      margin: 0 10px;
      min-height: 75px;
      padding: 8px;
      text-align: center;
   }
`;

const TextContainer = styled.div`
   box-shadow: ${props => props.isDraggingOver
      ? `0 0 5px rgba(38, 212, 204, .5),
         0 0 2px rgba(38, 212, 204, .5),
         inset 0 0 20px 0 rgba(39, 212, 204, .5)`
      : "none"};
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   padding: 8px;
   padding-top: 136px;
   transition: box-shadow .2s ease-in-out;
`;