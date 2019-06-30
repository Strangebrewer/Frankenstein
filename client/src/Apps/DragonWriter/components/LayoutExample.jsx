import React, { Component } from 'react';
import styled from 'styled-components';

export const PageContainer = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`;

const Header = styled.header`
   background: ${props => props.test ? '#4666ff12' : 'transparent'};
   border: ${props => props.test ? '1px solid #4666ff' : 'none'};
   height: 60px;
`;

export const Main = styled.div`
   display: flex;
   flex: 1 0 auto;
`;

const Footer = styled.footer`
   background: ${props => props.test ? '#39ff1412' : 'transparent'};
   border: ${props => props.test ? '1px solid #39ff14' : 'none'};
   height: 60px;
`;

export const Sidebar = styled.section`
   align-self:  stretch;
   background: ${props => props.test ? '#bc13fe12' : 'transparent'};
   border: ${props => props.test ? '1px solid #bc13fe' : 'none'};
   width: 200px;
`;

export const Content = styled.section`
   display: flex;
   flex: 1 0 auto;
   flex-direction: column;
`;

const ContentHeader = styled.header`
   background: ${props => props.test ? '#ccff0012' : 'transparent'};
   border: ${props => props.test ? '1px solid #ccff00' : 'none'};
   height: 50px;
`;

export const ContentMain = styled.div`
   background: ${props => props.test ? '#ff993312' : 'transparent'};
   border: ${props => props.test ? '1px solid #ff9933' : 'none'};
   display: flex;
   flex: 1 0 auto;
`;

class LayoutExample extends Component {
   render() {
      const { props } = this;
      return (
         <PageContainer>
            <Header>
               I am the header!
            </Header>
            <Main>
               <Sidebar>
                  I am the sidebar!
               </Sidebar>
               <Content>
                  <ContentHeader>
                     I am the content header!
                  </ContentHeader>
                  <ContentMain>
                     I am the main content!
                  </ContentMain>
               </Content>
               <Sidebar>
                  I am the other sidebar!
               </Sidebar>
            </Main>
            <Footer>
               I am the footer!
            </Footer>
         </PageContainer>
      );
   }
}

export default LayoutExample;