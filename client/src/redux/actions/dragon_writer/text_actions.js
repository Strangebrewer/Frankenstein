import * as SubjectsAPI from '../../../api/Subjects';
import * as TextsAPI from '../../../api/Texts';

export function getAllTexts(project_id) {
   return async dispatch => {
      try {
         const texts = await TextsAPI.getAllTexts();
         dispatch({ type: 'SET_ALL_TEXTS', payload: texts.data });
      } catch (e) {
         console.log('e:::', e);
      }
   }
}

export function saveOneTextOrder(subject_id, text_order) {
   try {
      return dispatch => {
         dispatch({ type: 'SET_ONE_TEXT_ORDER', payload: { subject_id, text_order } });
         SubjectsAPI.updateSubject(subject_id, { text_order });
      }
   } catch (e) {
      console.log('e:::', e);
   }
}

export function saveTwoTextOrders(update_object) {
   try {
      const { text_id, start_id, start_text_order, finish_text_order, finish_id } = update_object;
      return dispatch => {
         dispatch({ type: 'SET_TWO_TEXT_ORDERS', payload: update_object });
         SubjectsAPI.updateSubject(start_id, { text_order: start_text_order });
         SubjectsAPI.updateSubject(finish_id, { text_order: finish_text_order });
         TextsAPI.updateText(text_id, { subjectId: finish_id });
      }
   } catch (e) {
      console.log('e:::', e);
   }
}