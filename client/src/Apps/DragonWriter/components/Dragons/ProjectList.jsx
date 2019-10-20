import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Project from './Project';
import { Button } from '../Elements/Forms/FormElements';
import NewProjectForm from '../Elements/Forms/NewProject';
import UpdateProjectForm from '../Elements/Forms/UpdateProject';
import ModalLogic from '../Elements/ModalLogic';

import { deleteProject } from '../../../../redux/actions/dragon_writer/project_actions';

const ProjectList = props => {

   const { projects, project_order } = props;

   const newProjectModal = () => {
      props.setModal({
         body: <NewProjectForm closeModal={props.closeModal} />
      })
   }

   const updateProjectModal = project => {
      props.setModal({
         body: <UpdateProjectForm project={project} closeModal={props.closeModal} />
      })
   }

   return (
      <Droppable droppableId="42" type="project">
         {(provided, snapshot) => (
            <ModalLogic>
               {modalProps => (
                  <Container
                     {...provided.droppableProps}
                     ref={provided.innerRef}
                     isDraggingOver={snapshot.isDraggingOver}
                  >
                     {project_order ? project_order.map((project_id, index) => {
                        const project = projects[project_id];
                        return (
                           <Project
                              {...modalProps}
                              key={index}
                              project={project}
                              index={index}
                              updateProjectModal={updateProjectModal}
                           />
                        )
                     }) : null}
                     {provided.placeholder}

                     <Button full onClick={newProjectModal}>
                        New Project
                     </Button>
                  </Container>
               )}
            </ModalLogic>
         )}
      </Droppable>
   );

}

function mapStateToProps(state) {
   return {
      projects: state.projects,
      project_order: state.projects.project_order,
      // user: state.user
   }
}

const mapDispatchToProps = {
   deleteProject
}

export default connect(mapStateToProps)(ProjectList);

const Container = styled.div`
   margin: auto;
   width: 590px;
`;