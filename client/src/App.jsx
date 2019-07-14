import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import DragEnd from './Apps/DragonWriter/components/DragEnd';
import Landing from './Apps/Portfolio/pages/Landing';
import DragonWriter from './Apps/DragonWriter/pages/Home';
import DragonProject from './Apps/DragonWriter/pages/Project';
import Editor from './Apps/DragonWriter/pages/Editor';
import ReadMode from './Apps/DragonWriter/pages/ReadMode';
import Storyboard from './Apps/DragonWriter/pages/Storyboard';

import { login } from './redux/actions/auth_actions';

class App extends Component {

   componentDidMount() {
      this.props.login({ username: "Narf", password: '1234' });
   }

   render() {

      return (
         <DragEnd>
            {dragProps => (
               <Router>
                  <Switch>
                     <Route exact path="/">
                        {routeProps => (
                           <Landing {...routeProps} {...dragProps} />
                        )}
                     </Route>

                     <Route exact path="/dragon-writer">
                        {routeProps => (
                           <DragonWriter {...routeProps} {...dragProps} />
                        )}
                     </Route>

                     <Route exact path="/dragon-writer/:project">
                        {routeProps => (
                           <DragonProject {...routeProps} {...dragProps} />
                        )}
                     </Route>

                     <Route exact path="/dragon-writer/:project/editor">
                        {routeProps => (
                           <Editor {...routeProps} {...dragProps} />
                        )}
                     </Route>

                     <Route exact path="/dragon-writer/:project/readmode">
                        {routeProps => (
                           <ReadMode {...routeProps} {...dragProps} />
                        )}
                     </Route>

                     <Route exact path="/dragon-writer/:project/storyboard">
                        {routeProps => (
                           <Storyboard {...routeProps} {...dragProps} />
                        )}
                     </Route>
                  </Switch>
               </Router>
            )}
         </DragEnd>
      )
   }
}

function mapStateToProps(state) {
   return {
      user: state.user
   }
}

function mapDispatchToProps(dispatch) {
   return {
      login: ccredentials => {
         dispatch(login(ccredentials));
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);