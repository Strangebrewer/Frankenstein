import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import FullText from './FullText';

import texts from '../../utils/texts.json';

const ReadModeColumn = props => {

   return (
      <Droppable droppableId="readmode" type="text">
         {(provided, snapshot) => (
            <Column
               {...provided.droppableProps}
               ref={provided.innerRef}
               isDraggingOver={snapshot.draggingOver}
            >
               {texts.map((text, index) => (
                  <FullText
                     key={index}
                     text={text}
                     index={index}
                  />
               ))}
               {provided.placeholder}
            </Column>
         )}
      </Droppable>
   );

}

export default ReadModeColumn;

const Column = styled.div`
   display: flex;
   flex-direction: column;
   padding: 10px 0;
   min-height: 80vh;
   max-width: 1300px
`;