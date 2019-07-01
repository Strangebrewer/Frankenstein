import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import DragEnd from './Apps/DragonWriter/components/DragEnd';
import Landing from './Apps/Portfolio/pages/Landing';
import DragonWriter from './Apps/DragonWriter/pages/DragonWriter';
import DragonProject from './Apps/DragonWriter/pages/DragonProject';

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