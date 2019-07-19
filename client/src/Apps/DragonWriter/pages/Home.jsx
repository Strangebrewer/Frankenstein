import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Main, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import Footer from '../components/Elements/Footer';
import ProjectList from '../components/Dragons/ProjectList';

const DragonWriter = props => {
   return (
      <Page>
         <Header>
            <h1><Link to="/dragon-writer">DRAGON WRITER</Link></h1>
            <h3>Drag n Drop Storyboarding for Writers</h3>
         </Header>

         <Main>
            <Content>
               <ProjectList />
            </Content>
         </Main>

         <Footer />
      </Page>
   );
}

export default DragonWriter;

const Header = styled.header`
   background: ${props => props.test ? '#42f6ff15' : 'transparent'};
   text-align: center;
   padding: 10px;
   h1 {
      font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
      font-size: 4rem;
      line-height: 1.2;
   }
   h3 {
      font-family: 'Open Sans', Arial, Helvetica, sans-serif;
      font-size: 1.2rem;
   }
`;