import React, { Component } from 'react';
import styled from 'styled-components';
import { PageContainer, Main, Sidebar, Content, ContentMain }
   from '../components/LayoutExample';

const Header = styled.header`
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
   height: 120px;
`;

const ProjectList = styled.div`
   margin: auto;
   > div {
      padding: 30px;
      border: 1px solid black;
      position: relative;
      margin: 10px 0;
      > span {
         position: absolute;
         top: 5px;
         right: 5px;
         > span {
            display: inline-block;
            width: 25px;
            font-size: 14px;
            text-align: right;
         }
      }
   }
`;

const SidebarInner = styled.div`
   background: black;
   width: 100%;
   height: 100%;
`;

class DragonWriter extends Component {

   render() {
      const { props } = this;
      return (
         <PageContainer>
            <Header>
               <h1>DRAGON WRITER</h1>
               <h3>Drag n Drop Storyboarding for Writers</h3>
            </Header>
            <Main>
               <Sidebar test>
                  
               </Sidebar>
               <Content>

                  <ContentMain test>
                     <ProjectList>
                        <div>
                           <span>
                              <span><i className="fab fa-accessible-icon" /></span>
                              <span><i className="fab fa-500px" /></span>
                              <span><i className="far fa-alarm-clock" /></span>
                              <span><i className="fas fa-alicorn" /></span>
                           </span>
                           <h2>Narfing for Biscuits!</h2>
                           <p>That project you started to make the dogs happy...</p>
                        </div>

                        <div>
                           <span>
                              <span><i className="fab fa-accessible-icon" /></span>
                              <span><i className="fab fa-500px" /></span>
                              <span><i className="far fa-alarm-clock" /></span>
                              <span><i className="fas fa-alicorn" /></span>
                           </span>
                           <h2>Shitting!</h2>
                           <p>It's not really something that needs a writing project.</p>
                        </div>

                        <div>
                           <span>
                              <span><i className="fab fa-accessible-icon" /></span>
                              <span><i className="fab fa-500px" /></span>
                              <span><i className="far fa-alarm-clock" /></span>
                              <span><i className="fas fa-alicorn" /></span>
                           </span>
                           <h2>A New Novel</h2>
                           <p>This is kind of what this app is for.</p>
                        </div>
                     </ProjectList>
                  </ContentMain>
               </Content>
               <Sidebar test></Sidebar>
            </Main>
            <Footer></Footer>
         </PageContainer>
      );
   }
}

export default DragonWriter;