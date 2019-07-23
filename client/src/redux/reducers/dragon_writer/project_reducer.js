import * as Auth from '../../action_types/auth_types';

export function projectReducer(state = [], action) {
   console.log('action:::', action);
   switch (action.type) {
      case 'SET_ALL_PROJECTS':
         return [...action.payload];
      default: return state;
   }
}