import * as User from '../action_types/user_types';

export function userReducer(state = [], action) {
   switch (action.type) {
      case User.SET_CURRENT_USER:
         return {
            ...state,
            ...action.payload
         }
      case User.LOGIN_USER:
         return {
            ...state,
            ...action.payload
         }
      case User.SIGNUP_USER:
         return {
            ...state,
            ...action.payload
         }
      default: return state;
   }
}