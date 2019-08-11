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

import { login } from './redux/actions/auth_actions';

class App extends Component {
   state = {
      ready_check: 0
   }

   async componentDidMount() {
      await this.props.login({ username: "Narf", password: '1234' });
      setTimeout(() => {
         this.setState({
            // a new user with no projects will never trigger this to be truthy
            // so, when ready, replace it with something that will allow for new users
            ready_check: Object.keys(this.props.projects).length
         })
      }, 1500)
   }

   render() {

      // let ready_check = Object.keys(this.props.projects).length;

      return (
         <DragEnd>
            <Router>
               {!this.state.ready_check
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
                           const link = this.props.projects[project_id].link;
                           return (
                              <Route exact path={`/dragon-writer/${link}`} key={index}>
                                 {routeProps => (
                                    <DragonProject
                                       {...routeProps}
                                       project_id={project_id}
                                    />
                                 )}
                              </Route>
                           )
                        })}

                        {this.props.projects.project_order.map((project_id, index) => {
                           const project = this.props.projects[project_id];
                           const { link } = project;
                           return (
                              <Route exact path={`/dragon-writer/${link}/editor`} key={index}>
                                 {routeProps => (
                                    <Editor
                                       {...routeProps}
                                       project={project}
                                       project_link={link}
                                    />
                                 )}
                              </Route>
                           )
                        })}

                        {this.props.projects.project_order.map((project_id, index) => {
                           const link = this.props.projects[project_id].link;
                           return (
                              <Route exact path={`/dragon-writer/${link}/readmode`} key={index}>
                                 {routeProps => (
                                    <ReadMode
                                       {...routeProps}
                                       project_id={project_id}
                                       project_link={link}
                                    />
                                 )}
                              </Route>
                           )
                        })}

                        {this.props.projects.project_order.map((project_id, index) => {
                           const link = this.props.projects[project_id].link;
                           return (
                              <Route exact path={`/dragon-writer/${link}/storyboard`} key={index}>
                                 {routeProps => (
                                    <Storyboard
                                       {...routeProps}
                                       project_id={project_id}
                                       project_link={link}
                                    />
                                 )}
                              </Route>
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

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(App);