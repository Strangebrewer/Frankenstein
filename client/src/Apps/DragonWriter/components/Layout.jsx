import React, { Component } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
`;

const Header = styled.header`
   height: 60px;
   background: #4666ff;
`;

const Main = styled.div`
   flex: 1 0 auto;
   display: flex;
`;

const Footer = styled.footer`
   height: 60px;
   background: #39ff14;
`;

const LeftSidebar = styled.section`
   align-self:  stretch;
   width: 200px;
   background: #df002d;
`;

const RightSidebar = styled.section`
   align-self:  stretch;
   width: 200px;
   background: #bc13fe;
`;

const MainMain = styled.section`
   flex: 1 0 auto;
   display: flex;
   flex-direction: column;
`;

const MainMainHeader = styled.header`
   background: #ccff00;
   height: 50px;
`;

const ColumnSlider = styled.div`
   display: flex;
   background: #ff9933;
   flex: 1 0 auto;
`;

class PageLayout extends Component {
   render() {
      const { props } = this;
      return (
         <PageContainer>
            <Header>
               Hardy har har.
            </Header>
            <Main>
               <LeftSidebar>
                  {props.leftSidebar}
               </LeftSidebar>
               <MainMain>
                  <MainMainHeader>
                     {props.titleHeader}
                  </MainMainHeader>
                  <ColumnSlider>
                     {props.children}
                  </ColumnSlider>
               </MainMain>
               <RightSidebar>
                  {props.rightSidebar}
               </RightSidebar>
            </Main>
            <Footer>
               I am ze footer.
            </Footer>
         </PageContainer>
      );
   }
}

export default PageLayout;