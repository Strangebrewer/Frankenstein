import React from 'react';
import styled from 'styled-components';
import Bio from '../components/Bio';
import Greeting from '../components/Greeting';
import Projects from '../components/Projects';
import AboutMe from '../components/AboutMe';

const Background = styled.div`
   background: #fff;
`;

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
   <Background>
      <PageContainer className="plain-page">
         <Bio />

         <ScrollContainer className="thing">

            <Greeting id="about" className="about-me-wrap" />

            <Projects id="projects" />

            <AboutMe />

         </ScrollContainer>
      </PageContainer>
   </Background>
);

export default Landing;