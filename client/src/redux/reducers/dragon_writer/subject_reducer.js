import * as Auth from '../../action_types/auth_types';

export function subjectReducer(state = [], action) {
   switch (action.type) {
      case Auth.AUTHENTICATED:
         return 'authenticated';
      case Auth.AUTHENTICATION_ERROR:
         return action.payload;
      default: return state;
   }
}