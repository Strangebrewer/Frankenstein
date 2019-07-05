import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { PageContainer, Main, Sidebar, Content, ContentMain } from '../components/LayoutExample';
import EditorLogic from '../components/Slate/EditorLogic';
import NewTextEditor from '../components/Slate/NewTextEditor';

import texts from '../utils/texts.json';

class DragonProject extends Component {
   state = {
      all: false,
      sidebar: false,
      content_header: false,
      content_main: false,
      header: false
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
                  <Column>
                     <div>
                        <h2>Thoughts &amp; Ideas</h2>
                        <p>Bursts of Creativity and/or Stupidity</p>
                     </div>
                     <Texts>
                        {texts.map((text, index) => {
                              return (
                                 <>
                                    <Item key={index}>
                                       <h2>{text.title}</h2>
                                       <p>{text.subtitle}</p>
                                    </Item>
                                    <Item key={index}>
                                       <h2>{text.title}</h2>
                                       <p>{text.subtitle}</p>
                                    </Item>
                                 </>
                              )
                        })}
                     </Texts>
                  </Column>

                  <Column>
                     <div>
                        <h2>Chapter 1</h2>
                        <p>Where Shall I Begin?</p>
                     </div>

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

                  <Column>
                     <div>
                        <h2>Philosophy</h2>
                        <p>Philosophical Underpinnings of the story or its elements.</p>
                     </div>
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
   /* align-self:  stretch; */
   width: ${props => props.theme.column_width};
   padding: 10px;
   > div:first-of-type {
      height: 80px;
      > h2 {
         font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
         text-align: center;
         font-size: 2.6rem;
         padding: 5px 0 8px 0;
         /* text-shadow: 0 0 1px #000,
            0 0 2px #000,
            0 0 3px #000,
            0 0 4px #000,
            0 0 5px #fff,
            0 0 8px #fff,
            0 0 10px #fff; */
      }
      > p {
         font-family: 'Open Sans', Arial, Helvetica, sans-serif;
         font-size: 1.3rem;
         text-align: center;
         padding-bottom: 10px;
      }
   }
`;

const Texts = styled.div`
   background: linear-gradient(150deg, #000, 60%, #680000);
   border: 2px solid #2b3834;
   border-radius: 20px;
   box-shadow: inset 3px 3px 10px #000,
      inset -3px -3px 25px #000,
      inset -3px -3px 50px #000;
   height: calc(100% - 80px);
   display: flex;
   flex-direction: column;
   padding-bottom: 15px;
`;

const Item = styled.div`
   background: #c5c5c5;
   border-radius: 10px;
   box-shadow: inset 3px 3px 3px #fff,
      inset -3px -3px 3px #000,
      inset 3px 3px 6px 3px #999,
      inset -3px -3px 6px 3px #fafafa;
   color: #000;
   margin: 15px;
   margin-bottom: 0;
   padding: 10px 15px;
   > :last-of-type {
      margin-bottom: 15px; 
   }
   > h2 {
      font-family: 'Playfair Display SC', 'Times New Roman', Times, serif;
      font-size: 1.8rem;
      /* padding: 5px 0 8px 0; */
   }
   > p {
      font-family: 'Open Sans', Arial, Helvetica, sans-serif;
      font-size: 1.2rem;
      text-indent: 20px;
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