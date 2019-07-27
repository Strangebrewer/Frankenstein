import * as Auth from '../../action_types/auth_types';

export function subjectReducer(state = '', action) {
   switch (action.type) {
      case 'SET_ALL_SUBJECTS':
         return { ...action.payload };
      default: return state;
   }
}