import React, { Component } from 'react';
import styled from 'styled-components';

// Exported components - useful for layout
export const PageContainer = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   color: #fff;
   background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
     linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
     url('/static/assets/images/background-two.jpg');
   background-repeat: repeat;
   /* background-attachment: fixed; */
   font-family: ${props => props.theme.font_opensans};
`;

export const Main = styled.div`
   display: flex;
   flex: 1 0 auto;
`;

export const Sidebar = styled.section`
   align-self:  stretch;
   background: ${props => props.test ? '#bc13fe12' : 'transparent'};
   min-width: ${props => props.theme.sidebar_width};
`;

export const Content = styled.section`
   background: ${props => props.test ? '#ff993312' : 'transparent'};
   display: flex;
   flex: 1 0 auto;
   max-width: ${props => `calc(100vw - ${props.theme.sidebar_width} - ${props.theme.sidebar_width})`};
   /* border: 1px solid red; */
   margin: 0 auto;
`;

class Layout extends Component {
   render() {
      return (
         <PageContainer>
            <Header>
               I am a header!
            </Header>

            <ContentHeader>
               I am a content header!
            </ContentHeader>

            <Main>
               <Sidebar>
                  I am the layout sidebar!
               </Sidebar>

               <Content>
                  I am the main layout content!
               </Content>

               <Sidebar>
                  I am another layout sidebar!
               </Sidebar>
            </Main>

            <Footer>
               I am a footer!
            </Footer>
         </PageContainer>
      );
   }
}

export default Layout;

// locally used - not exported, useful only as examples.
const Header = styled.header`
   background: '#4666ff12';
   height: 60px;
`;

const Footer = styled.footer`
   background: '#39ff1412';
   height: 60px;
`;

const ContentHeader = styled.header`
   background: '#ccff0012';
   height: 50px;
`;