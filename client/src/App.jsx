import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import { login } from './redux/actions/auth_actions';

class App extends Component {

   componentDidMount() {
      login({ username: "Ned", password: '1234' });
   }

   render() {
      return (
         <div></div>
      )
   }
}

export default App;