import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Main, Sidebar, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import Column from '../components/Dragons/Column';
import SidebarLeftMenu from '../components/Elements/SidebarLeftMenu';
import MainHeader from '../components/Elements/MainHeader';
import ContentHeader from '../components/Elements/ContentHeader';
import Footer from '../components/Elements/Footer';
import MainDropzone from '../components/Dragons/MainDropzone';
import { ScaleLoader } from 'react-spinners';

class Project extends Component {

   render() {
      const { state } = this.props.location;
      if (!state) {
         return <Redirect to="/dragon-writer" />
      }

      const { projects } = this.props;
      const base_project = state.project;
      const project = projects[base_project._id];

      return (
         <Page>
            <MainHeader />
            <ContentHeader title={base_project.title} summary={base_project.summary} />

            <Main>
               <Sidebar>
                  <SidebarLeftMenu />
               </Sidebar>

               <Content style={{ position: 'relative' }}>
                  {project
                     ? (
                        <MainDropzone id={project._id}>
                           {project.subject_order.map((subject_id, index) => {
                              return <Column key={index} index={index} subject_id={subject_id} />
                           })}
                        </MainDropzone>
                     ) : (
                        <LoadingContainer>
                           <ScaleLoader
                              color={'rgb(22, 136, 130)'}
                              height={70}
                              width={8}
                              margin="5px"
                              radius={4}
                           />
                        </LoadingContainer>
                     )
                  }
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
      projects: state.projects
   }
}

function mapDispatchToProps(dispatch) {
   return {

   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);

const LoadingContainer = styled.div`
   background: #00000095;
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 100vh;
   width: 100vw;
   position: fixed;
   top: 0;
   left: 0;
`;