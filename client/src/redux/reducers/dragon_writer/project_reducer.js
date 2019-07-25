import * as Auth from '../../action_types/auth_types';

export function projectReducer(state = [], action) {
   console.log('action:::', action);
   switch (action.type) {
      case 'SET_ALL_PROJECTS':
         return { ...action.payload };
      case 'SET_PROJECT_ORDER':
         return { ...state, project_order: action.payload };
      case 'SET_SUBJECT_ORDER':
         console.log('project_reducer state:::', state);
         console.log('project_reducer action:::', action);
         return {
            ...state,
            [action.payload.project_id]: {
                ...state[action.payload.project_id],
                subject_order: action.payload.subject_order
             }
         };
         return state;
      default: return state;
   }
}