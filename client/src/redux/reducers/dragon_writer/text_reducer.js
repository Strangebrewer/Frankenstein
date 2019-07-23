import * as Auth from '../../action_types/auth_types';

export function textReducer(state = [], action) {
   switch (action.type) {
      case 'SET_ALL_TEXTS':
         return [...action.payload];;
      default: return state;
   }
}