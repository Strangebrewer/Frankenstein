import React from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Project from './Project';

const ProjectList = props => {

   const { projects, project_order } = props;

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
                  return <Project key={index} project={project} index={index} />
               }) : null}
               {provided.placeholder}
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

function mapDispatchToProps(dispatch) {
   return {

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

const Container = styled.div`
   margin: auto;
   width: 590px;
`;