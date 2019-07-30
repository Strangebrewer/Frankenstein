import * as Auth from '../action_types/auth_types';
import * as User from '../action_types/user_types';
import AuthAPI from '../../api/Authentication';

export function signup(signup_data, history) {
   return async dispatch => {
      try {
         const response = await AuthAPI.signup(signup_data);
         localStorage.setItem('token', response.data.token);
         dispatch({ type: Auth.AUTHENTICATED });
         dispatch({
            type: User.SET_CURRENT_USER,
            payload: response.data.user
         });
         // history.push('/home');
      } catch (e) {

      }
   }
}

export const login = (credentials) => dispatch => {
   return new Promise(async (resolve, reject) => {
      try {
         const response = await AuthAPI.login(credentials);
         localStorage.setItem('token', response.data.token);
         dispatch({ type: Auth.AUTHENTICATED });
         dispatch({ type: User.SET_CURRENT_USER, payload: response.data.user });
         dispatch({ type: 'SET_ALL_TEXTS', payload: response.data.texts });
         dispatch({ type: 'SET_ALL_SUBJECTS', payload: response.data.subjects });
         dispatch({ type: 'SET_ALL_PROJECTS', payload: response.data.projects });
         resolve(response);
      } catch (e) {
         console.log('error:::', e);
         // adapt the payload to use the message passed from the backend.
         dispatch({
            type: Auth.AUTHENTICATION_ERROR,
            payload: 'invalid username or password'
         });
         reject(e);
      }
   });
}

export function logout() {
   return dispatch => {
      localStorage.removeItem('token');
      dispatch({ type: Auth.UNAUTHENTICATED });
   }
}