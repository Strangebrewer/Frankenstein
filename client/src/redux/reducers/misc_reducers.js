import * as Misc from '../action_types/misc_types';

export function loadingReducer(state = [], action) {
   switch (action.type) {
      case Misc.TOGGLE_LOADING:
         return !state;
      default: return state;
   }
}

export function calcDisplayReducer(state = [], action) {
   switch (action.type) {
      case 'ADD_TO_CALC_DISPLAY':
         return [...state, action.payload];
      default: return state;
   }
}