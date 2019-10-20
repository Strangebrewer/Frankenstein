import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import DeleteProjectModal from '../Elements/Modals/DeleteProject';
import ProjectButtons from './DragonElements/ProjectButtons';

import { deleteProject } from '../../../../redux/actions/dragon_writer/project_actions';

const Project = props => {

   const { project } = props;
   const { _id, link, summary, title } = project;

   const deleteProjectModal = () => {
      props.setModal({
         body: <DeleteProjectModal project_id={_id} closeModal={props.closeModal} />
      })
   }

   return (
      <Draggable
         draggableId={_id}
         index={props.index}
      >
         {(provided, snapshot) => (
            <Container
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               ref={provided.innerRef}
               isDragging={snapshot.isDragging}
            >
               <ProjectButtons
                  project={project}
                  loading={props.loading}
                  deleteProjectModal={deleteProjectModal}
                  updateProjectModal={props.updateProjectModal}
               />

               <Link to={{
                  pathname: `/dragon-writer/${link}`,
                  state: { project: { _id: project._id, title: project.title, summary: project.summary } }
               }}>
                  <h2>{title}</h2>
                  <p>{summary}</p>
               </Link>
            </Container>
         )}
      </Draggable>
   );

};

export default connect(() => ({}), { deleteProject })(Project);

const Container = styled.div`
   background: ${props => props.isDragging
      ? "rgba(22, 136, 130, 0.587)"
      : "rgba(22, 136, 130, 0.437)"};
   border-radius: 5px;
   box-shadow: ${props => (
      props.isDragging
         ? `0 0 15px rgb(38, 212, 204),
            0 0 10px rgb(38, 212, 204),
            0 0 5px rgb(38, 212, 204),
            0 0 2px rgb(38, 212, 204),
            inset 0 0 10px 0 rgb(38, 212, 204)`
         : '4px 4px 4px rgb(0,0,0)'
   )};
   border-left: 1px solid rgb(255, 255, 255, 0.283);
   border-top: 1px solid rgb(255, 255, 255, 0.533);
   line-height: 1.2;
   margin: 0 auto 10px auto;
   padding: 20px 15px;
   position: relative;
   transition: background-color 0.1s ease-in-out;
   &:hover {
      background: rgba(22, 136, 130, 0.587);
   }
   h2 {
      color: #fff;
      font-family: ${props => props.theme.font_playfair};
      font-size: 3.5rem;
      text-shadow: 2px 2px 3px rgb(0,0,0);
      width: 450px;
   }
   p {
      color: #fff;
      font-size: 1.8rem;
      padding-top: 5px;
      text-indent: 25px;
      text-shadow: 2px 2px 3px rgb(0,0,0);
   }
`;