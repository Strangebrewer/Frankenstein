import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Project from './Project';
import { Button, Input, Label, TextArea } from '../Elements/Forms/FormElements';
import { createNewProject } from '../../../../redux/actions/dragon_writer/project_actions';

const ProjectList = props => {

   const [link, setLink] = useState('');
   const [subtitle, setSubtitle] = useState('');
   const [title, setTitle] = useState('');

   function handleInputChange(event) {
      const { name, value } = event.target;
      console.log('value:::', value);
      if (name === 'link') setLink(value);
      if (name === 'subtitle') setSubtitle(value);
      if (name === 'title') setTitle(value);
   }

   const { projects, project_order } = props;

   const newProjectModal = () => {
      props.setModal({
         body: (
            <form style={{ margin: 'auto', justifyContent: 'center' }}>
               <h2>New Project</h2>
               <Label>Project Title:</Label>
               <Input
                  name="title"
                  type="text"
                  maxLength="40"
                  onChange={handleInputChange}
                  placeholder="40-character limit"
               />
               <Label>Project subtitle:</Label>
               <TextArea
                  name="subtitle"
                  type="text"
                  maxLength="140"
                  onChange={handleInputChange}
                  placeholder="140-character limit"
               />
               <Label>Project Keyword:</Label>
               <Input
                  name="link"
                  type="text"
                  maxLength="12"
                  onChange={handleInputChange}
                  placeholder="12-character limit"
               />
               <Button onClick={e => createProject(e)}>Submit</Button>
               <Button style={{ margin: "10px auto 0 auto" }} onClick={(e) => props.closeModal(e)}>Cancel</Button>
            </form>
         )
      })
   }

   const createProject = (e) => {
      e.preventDefault();
      props.createNewProject({ title, subtitle, link });
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
                  return <Project key={index} project={project} index={index} />
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
   createNewProject
}

// function mapDispatchToProps(dispatch) {
//    return {
//       createNewProject
//    }
// }

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

const Container = styled.div`
   margin: auto;
   width: 590px;
`;