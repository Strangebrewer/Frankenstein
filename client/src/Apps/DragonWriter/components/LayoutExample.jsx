import React, { Component } from 'react';
import styled from 'styled-components';

// Exported components are useful for layout
export const PageContainer = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`;

export const Main = styled.div`
   display: flex;
   flex: 1 0 auto;
`;

export const Sidebar = styled.section`
   align-self:  stretch;
   background: ${props => props.test ? '#bc13fe12' : 'transparent'};
   width: ${props => props.theme.sidebar_width};
`;

export const Content = styled.section`
   background: ${props => props.test ? '#ff993312' : 'transparent'};
   display: flex;
   flex: 1 0 auto;
`;

export const ContentMain = styled.div`
   display: flex;
   flex: 1 0 auto;
`;

class LayoutExample extends Component {
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

export default LayoutExample;

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