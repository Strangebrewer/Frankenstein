import React from 'react';
import { Main, Sidebar, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import ReadModeColumn from '../components/Dragons/ReadModeColumn';
import SidebarLeftMenu from '../components/Elements/SidebarLeftMenu';
import MainHeader from '../components/Elements/MainHeader';
import ContentHeader from '../components/Elements/ContentHeader';
import Footer from '../components/Elements/Footer';

const ReadMode = props => {

   const { subject_id, title } = props.location.state;

   return (
      <Page>
         <MainHeader />
         <ContentHeader title={title} />

         <Main>
            <Sidebar>
               <SidebarLeftMenu />
            </Sidebar>

            <Content>
               <ReadModeColumn subjectId={subject_id} title={title} />
            </Content>

            <Sidebar></Sidebar>
         </Main>

         <Footer />
      </Page>
   )
}

export default ReadMode;