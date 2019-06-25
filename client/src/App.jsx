import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';

import { login } from './redux/actions/auth_actions';

class App extends Component {

   componentDidMount() {
      this.props.login({ username: "Narf", password: '1234' });
   }

   render() {

      return (
         <div></div>
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