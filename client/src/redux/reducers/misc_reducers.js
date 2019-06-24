import * as Misc from '../action_types/misc_types';

export function loadingReducer(state = [], action) {
   switch (action.type) {
     case Misc.TOGGLE_LOADING:
       return !state;
     default: return state;
   }
 }