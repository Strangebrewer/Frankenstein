import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Project from './Project';

import projects from '../../utils/projects.json';

const ProjectList = props => {

   return (
      <Container>
         {projects.map((project, index) => (
            <Project key={index} project={project} />
         ))}
      </Container>
   );

}

export default ProjectList;

const Container = styled.div`
   margin: auto;
   padding: 15px;
   width: 590px;
`;