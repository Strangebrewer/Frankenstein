import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import DragEnd from './Apps/DragonWriter/components/DragEnd';
import NoMatch from './utils/NoMatch';
import Landing from './Apps/Portfolio/pages/Landing';
import DragonWriter from './Apps/DragonWriter/pages/Home';
import DragonProject from './Apps/DragonWriter/pages/Project';
import Editor from './Apps/DragonWriter/pages/Editor';
import ReadMode from './Apps/DragonWriter/pages/ReadMode';
import Storyboard from './Apps/DragonWriter/pages/Storyboard';
import Loader from './Apps/DragonWriter/components/Elements/Loader';

import Authentication from './utils/Authentication';

import { getCurrentUser, login } from './redux/actions/auth_actions';

class App extends Component {
   state = {
      loading: true
   }

   async componentDidMount() {
      try {
         if (localStorage.getItem('token'))
            await this.props.getCurrentUser();
      } catch (e) {
         localStorage.removeItem('token');
      } finally {
         this.setState({
            loading: false
         });
      }
   }

   render() {

      const { projects, user } = this.props;

      const userIs = Object.keys(user).length;
      const hasProjects = Object.keys(projects).length;

      return (
         <DragEnd>
            <Router>
               {this.state.loading
                  ? (
                     <div>
                        {/* <MainHeader /> */}
                        <Loader />
                     </div>
                  ) : (
                     <Switch>
                        <Route exact path="/">
                           {routeProps => <Landing {...routeProps} />}
                        </Route>

                        <Route exact path="/dragon-writer">
                           {routeProps => <DragonWriter {...routeProps} />}
                        </Route>

                        {userIs && hasProjects && projects.project_order.map((project_id, index) => {
                           const { link } = projects[project_id];
                           return (
                              <Route
                                 exact
                                 key={index}
                                 path={`/dragon-writer/${link}`}
                                 component={Authentication(DragonProject, { project_id, required: true })}
                              />
                           )
                        })}

                        {userIs && hasProjects && projects.project_order.map((project_id, index) => {
                           const project = projects[project_id];
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

                        {userIs && hasProjects && projects.project_order.map((project_id, index) => {
                           const { link } = projects[project_id];
                           return (
                              <Route
                                 exact
                                 key={index}
                                 path={`/dragon-writer/${link}/readmode`}
                                 component={Authentication(ReadMode, { project_id, link, required: true })}
                              />
                           )
                        })}

                        {userIs && hasProjects && projects.project_order.map((project_id, index) => {
                           const { link } = projects[project_id];
                           return (
                              <Route
                                 exact
                                 key={index}
                                 path={`/dragon-writer/${link}/storyboard`}
                                 component={Authentication(Storyboard, { project_id, link, required: true })}
                              />
                           )
                        })}

                        <Route path="*" component={NoMatch} />
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