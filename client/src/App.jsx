import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import DragEnd from './Apps/DragonWriter/components/DragEnd';
import Landing from './Apps/Portfolio/pages/Landing';
import DragonWriter from './Apps/DragonWriter/pages/Home';
import DragonProject from './Apps/DragonWriter/pages/Project';
import Editor from './Apps/DragonWriter/pages/Editor';
import ReadMode from './Apps/DragonWriter/pages/ReadMode';
import Storyboard from './Apps/DragonWriter/pages/Storyboard';
import Page from './Apps/DragonWriter/components/Elements/Page';
import MainHeader from './Apps/DragonWriter/components/Elements/MainHeader';
import Spinner from './Apps/DragonWriter/components/Elements/Spinner';

import Authentication from './utils/Authentication';

import { getCurrentUser, login } from './redux/actions/auth_actions';

class App extends Component {
   state = {
      ready_check: 0
   }

   async componentDidMount() {
      if (localStorage.getItem('token'))
         await this.props.getCurrentUser();
      else
         await this.props.login({ username: "Narf", password: '1234' });

      this.setState({
         // a new user with no projects will never trigger this to be truthy
         // so, when ready, replace it with something that will allow for new users
         ready_check: Object.keys(this.props.projects).length
      });
   }

   render() {

      const { ready_check } = this.state;

      return (
         <DragEnd>
            <Router>
               {!ready_check
                  ? (
                     <Page>
                        <MainHeader />
                        <Spinner />
                     </Page>
                  ) : (
                     <Switch>
                        <Route exact path="/">
                           {routeProps => <Landing {...routeProps} />}
                        </Route>

                        <Route exact path="/dragon-writer">
                           {routeProps => <DragonWriter {...routeProps} />}
                        </Route>

                        {this.props.projects.project_order.map((project_id, index) => {
                           const { link } = this.props.projects[project_id];
                           return (
                              <Route
                                 exact
                                 key={index}
                                 path={`/dragon-writer/${link}`}
                                 component={Authentication(DragonProject, { project_id, required: true })}
                              />
                           )
                        })}

                        {this.props.projects.project_order.map((project_id, index) => {
                           const project = this.props.projects[project_id];
                           const { link } = project
                           return (
                              <Route
                                 exact
                                 key={index}
                                 path={`/dragon-writer/${link}/editor`}
                                 component={Authentication(Editor, { project, link, required: true })}
                              />
                           )
                        })}

                        {this.props.projects.project_order.map((project_id, index) => {
                           const { link } = this.props.projects[project_id];
                           return (
                              <Route
                                 exact
                                 key={index}
                                 path={`/dragon-writer/${link}/readmode`}
                                 component={Authentication(ReadMode, { project_id, link })}
                              />
                           )
                        })}

                        {this.props.projects.project_order.map((project_id, index) => {
                           const { link } = this.props.projects[project_id];
                           return (
                              <Route
                                 exact
                                 key={index}
                                 path={`/dragon-writer/${link}/storyboard`}
                                 component={Authentication(Storyboard, { project_id, link, required: true })}
                              />
                           )
                        })}
                     </Switch>
                  )
               }
            </Router>
         </DragEnd>
      )
   }
}

function mapStateToProps(state) {
   return {
      user: state.user,
      projects: state.projects,
      subjects: state.subjects,
      texts: state.texts
   }
}

const mapDispatchToProps = { getCurrentUser, login };

export default connect(mapStateToProps, mapDispatchToProps)(App);