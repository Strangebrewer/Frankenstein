import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Main, Sidebar, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import Column from '../components/Dragons/Column';
import SidebarLeftMenu from '../components/Elements/SidebarLeftMenu';
import MainHeader from '../components/Elements/MainHeader';
import ContentHeader from '../components/Elements/ContentHeader';
import Footer from '../components/Elements/Footer';
import MainDropzone from '../components/Dragons/MainDropzone';

class Project extends Component {

   render() {

      const { projects, project_id } = this.props;
      const project = projects[project_id];
      const subjects = project.subject_order.map(subject_id =>  this.props.subjects[subject_id]);

      console.log('project in Project component:::', project);
      console.log('subjects in Project component:::', subjects);

      return (
         <Page>
            <MainHeader />
            <ContentHeader overview title={project.title} summary={project.summary} />

            <Main>
               <Sidebar>
                  <SidebarLeftMenu project_link={project.link} subjects={subjects} />
               </Sidebar>

               <Content style={{ position: 'relative' }}>
                  <MainDropzone id={project._id}>
                     {project.subject_order.map((subject_id, index) => {
                        return <Column key={index} index={index} subject_id={subject_id} project_link={project.link} />
                     })}
                  </MainDropzone>
               </Content>

               <Sidebar></Sidebar>
            </Main>

            <Footer />
         </Page>
      );
   }
}

function mapStateToProps(state) {
   return {
      projects: state.projects,
      subjects: state.subjects
   }
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Project);