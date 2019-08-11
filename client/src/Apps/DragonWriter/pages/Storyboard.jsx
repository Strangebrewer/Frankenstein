import React from 'react';
import { Redirect } from "react-router-dom";
import { Main, Sidebar, Content } from '../components/Layout';
import StoryboardContainer from '../components/Dragons/StoryboardContainer';
import SidebarLeftMenu from '../components/Elements/SidebarLeftMenu';
import MainHeader from '../components/Elements/MainHeader';
import ContentHeader from '../components/Elements/ContentHeader';
import Page from '../components/Elements/Page';
import Footer from '../components/Elements/Footer';

const Storyboard = props => {
   console.log('Storyboard props:::', props);

   if (!props.location.state) return <Redirect to={`/dragon-writer/${props.link}`} />

   const { subject_id, title } = props.location.state;

   console.log('props:::', props);

   return (
      <Page>
         <MainHeader />
         <ContentHeader link={props.link} subject_id={subject_id} title={title} />

         <Main>
            <Sidebar>
               <SidebarLeftMenu />
            </Sidebar>

            <Content>
               <StoryboardContainer subject_id={subject_id} />
            </Content>

            <Sidebar></Sidebar>
         </Main>
         <Footer />
      </Page>
   )
}

export default Storyboard;