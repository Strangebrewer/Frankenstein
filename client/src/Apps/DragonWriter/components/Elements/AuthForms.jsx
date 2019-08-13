import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getCurrentUser, login } from '../../../../redux/actions/auth_actions';

const LoginForm = props => {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const handleInputChange = event => {
      const { name, value } = event.target;
      switch (name) {
         case 'username':
            setUsername(value); break;
         default:
            setPassword(value); break;
      }
   }

   const youShouldLogin = (e) => {
      e.preventDefault();
      props.login({ username, password });
   }

   return (
      <form onSubmit={(e) => youShouldLogin(e)}>
         <label>Username</label>
         <input
            name="username"
            type="text"
            value={username}
            onChange={handleInputChange}
         />
         <label>Password</label>
         <input
            name="password"
            type="password"
            value={password}
            onChange={handleInputChange}
         />
         <button onClick={youShouldLogin}>Submit</button>
      </form>
   )
}

function mapStateToProps(state) {
   return {
      user: state.user   }
}

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);