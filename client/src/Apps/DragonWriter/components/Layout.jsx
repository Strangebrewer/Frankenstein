import React, { Component } from 'react';
import styled from 'styled-components';
import Page from './Elements/Page';

// Exported components - useful for layout
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
         <Page>
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
         </Page>
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