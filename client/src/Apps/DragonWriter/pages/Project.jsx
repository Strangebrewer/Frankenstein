import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Main, Sidebar, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import Column from '../components/Dragons/Column';
import SidebarLeftMenu from '../components/Elements/SidebarLeftMenu';
import MainHeader from '../components/Elements/MainHeader';
import ContentHeader from '../components/Elements/ContentHeader';
import Footer from '../components/Elements/Footer';
import MainDropzone from '../components/Dragons/MainDropzone';
import { getAllSubjects } from '../../../redux/actions/dragon_writer/subject_actions';
import { getAllTexts } from '../../../redux/actions/dragon_writer/text_actions';

class Project extends PureComponent {

   componentDidMount() {
      const { project_id } = this.props.location.state;
      this.props.getAllSubjects(project_id);
      this.props.getAllTexts(project_id);
   }


   render() {
      return (
         <Page>
            <MainHeader />
            <ContentHeader />

            <Main>
               <Sidebar>
                  <SidebarLeftMenu />
               </Sidebar>

               <Content>
                  <MainDropzone>
                     {this.props.subjects.map((subject, index) => {
                        return <Column key={index} id={index} index={index} subject={subject} />
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
      subjects: state.subjects
   }
}

function mapDispatchToProps(dispatch) {
   return {
      getAllSubjects: project_id => {
         dispatch(getAllSubjects(project_id));
      },
      getAllTexts: project_id => {
         dispatch(getAllTexts(project_id));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);