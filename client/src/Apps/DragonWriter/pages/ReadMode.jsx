import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import { Themes } from '../../../styles/Themes';
import { PageContainer, Main, Sidebar, Content } from '../components/Layout';
import EditorLogic from '../components/Slate/EditorLogic';
import NewTextEditor from '../components/Slate/NewTextEditor';
import { FullText } from '../components/Dragons/FullText';

import texts from '../utils/texts.json';

class ReadMode extends Component {
   render() {
      return (
         <ThemeProvider theme={Themes.dragons}>
            <PageContainer>
               <Header>
                  <h1><Link to="/dragon-writer">DRAGON WRITER</Link></h1>
               </Header>

               <ContentHeader>
                  <h2>Narfing for Biscuits!</h2>
                  <h3>Thoughts &amp; Ideas</h3>
                  <LinkContainer>
                     <button>overview</button>
                     <button>full text view</button>
                     <button>print view</button>
                  </LinkContainer>
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
                     <TextColumn>
                        <DragonTextList>
                           {texts.map((text, index) => (
                              <FullText
                                 key={index}
                                 text={text}
                                 index={index}
                              />
                           ))}
                        </DragonTextList>
                     </TextColumn>
                  </Content>

                  <Sidebar></Sidebar>
               </Main>
               <Footer></Footer>
            </PageContainer>
         </ThemeProvider>
      )
   }
}

export default ReadMode;

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

const LinkContainer = styled.div`
   padding-bottom: 15px;
   text-align: center;
   > button {
      background: transparent;
      border: none;
      border-right: 1px solid white;
      color: white;
      cursor: pointer;
      font-family: ${props => props.theme.font_opensans};
      outline: transparent;
   }
   > button:last-of-type {
      border-right: none;
   }
`;

const TextColumn = styled.div`
   display: flex;
   flex-direction: column;
   padding: 10px 30px;
   /* width: 100%; */
   min-height: 100vh;
   /* max-width: 1500px */
`;

const DragonTextList = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   position: relative;
`;