import * as Auth from '../action_types/auth_types';

export function authReducer(state = {}, action) {
   switch (action.type) {
      case Auth.AUTHENTICATED:
         return { ...state, authenticated: true }
      case Auth.UNAUTHENTICATED:
         return { ...state, authenticated: false }
      case Auth.AUTHENTICATION_ERROR:
         return { ...state, error: action.payload }
      default: return state;
   }
}

export function userReducer(state = [], action) {
   switch (action.type) {
      case Auth.SET_CURRENT_USER:
         return {
            ...state,
            ...action.payload
         }
      case Auth.LOGIN_USER:
         return {
            ...state,
            ...action.payload
         }
      case Auth.SIGNUP_USER:
         return {
            ...state,
            ...action.payload
         }
      default: return state;
   }
}