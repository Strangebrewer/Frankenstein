import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import { Main, Sidebar, Content } from '../components/Layout';
import StoryboardContainer from '../components/Dragons/StoryboardContainer';
import SidebarLeftMenu from '../components/Elements/SidebarLeftMenu';
import MainHeader from '../components/Elements/MainHeader';
import ContentHeader from '../components/Elements/ContentHeader';
import Page from '../components/Elements/Page';
import Footer from '../components/Elements/Footer';
import ModalLogic from '../components/Elements/ModalLogic';

const Storyboard = props => {

   const [subject_id, setSubjectId] = useState(props.location.state.subject_id);
   const [title, setTitle] = useState(props.location.state.title);

   if (!props.location.state) return <Redirect to={`/dragon-writer/${props.link}`} />

   const { projects, project_id } = props;
   const project = projects[project_id];
   const subjects = project.subject_order.map(subject_id => props.subjects[subject_id]);

   const switchSubjects = id => {
      setSubjectId(id);
      setTitle(props.subjects[id].title);
   }

   return (
      <Page>
         <MainHeader />
         <ContentHeader link={props.link} subject_id={subject_id} title={title} />

         <ModalLogic>
            {modalProps => (
               <Main>
                  <Sidebar>
                     <SidebarLeftMenu
                        {...modalProps}
                        project_id={project_id}
                        subjects={subjects}
                        switchSubjects={switchSubjects}
                     />
                  </Sidebar>

                  <Content style={{ position: 'relative' }}>
                     <StoryboardContainer subject_id={subject_id} />
                  </Content>

                  <Sidebar></Sidebar>
               </Main>
            )}
         </ModalLogic>

         <Footer />
      </Page>
   )
}

function mapStateToProps(state) {
   return {
      projects: state.projects,
      subjects: state.subjects
   }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Storyboard);