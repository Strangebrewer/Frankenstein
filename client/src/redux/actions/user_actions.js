import * as Auth from '../action_types/auth_types';
import * as User from '../action_types/user_types';
import * as Misc from '../action_types/misc_types';
import * as AuthAPI from '../../api/Authentication';

export function getCurrentUser(headers) {
   return async dispatch => {
      try {
         const user = await AuthAPI.getCurrentUser(headers);
         // dispatch({ type: Auth.TOGGLE_LOGGED_IN });
         dispatch({ type: Auth.AUTHENTICATED });
         dispatch({ type: User.SET_CURRENT_USER, payload: user.data });
         dispatch({ type: Misc.TOGGLE_LOADING });
      } catch (e) {
         dispatch({ type: Auth.UNAUTHENTICATED });
      }
   }
}