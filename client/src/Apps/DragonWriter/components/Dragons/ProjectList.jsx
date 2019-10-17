import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Project from './Project';
import { Button } from '../Elements/Forms/FormElements';
import NewProjectForm from '../Elements/Forms/NewProject';
import UpdateProjectForm from '../Elements/Forms/UpdateProject';

import { deleteProject } from '../../../../redux/actions/dragon_writer/project_actions';

const ProjectList = props => {

   const [loading, setLoading] = useState(false);

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

   const deleteProjectModal = id => {
      props.setModal({
         body: (
            <Fragment>
               <h3>Are you sure you want to delete this entire project?</h3>
               <p>(and all associated texts and topics)</p>
            </Fragment>
         ),
         buttons: (
            <div>
               <Button onClick={() => deleteProject(id)}>
                  Yes, delete it
               </Button>
               <Button onClick={props.closeModal}>
                  Cancel
               </Button>
            </div>
         ),
         style: { textAlign: "center" }
      })
   }

   const deleteProject = async project_id => {
      setLoading(true);
      console.log('deleteProject project_id:::', project_id);
      await props.deleteProject(project_id);
      props.closeModal();
      setLoading(false);
   }

   return (
      <Droppable droppableId="42" type="project">
         {(provided, snapshot) => (
            <Container
               {...provided.droppableProps}
               ref={provided.innerRef}
               isDraggingOver={snapshot.isDraggingOver}
            >
               {project_order ? project_order.map((project_id, index) => {
                  const project = projects[project_id];
                  return (
                     <Project
                        key={index}
                        project={project}
                        index={index}
                        loading={loading}
                        deleteProjectModal={deleteProjectModal}
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

const Container = styled.div`
   margin: auto;
   width: 590px;
`;