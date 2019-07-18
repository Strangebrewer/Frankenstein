import React from 'react';
import { Main, Sidebar, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import Column from '../components/Dragons/Column';
import SidebarLeftMenu from '../components/Elements/SidebarLeftMenu';
import MainHeader from '../components/Elements/MainHeader';
import ContentHeader from '../components/Elements/ContentHeader';
import Footer from '../components/Elements/Footer';

import subjects from '../utils/subjects.json';

const Project = props => {
   return (
      <Page>
         <MainHeader />
         <ContentHeader />

         <Main>
            <Sidebar>
               <SidebarLeftMenu />
            </Sidebar>

            <Content>
               {subjects.map((subject, index) => (
                  <Column key={index} subject={subject} />
               ))}
            </Content>

            <Sidebar></Sidebar>
         </Main>

         <Footer />
      </Page>
   );
}

export default Project;