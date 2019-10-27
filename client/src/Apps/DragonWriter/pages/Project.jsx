import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Main, Sidebar, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import Column from '../components/Dragons/Column';
import ReadModeColumn from '../components/Dragons/ReadModeColumn';
import StoryboardContainer from '../components/Dragons/StoryboardContainer';
import SidebarLeftMenu from '../components/Elements/SidebarLeftMenu';
import MainHeader from '../components/Elements/MainHeader';
import ContentHeader from '../components/Elements/ContentHeader';
import Footer from '../components/Elements/Footer';
import MainDropzone from '../components/Dragons/MainDropzone';
import ModalLogic from '../components/Elements/ModalLogic';

class Project extends Component {
   state = {
      overview: true,
      read_mode: false,
      storyboard_mode: false,
      subject_id: '',
      column_title: ''
   }

   toggleSubjectVisible = id => {
      let visbility = 'hide';
      if (this.state[id] === 'hide') visbility = 'show';
      this.setState({ [id]: visbility });
   }

   toggleStoryboardMode = id => {
      this.setState({
         overview: false,
         read_mode: false,
         storyboard_mode: true,
         subject_id: id
      })
   }

   toggleReadMode = id => {
      this.setState({
         overview: false,
         read_mode: true,
         storyboard_mode: false,
         subject_id: id
      })
   }

   toggleOverview = () => {
      this.setState({
         overview: true,
         read_mode: false,
         storyboard_mode: false,
         subject_id: ''
      })
   }

   switchSubjects = id => {
      this.setState({ subject_id: id });
   }

   render() {

      const { projects, project_id } = this.props;
      const project = projects[project_id];
      const subjects = project.subject_order.map(subject_id => this.props.subjects[subject_id]);

      console.log('project in Project component:::', project);
      console.log('subjects in Project component:::', subjects);

      return (
         <Page>
            <MainHeader />
            <ContentHeader
               link={project.link}
               overview={this.state.overview}
               title={project.title}
               column_title={this.state.column_title}
               subject_id={this.state.subject_id}
               toggleOverview={this.toggleOverview}
               toggleStoryboardMode={this.toggleStoryboardMode}
               toggleReadMode={this.toggleReadMode}
            />

            <ModalLogic>
               {modalProps => (
                  <Main>
                     <Sidebar>
                        <SidebarLeftMenu
                           {...modalProps}
                           overview={this.state.overview}
                           project_id={project_id}
                           subjects={subjects}
                           toggleSubjectVisible={this.toggleSubjectVisible}
                           switchSubjects={this.switchSubjects}
                        />
                     </Sidebar>

                     <Content style={{ position: 'relative' }}>
                        {
                           this.state.overview &&
                           <MainDropzone id={project._id}>
                              {project.subject_order.map((subject_id, index) => {
                                 if (this.state[subject_id] !== 'hide')
                                    return (
                                       <Column
                                          {...modalProps}
                                          key={index}
                                          index={index}
                                          subject_id={subject_id}
                                          project_link={project.link}
                                          toggleSubjectVisible={this.toggleSubjectVisible}
                                          toggleStoryboardMode={this.toggleStoryboardMode}
                                          toggleReadMode={this.toggleReadMode}
                                       />
                                    )
                              })}
                           </MainDropzone>
                        }

                        {
                           this.state.read_mode &&
                           <ReadModeColumn subject_id={this.state.subject_id} />
                        }

                        {
                           this.state.storyboard_mode &&
                           <StoryboardContainer subject_id={this.state.subject_id} />
                        }
                     </Content>

                     <Sidebar></Sidebar>
                  </Main>
               )}
            </ModalLogic>

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