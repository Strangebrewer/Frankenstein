import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FullText from './FullText';

const ReadModeColumn = props => {

   const subject = props.subjects[props.subject_id];
   const { text_order } = subject;

   return (
      <Droppable droppableId={props.subject_id} type="text">
         {(provided, snapshot) => (
            <Column
               {...provided.droppableProps}
               ref={provided.innerRef}
               isDraggingOver={snapshot.draggingOver}
            >
               {text_order.map((text_id, index) => {
                  const text = props.texts[text_id];
                  return (
                     <FullText
                        key={index}
                        text={text}
                        index={index}
                     />
                  )
               })}
               {provided.placeholder}
            </Column>
         )}
      </Droppable>
   );

}

function mapStateToProps(state) {
   return {
      subjects: state.subjects,
      texts: state.texts
   }
}

function mapDispatchToProps(dispatch) {
   return {

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReadModeColumn);

const Column = styled.div`
   display: flex;
   flex-direction: column;
   padding: 10px 0;
   min-height: 80vh;
   max-width: 1300px;
   width: 100%;
`;