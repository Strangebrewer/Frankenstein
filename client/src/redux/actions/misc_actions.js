export function toggleLoading() {
   return {
      type: 'TOGGLE_LOADING'
   }
}

export const addToCalcDisplay = (button_id) => dispatch => {
   return dispatch({ type: 'ADD_TO_CALC_DISPLAY', payload: button_id });
}