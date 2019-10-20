import React, { Fragment } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import DeleteSubjectModal from '../Elements/Modals/DeleteSubject';
import ColumnButtons from './DragonElements/ColumnButtons';
import Text from './Text';

import { deleteSubject } from '../../../../redux/actions/dragon_writer/subject_actions';

const Column = props => {

   const { subject_id, texts } = props;
   const subject = props.subjects[subject_id];

   const deleteSubjectModal = () => {
      props.setModal({
         body: (
            <DeleteSubjectModal subject_id={subject_id} closeModal={props.closeModal} />
         )
      })
   }

   return (
      <Draggable draggableId={subject_id} index={props.index}>
         {(provided, snapshot) => (
            <ColumnContainer
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}
               isDragging={snapshot.isDragging}
               isDraggingOver={snapshot.draggingOver}
            >
               <ColumnButtons
                  subject_id={subject_id}
                  title={subject.title}
                  project_link={props.project_link}
                  deleteSubjectModal={deleteSubjectModal}
               />

               <ColumnHeader>
                  <h2>{subject.title}</h2>
                  <p>{subject.subtitle}</p>
               </ColumnHeader>

               <Droppable droppableId={subject_id} type="text">
                  {(provided, snapshot) => (
                     <TextContainer
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                     >
                        {subject.text_order && subject.text_order.map((text_id, index) => {
                           const text = texts[text_id];
                           return <Text {...provided} key={text_id} text={text} index={index} />
                        })}
                        {provided.placeholder}
                     </TextContainer>
                  )}
               </Droppable>
            </ColumnContainer>
         )}
      </Draggable>
   );
};

function mapStateToProps(state) {
   return {
      subjects: state.subjects,
      texts: state.texts
   }
}

const mapDispatchToProps = {
   deleteSubject
}

export default connect(mapStateToProps, mapDispatchToProps)(Column);

const ColumnContainer = styled.div`
   background: ${props => (
      props.published
         ? props.isDragging ? "rgba(22, 136, 130, 0.1)" : "rgba(22, 136, 130, 0.2)"
         : props.isDragging ? "rgba(255, 255, 255, 0.183)" : "rgba(255, 255, 255, 0.133)"
   )};
   border-left: 1px solid ${props => props.published ? 'rgb(18, 110, 106)' : 'rgb(255, 255, 255, 0.183)'};
   border-top: 1px solid ${props => props.published ? 'rgb(22, 136, 130)' : 'rgb(255, 255, 255, 0.533)'};
   box-shadow: 4px 4px 4px rgb(0,0,0);
   margin: 0 10px;
   min-width: 320px;
   max-width: 320px;
   position: relative;
   text-shadow: 2px 2px 2px rgb(0,0,0);
   width: ${props => props.theme.column_width};
`;

const ColumnHeader = styled.div`
   position: absolute;
   top: 0;
   width: 100%;
   h2 {
      font-family: ${props => props.theme.font_playfair};
      font-size: 2.4rem;
      margin: 8px 0 2px 0;
      overflow: hidden;
      padding: 30px 20px 5px 20px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
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
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   min-height: 100%;
`;