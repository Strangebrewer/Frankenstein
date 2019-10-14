import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Login, Signup } from "./Forms";
import styled from 'styled-components';

import { login, signup } from '../../../../redux/actions/auth_actions';

const AuthForms = props => {

   const [email, setEmail] = useState('');
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPw, setConfirmPw] = useState('');
   const [flag, setFlag] = useState(false);

   const handleInputChange = event => {
      const { name, value } = event.target;
      switch (name) {
         case 'email': setEmail(value); break;
         case 'username': setUsername(value); break;
         case 'password': setPassword(value); break;
         case 'confirmPw': setConfirmPw(value); break;
      }
   };

   const toggleSignupForm = () => setFlag(!flag);

   const youShouldLogin = (e) => {
      e.preventDefault();
      props.login({ username, password });
   }

   const youShouldSignup = (e) => {
      e.preventDefault();
      props.signup({ email, username, password });
   }

   return (
      <FormWrapper>
         {flag
            ? (
               <Signup
                  confirmPw={confirmPw}
                  email={email}
                  handleInputChange={handleInputChange}
                  password={password}
                  signup={youShouldSignup}
                  toggleSignupForm={toggleSignupForm}
                  username={username}
               />
            ) : (
               <Login
                  handleInputChange={handleInputChange}
                  login={youShouldLogin}
                  password={password}
                  toggleSignupForm={toggleSignupForm}
                  username={username}
               />
            )
         }
      </FormWrapper>
   )
}

function mapStateToProps(state) {
   return {
      user: state.user
   }
}

const mapDispatchToProps = { login, signup };

export default connect(mapStateToProps, mapDispatchToProps)(AuthForms);

const FormWrapper = styled.div`
   width: 100%;
   height: 100%;
`;