import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Project from './Project';

const ProjectList = props => {

   return (
      <Container>
         {props.projects.map((project, index) => (
            <Project key={index} project={project} />
         ))}
      </Container>
   );

}

function mapStateToProps(state) {
   return {
      projects: state.projects
   }
}

function mapDispatchToProps(dispatch) {
   return {

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);

const Container = styled.div`
   margin: auto;
   padding: 15px;
   width: 590px;
`;