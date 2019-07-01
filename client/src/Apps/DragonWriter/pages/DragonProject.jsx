import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { PageContainer, Main, Sidebar, Content, ContentMain }
   from '../components/LayoutExample';

class DragonProject extends Component {
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
            </Header>

            <ContentHeader {...this.getTestProps('content_header')}>
               Narfing for Biscuits!
               <h3>Project Overview</h3>
            </ContentHeader>

            <Main>
               <Sidebar {...this.getTestProps('sidebar')}>
                  <SidebarLeft>
                     <h2>
                        Columns <i className="fas fa-plus-circle" />
                     </h2>
                     <ul>
                        <li>Thoughts &amp; Ideas</li>
                        <li>Chapter 1</li>
                        <li>Philosophy</li>
                     </ul>
                  </SidebarLeft>
               </Sidebar>

               <Content {...this.getTestProps('content_main')}>
                  Here, there be dragons!
               </Content>

               <Sidebar {...this.getTestProps('sidebar')}></Sidebar>
            </Main>
            <Footer {...this.getTestProps('all')}>
               copyright and stuff
            </Footer>
         </PageContainer>
      );
   }
}

export default DragonProject;

const Header = styled.header`
   text-align: center;
   padding: 10px;
   background: ${props => props.test ? '#42f6ff15' : 'transparent'};
   h1 {
      font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
      font-size: 1.8rem;
      line-height: 1.2;
   }
   h3 {
      font-family: 'Open Sans', Arial, Helvetica, sans-serif;
      font-size: .9rem;
   }
`;

const SidebarLeft = styled.section`
   height: 100%;
   padding: 10px 10px 0 20px;
   position: relative;
   h2 {
      font-size: 2.4rem;
      font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
      margin-bottom: 10px;
      > i {
         color: #4666ff;
         cursor: pointer;
         font-size: 2rem;
         position: absolute;
         top: 5px;
         right: 30px;
      }
   }
   li {
      font-size: 1.5rem;
      line-height: 1.5;
      list-style: disc;
      margin-left: 25px;
   }
`;

const ContentHeader = styled.header`
   font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
   font-size: 3rem;
   height: 65px;
   line-height: 1.2;
   background: ${props => props.test ? '#4666ff15' : 'transparent'};
   text-align: center;
   h3 {
      font-size: 1.6rem;
      padding-top: 5px;
   }
`;

const Footer = styled.footer`
   background: ${props => props.test ? '#4696af15' : 'transparent'};
   text-align: center;
   padding: 10px;
   height: 50px;
   p {
      font-size: 1.1rem;
   }
`;