import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
   background: transparent;
   display: flex;
   height: calc(100%);
   max-width: 100%;
   overflow: auto;
   position: relative;
   flex: 1 0 auto;
   ::-webkit-scrollbar {
      display: none;
   }
`;

const MainDropZone = props => {
  return (
    <Droppable droppableId={props.id} direction="horizontal" type="subject">
      {provided => (
        <Container {...provided.droppableProps} ref={provided.innerRef}>
          {props.children}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}

export default MainDropZone;