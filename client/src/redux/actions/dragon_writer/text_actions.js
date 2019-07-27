import * as TextsAPI from '../../../api/Texts';

export function getAllTexts(project_id) {
   return async dispatch => {
      try {
         const texts = await TextsAPI.getAllTexts();
         dispatch({ type: 'SET_ALL_TEXTS', payload: texts.data })
      } catch (e) {

      }
   }
}