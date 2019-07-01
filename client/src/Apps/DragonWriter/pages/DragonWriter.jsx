import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { PageContainer, Main, Sidebar, Content, ContentMain }
   from '../components/LayoutExample';

class DragonWriter extends Component {
   state = {
      all: false,
      sidebar: false,
      content_header: false,
      content_main: false,
      header: false,
   }

   testOn = name => {
      this.setState({ [name]: true })
   }

   testOff = name => {
      this.setState({ [name]: false })
   }

   getTestProps = name => {
      return {
         test: this.state[name] || this.state.all,
         onMouseOver: () => this.testOn(name),
         onMouseLeave: () => this.testOff(name)
      }
   }

   render() {
      return (
         <PageContainer>
            <Header {...this.getTestProps('header')}>
               <h1>DRAGON WRITER</h1>
               <h3>Drag n Drop Storyboarding for Writers</h3>
            </Header>

            <Main>
               <Sidebar {...this.getTestProps('sidebar')}>

               </Sidebar>

               <Content {...this.getTestProps('content_main')}>
                  <ProjectList>
                     <div>
                        <span>
                           <span><i className="fab fa-accessible-icon" /></span>
                           <span><i className="fab fa-500px" /></span>
                           <span><i className="far fa-alarm-clock" /></span>
                           <span><i className="fas fa-alicorn" /></span>
                        </span>
                        <h2>
                           <Link to="/dragon-writer/narfing">Narfing for Biscuits!</Link>
                        </h2>
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
               </Content>

               <Sidebar {...this.getTestProps('sidebar')}>

               </Sidebar>
            </Main>

            <Footer {...this.getTestProps('all')}>
               copyright and stuff
            </Footer>
         </PageContainer>
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
            width: 20px;
            font-size: 14px;
            i {
               cursor: pointer;
            }
         }
      }
      h2 {
         font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
         font-size: 1.8rem;
         font-weight: bold;
         margin-bottom: 5px;
      }
      p {         
         font-family: 'Open Sans', Arial, Helvetica, sans-serif;
         text-indent: 20px;
      }
   }
`;