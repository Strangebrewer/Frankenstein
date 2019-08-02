import * as Auth from '../../action_types/auth_types';

export function textReducer(state = [], action) {
   switch (action.type) {
      case 'SET_ALL_TEXTS':
         return { ...action.payload };
      case 'SET_TWO_TEXT_ORDERS':
         return {
            ...state,
            [action.payload.text_id]: {
               ...state[action.payload.text_id],
               subjectId: action.payload.finish_id
            }
         };
      case 'SAVE_NEW_TEXT':
         return {
            ...state,
            [action.payload._id]: action.payload
         }
      default: return state;
   }
}