import * as SubjectsAPI from '../../../api/Subjects';
import * as TextsAPI from '../../../api/Texts';

export function getAllTexts(project_id) {
   return async dispatch => {
      try {
         const texts = await TextsAPI.getAllTexts();
         dispatch({ type: 'SET_ALL_TEXTS', payload: texts.data });
      } catch (e) {
         console.log('e in getAllTexts, text_actions:::', e);
      }
   }
}

export function saveNewText(text) {
   return dispatch => {
      return new Promise((deliver, renege) => {
         TextsAPI.saveNewText(text)
            .then(response => {
               dispatch({ type: 'SAVE_NEW_TEXT', payload: response.data.text });
               // dispatch({
               //    type: 'ADD_TEXT_TO_ORDER',
               //    payload: {
               //       text_id: response.data._id,
               //       subject_id: response.data.subjectId
               //    }
               // });
               // dispatch({ type: 'SET_ALL_SUBJECTS', payload: response.data.subjects });
               dispatch({
                  type: 'SET_ONE_TEXT_ORDER',
                  payload: {
                     subject_id: response.data.text.subjectId,
                     text_order: response.data.text_order
                  }
               })
               deliver(response.data.text);
            })
            .catch(err => {
               console.log('err in saveNewText, text_actions:::', err);
               renege(err);
            });
      })
   }
}

export function saveOneTextOrder(subject_id, text_order) {
   try {
      return dispatch => {
         dispatch({ type: 'SET_ONE_TEXT_ORDER', payload: { subject_id, text_order } });
         SubjectsAPI.updateSubject(subject_id, { text_order });
      }
   } catch (e) {
      console.log('e in saveOneTextOrder, text_actions:::', e);
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
      console.log('e in saveTwoTextOrders, text_actions:::', e);
   }
}

export const deleteText = text_id => dispatch => {
   return new Promise(async (deliver, reneg) => {
      try {

      } catch (e) {
         console.log('e:::', e);
         reneg(e);
      }
   })
}