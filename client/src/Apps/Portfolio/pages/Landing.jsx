import React from 'react';
import styled from 'styled-components';
import Resume from '../components/Resume';
import Hello from '../components/Hello';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';

const PageContainer = styled.div`
   max-width: 900px;
   margin: auto;
`;

const ScrollContainer = styled.div`
   padding: 0 30px;
   font-family: 'Lato', Arial, Helvetica, sans-serif;
   font-size: .9rem;
   @media (min-width: 650px) {
      padding: 0 30px;
      font-size: 1.1rem;
   }
`;

const Landing = () => (
   <PageContainer className="plain-page">
      <Resume />

      <ScrollContainer className="thing">

         <Hello id="about" className="about-me-wrap" />

         <Projects id="projects" />

         <AboutMe />

      </ScrollContainer>
   </PageContainer>
);

export default Landing;