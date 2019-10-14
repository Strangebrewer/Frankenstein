import React from 'react';
import { connect } from 'react-redux';

import { Main, Content } from '../components/Layout';
import Page from '../components/Elements/Page';
import Footer from '../components/Elements/Footer';
import AuthForms from '../components/Elements/AuthForms';
import MainHeader from '../components/Elements/MainHeader';
import ProjectList from '../components/Dragons/ProjectList';

class DragonWriter extends React.PureComponent {

   render() {

      console.log('this.props.user:::', this.props.user);
      return (
         <Page>
            <MainHeader />

            <Main>
               <Content>
                  {!!this.props.user._id ? <ProjectList /> : <AuthForms />}
               </Content>
            </Main>

            <Footer />
         </Page>
      );
   }
   
}

function mapStateToProps(state) {
   return {
      user: state.user
   }
}

const mapDispatchToProps = {};

// Doesn't currently need access to the store, but may as things move along. Leave for now.
export default connect(mapStateToProps, mapDispatchToProps)(DragonWriter);