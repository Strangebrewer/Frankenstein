import * as Auth from '../../action_types/auth_types';

export function subjectReducer(state = '', action) {
   switch (action.type) {
      case 'SET_ALL_SUBJECTS':
         return { ...action.payload };
      case 'SET_ONE_TEXT_ORDER':
         return {
            ...state,
            [action.payload.subject_id]: {
               ...state[action.payload.subject_id],
               text_order: action.payload.text_order
            }
         }
      case 'SET_TWO_TEXT_ORDERS':
         return {
            ...state,
            [action.payload.start_id]: {
               ...state[action.payload.start_id],
               text_order: action.payload.start_text_order
            },
            [action.payload.finish_id]: {
               ...state[action.payload.finish_id],
               text_order: action.payload.finish_text_order
            }
         }
      default: return state;
   }
}