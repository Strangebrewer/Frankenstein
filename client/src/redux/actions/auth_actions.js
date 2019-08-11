import * as Auth from '../action_types/auth_types';
import * as Misc from '../action_types/misc_types';
import AuthAPI from '../../api/Authentication';

export const getCurrentUser = () => dispatch => {
   return new Promise(async (deliver, reneg) => {
      try {
         const response = await AuthAPI.getCurrentUser();
         // dispatch({ type: Auth.TOGGLE_LOGGED_IN });
         dispatch({ type: Auth.AUTHENTICATED });
         dispatch({ type: Auth.SET_CURRENT_USER, payload: response.data.user });
         dispatch({ type: 'SET_ALL_TEXTS', payload: response.data.texts });
         dispatch({ type: 'SET_ALL_SUBJECTS', payload: response.data.subjects });
         dispatch({ type: 'SET_ALL_PROJECTS', payload: response.data.projects });
         // dispatch({ type: Misc.TOGGLE_LOADING });
         deliver(response)
      } catch (e) {
         dispatch({ type: Auth.UNAUTHENTICATED });
         reneg(e);
      }
   })
}

// export function getCurrentUser() {
//    return async dispatch => {
//       try {
//          const response = await AuthAPI.getCurrentUser();
//          // dispatch({ type: Auth.TOGGLE_LOGGED_IN });
//          dispatch({ type: Auth.AUTHENTICATED });
//          dispatch({ type: Auth.SET_CURRENT_USER, payload: response.data.user });
//          dispatch({ type: 'SET_ALL_TEXTS', payload: response.data.texts });
//          dispatch({ type: 'SET_ALL_SUBJECTS', payload: response.data.subjects });
//          dispatch({ type: 'SET_ALL_PROJECTS', payload: response.data.projects });
//          // dispatch({ type: Misc.TOGGLE_LOADING });
//       } catch (e) {
//          dispatch({ type: Auth.UNAUTHENTICATED });
//       }
//    }
// }

export function signup(signup_data, history) {
   return async dispatch => {
      try {
         const response = await AuthAPI.signup(signup_data);
         localStorage.setItem('token', response.data.token);
         dispatch({ type: Auth.AUTHENTICATED });
         dispatch({
            type: Auth.SET_CURRENT_USER,
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
         dispatch({ type: Auth.SET_CURRENT_USER, payload: response.data.user });
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