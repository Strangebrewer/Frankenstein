import React from 'react';
import { Redirect } from "react-router-dom";
import { Main, Sidebar, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import ReadModeColumn from '../components/Dragons/ReadModeColumn';
import SidebarLeftMenu from '../components/Elements/SidebarLeftMenu';
import MainHeader from '../components/Elements/MainHeader';
import ContentHeader from '../components/Elements/ContentHeader';
import Footer from '../components/Elements/Footer';

const ReadMode = props => {

   if (!props.location.state) return <Redirect to={`/dragon-writer/${props.project_link}`} />

   const { subject_id, title } = props.location.state;

   return (
      <Page>
         <MainHeader />
         <ContentHeader project_link={props.project_link} subject_id={subject_id} title={title} />

         <Main>
            <Sidebar>
               <SidebarLeftMenu />
            </Sidebar>

            <Content>
               <ReadModeColumn subject_id={subject_id} title={title} />
            </Content>

            <Sidebar></Sidebar>
         </Main>

         <Footer />
      </Page>
   )
}

export default ReadMode;