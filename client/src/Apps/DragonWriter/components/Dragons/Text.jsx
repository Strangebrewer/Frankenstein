import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Text = props => {

   return (
      <Draggable
         draggableId={props.text._id}
         index={props.index}
      >
         {(provided, snapshot) => (
            <TextContainer
               {...provided.draggableProps}
               ref={provided.innerRef}
               isDragging={snapshot.isDragging}
               {...provided.dragHandleProps}
            >
               <h2>{props.text.title}</h2>
               <p>{props.text.subtitle}</p>
            </TextContainer>
         )}
      </Draggable>
   );

}

export default Text;

const TextContainer = styled.div`
   background: ${props => (
      props.published
         ? props.isDragging ? "rgba(255, 255, 255, 0.36)" : "rgba(255, 255, 255, 0.25)"
         : props.isDragging ? "rgba(22, 136, 130, 0.55)" : "rgba(22, 136, 130, 0.287)"
   )};
   border-left: 1px solid ${props => (
      props.published ? "rgba(255, 255, 255, 0.183)" : "rgb(18, 110, 106)"
   )};
   border-top: 1px solid ${props => (
      props.published ? "rgba(255, 255, 255, 0.533)" : "rgb(22, 136, 130)"
   )};
   border-radius: 5px;
   box-shadow: 2px 2px 4px rgb(0,0,0);
   color: rgb(255,255,255);
   margin-bottom: 8px;
   opacity: ${props => props.loading ? "0.9" : "1"};
   padding: 20px;
   position: relative;
   transition: background-color .2s ease-in-out;
   width: 100%;
   &:hover {
      background: ${props => (
      props.published ? "rgba(255, 255, 255, 0.36)" : "rgba(22, 136, 130, 0.55)"
   )};
   }
   > h2 {
      font-family: ${props => props.theme.font_playfair};
      font-size: 1.75rem;
      padding-bottom: 4px;
      word-wrap: break-word;
   }
   > p {
      font-size: 1.25rem;
      line-height: 1.2;
      padding-left: 12px;
   }
`;