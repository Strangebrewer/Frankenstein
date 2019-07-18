import React from 'react';
import { Main, Sidebar, Content } from '../components/Layout';
import StoryboardContainer from '../components/Dragons/StoryboardContainer';
import SidebarLeftMenu from '../components/Elements/SidebarLeftMenu';
import MainHeader from '../components/Elements/MainHeader';
import ContentHeader from '../components/Elements/ContentHeader';
import Page from '../components/Elements/Page';
import Footer from '../components/Elements/Footer';

const Storyboard = props => {
   return (
      <Page>
         <MainHeader />
         <ContentHeader />

         <Main>
            <Sidebar>
               <SidebarLeftMenu />
            </Sidebar>

            <Content>
               <StoryboardContainer />
            </Content>

            <Sidebar></Sidebar>
         </Main>
         <Footer />
      </Page>
   )
}

export default Storyboard;