import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  background: transparent;
  display: flex;
  height: calc(100%);
  overflow: auto;
  position: relative;
  flex: 1 0 auto;
  border: 1px solid red;
`;

const MainDropZone = ({ children }) => {
  return (
    <Droppable droppableId="all-subjects" direction="horizontal" type="subject">
      {provided => (
        <Container {...provided.droppableProps} ref={provided.innerRef}>
          {children}
          {provided.placeholder}
        </Container>
      )}
    </Droppable>
  );
}

export default MainDropZone;