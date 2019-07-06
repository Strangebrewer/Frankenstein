import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../../styles/Themes';
import { PageContainer, Main, Sidebar, Content, ContentMain }
   from '../components/Layout';

class DragonWriter extends Component {

   render() {
      return (
         <ThemeProvider theme={Themes.dragons}>
            <PageContainer>
               <Header>
                  <h1><Link to="/dragon-writer">DRAGON WRITER</Link></h1>
                  <h3>Drag n Drop Storyboarding for Writers</h3>
               </Header>

               <Main>
                  <Sidebar></Sidebar>

                  <Content>
                     <ProjectList>
                        <Project>
                           <Buttons>
                              <button><i className="fab fa-accessible-icon" /></button>
                              <button><i className="fab fa-500px" /></button>
                              <button><i className="far fa-alarm-clock" /></button>
                              <button><i className="fas fa-alicorn" /></button>
                           </Buttons>

                           <Link to="/dragon-writer/narfing">
                              <h2>Narfing for Biscuits!</h2>
                              <p>That project you started to make the dogs happy...</p>
                           </Link>
                        </Project>

                        <Project>
                           <Buttons>
                              <button><i className="fab fa-accessible-icon" /></button>
                              <button><i className="fab fa-500px" /></button>
                              <button><i className="far fa-alarm-clock" /></button>
                              <button><i className="fas fa-alicorn" /></button>
                           </Buttons>

                           <Link to="/dragon-writer/narfing">
                              <h2>Shitting!</h2>
                              <p>It's not really something that needs a writing project.</p>
                           </Link>
                        </Project>

                        <Project>
                           <Buttons>
                              <button><i className="fab fa-accessible-icon" /></button>
                              <button><i className="fab fa-500px" /></button>
                              <button><i className="far fa-alarm-clock" /></button>
                              <button><i className="fas fa-alicorn" /></button>
                           </Buttons>

                           <Link to="/dragon-writer/narfing">
                              <h2>A New Novel</h2>
                              <p>This is kind of what this app is for.</p>
                           </Link>
                        </Project>
                     </ProjectList>
                  </Content>

                  <Sidebar></Sidebar>
               </Main>

               <Footer></Footer>
            </PageContainer>
         </ThemeProvider>
      );
   }
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

const Footer = styled.footer`
   background: ${props => props.test ? '#4696af15' : 'transparent'};
   text-align: center;
   padding: 10px;
   height: 120px;
   p {
      font-size: 1.1rem;
   }
`;

const Project = styled.div`
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

const Buttons = styled.div`
   position: absolute;
   top: 8px;
   right: 8px;
   button {
      padding: 0 4px 4px 4px;
      background: transparent;
      outline: transparent;
      border: none;
      color: #fff;
   }
`;

const ProjectList = styled.div`
   margin: auto;
   padding: 15px;
   width: 590px;
`;