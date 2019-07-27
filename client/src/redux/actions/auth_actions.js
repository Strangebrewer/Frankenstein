import * as Auth from '../action_types/auth_types';
import * as User from '../action_types/user_types';
import AuthAPI from '../../api/Authentication';

export function signup(signup_data, history) {
   return async dispatch => {
      try {
         const user = await AuthAPI.signup(signup_data);
         localStorage.setItem('token', user.data.token);
         dispatch({ type: Auth.AUTHENTICATED });
         dispatch({
            type: User.SET_CURRENT_USER,
            payload: user.data.user
         });
         // history.push('/home');
      } catch (e) {

      }
   }
}

export function login(credentials, history) {
   return function (dispatch) {
      AuthAPI.login(credentials)
         .then(user => {
            dispatch({ type: Auth.AUTHENTICATED });
            localStorage.setItem('token', user.data.token);
            dispatch({
               type: User.SET_CURRENT_USER,
               payload: user.data.user
            });
            // history.push('/home');
         })
         .catch(err => {
            console.log('error:::', err);
            // adapt the payload to use the message passed from the backend.
            dispatch({
               type: Auth.AUTHENTICATION_ERROR,
               payload: 'invalid username or password'
            });
         });
   }
}

export function logout() {
   return dispatch => {
      localStorage.removeItem('token');
      dispatch({ type: Auth.UNAUTHENTICATED });
   }
}