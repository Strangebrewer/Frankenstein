import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../../styles/Themes';
import { PageContainer, Main, Sidebar, Content } from '../components/Layout';
import EditorLogic from '../components/Slate/EditorLogic';
import NewTextEditor from '../components/Slate/NewTextEditor';

import texts from '../utils/texts.json';

class Project extends Component {

   render() {
      return (
         <ThemeProvider theme={Themes.dragons}>
            <PageContainer>
               <Header>
                  <h1><Link to="/dragon-writer">DRAGON WRITER</Link></h1>
               </Header>

               <ContentHeader>
                  Narfing for Biscuits!
               <h3>Project Overview</h3>
               </ContentHeader>

               <Main>
                  <Sidebar>
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

                  <Content>
                     <Column key="1">
                        <ColumnHeader>
                           <h2>Thoughts &amp; Ideas</h2>
                           <p>Bursts of Creativity and/or Stupidity</p>
                        </ColumnHeader>
                        <Texts>
                           {texts.map((text, index) => {
                              return (
                                 <Item key={index}>
                                    <h2>{text.title}</h2>
                                    <p>{text.subtitle}</p>
                                 </Item>
                              )
                           })}
                        </Texts>
                     </Column>

                     <Column key="2">
                        <ColumnHeader>
                           <h2>Chapter 1</h2>
                           <p>Where Shall I Begin?</p>
                        </ColumnHeader>

                        <Texts>
                           {texts.map((text, index) => {
                              if (index > 3)
                                 return (
                                    <Item key={index}>
                                       <h2>{text.title}</h2>
                                       <p>{text.subtitle}</p>
                                    </Item>
                                 )
                           })}
                        </Texts>
                     </Column>

                     <Column key="3">
                        <ColumnHeader>
                           <h2>Philosophy</h2>
                           <p>Philosophical Underpinnings of the story or its elements.</p>
                        </ColumnHeader>
                        <Texts>
                           {texts.map((text, index) => {
                              if (index === 2 || index === 3 || index === 5)
                                 return (
                                    <Item key={index}>
                                       <h2>{text.title}</h2>
                                       <p>{text.subtitle}</p>
                                    </Item>
                                 )
                           })}
                        </Texts>
                     </Column>


                     {/* <EditorLogic>
                     {editor_props => (
                        <NewTextEditor {...editor_props} />
                     )}
                  </EditorLogic> */}
                  </Content>

                  <Sidebar></Sidebar>
               </Main>
               <Footer></Footer>
            </PageContainer>
         </ThemeProvider>
      );
   }
}

export default Project;

const Header = styled.header`
   text-align: center;
   padding: 10px;
   background: ${props => props.test ? '#42f6ff15' : 'transparent'};
   h1 {
      font-family: ${props => props.theme.font_playfair};
      font-size: 1.8rem;
      line-height: 1.2;
   }
`;

const SidebarLeft = styled.section`
   height: 100%;
   padding: 10px 10px 0 20px;
   position: relative;
   h2 {
      font-size: 2.4rem;
      font-family: ${props => props.theme.font_playfair};
      margin-bottom: 10px;
      > i {
         color: #62c2ee ;
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

const Column = styled.div`
   background: ${props => (
      props.published
         ? props.isDragging ? "rgba(22, 136, 130, 0.1)" : "rgba(22, 136, 130, 0.2)"
         : props.isDragging ? "rgba(255, 255, 255, 0.183)" : "rgba(255, 255, 255, 0.133)"
   )};
   border-left: 1px solid ${props => props.published ? 'rgb(18, 110, 106)' : 'rgb(255, 255, 255, 0.183)'};
   border-top: 1px solid ${props => props.published ? 'rgb(22, 136, 130)' : 'rgb(255, 255, 255, 0.533)'};
   box-shadow: 4px 4px 4px rgb(0,0,0);
   display: flex;
   flex-direction: column;
   margin: 20px 10px 10px 10px;
   min-height: 600px;
   min-width: 300px;
   position: relative;
   text-shadow: 2px 2px 2px rgb(0,0,0);
   width: ${props => props.theme.column_width};
`;

const ColumnHeader = styled.div`
   position: absolute;
   top: 20px;
   width: 100%;
   h2 {
      font-family: ${props => props.theme.font_playfair};
      font-size: 2.4rem;
      margin: 8px 0 2px 0;
      overflow: hidden;
      padding: 10px 8px 5px 8px;
      text-align: center;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 300px;
   }
   p {
      border-top: 1px solid ${props => props.theme.mainColor};
      color: ${props => props.theme.mainColor};
      font-size: 1.3rem;
      margin: 0 10px;
      min-height: 75px;
      padding: 8px;
      text-align: center;
   }
`;

const Texts = styled.div`
   box-shadow: ${props => props.isDraggingOver
      ? `0 0 5px rgba(38, 212, 204, .5),
         0 0 2px rgba(38, 212, 204, .5),
         inset 0 0 20px 0 rgba(39, 212, 204, .5)`
      : "none"};
   display: flex;
   flex-direction: column;
   flex-grow: 1;
   padding: 8px;
   padding-top: 136px;
   transition: box-shadow .2s ease-in-out;
`;

const Item = styled.div`
   background: ${props => (
      props.published
         ? props.isDragging ? "rgba(255, 255, 255, 0.36)" : "rgba(255, 255, 255, 0.25)"
         : props.isDragging ? "rgba(22, 136, 130, 0.55)" : "rgba(22, 136, 130, 0.287)"
   )};
   border-left: 1px solid ${props => (
      props.published ? "rgba(255, 255, 255, 0.183)" : "rgb(18, 110, 106)"
   )};
   border-top: 1px solid ${props => (
      props.published ? "rgba(255, 255, 255, 0.533)" : "rgb(22, 136, 130)"
   )};
   border-radius: 5px;
   box-shadow: 2px 2px 4px rgb(0,0,0);
   color: rgb(255,255,255);
   margin-bottom: 8px;
   opacity: ${props => props.loading ? "0.9" : "1"};
   padding: 20px;
   position: relative;
   transition: background-color .2s ease-in-out;
   width: 100%;
   &:hover {
      background: ${props => (
      props.published ? "rgba(255, 255, 255, 0.36)" : "rgba(22, 136, 130, 0.55)"
   )
   };
   }
   > h2 {
      font-family: ${props => props.theme.font_playfair};
      font-size: 1.75rem;
      padding-bottom: 4px;
      word-wrap: break-word;
   }
   > p {
      font-size: 1.25rem;
      line-height: 1.2;
      padding-left: 12px;
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