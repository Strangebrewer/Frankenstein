import React, { PureComponent } from 'react';
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
import { getAllSubjects } from '../../../redux/actions/dragon_writer/subject_actions';
import { getAllTexts } from '../../../redux/actions/dragon_writer/text_actions';
import { ScaleLoader } from 'react-spinners';

class Project extends PureComponent {

   shouldComponentUpdate(nextProps) {
      console.log('nextProps:::', nextProps);
      return true;
   }

   render() {
      const { _id, title, summary, subject_order } = this.props.location.state.project;
      const { subjects } = this.props;
      const ready_check = !!Object.keys(subjects).length && subject_order;
      
      
      return (
         <Page>
            <MainHeader />
            <ContentHeader title={title} summary={summary} />

            <Main>
               <Sidebar>
                  <SidebarLeftMenu />
               </Sidebar>

               <Content>
                  {ready_check
                     ? (
                        <MainDropzone id={_id}>
                           {subject_order.map((subject_id, index) => {
                              const subject = subjects[subject_id];
                              return <Column key={index} id={index} index={index} subject={subject} />
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
      subjects: state.subjects
   }
}

function mapDispatchToProps(dispatch) {
   return {
      
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);

const LoadingContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: top;
   min-height: 50vh;
   width: 100%;
`;