import * as SubjectsAPI from '../../../api/Subjects';
import * as ProjectsAPI from '../../../api/Projects';

export function getAllSubjects() {
   return async dispatch => {
      try {
         const response = await SubjectsAPI.getAllSubjects();
         dispatch({ type: 'SET_ALL_SUBJECTS', payload: response.data });
      } catch (e) {
         console.log('e:::', e);
      }
   }
}

export function saveSubjectOrder(project_id, subject_order) {
   try {
      return async dispatch => {
         dispatch({ type: 'SET_SUBJECT_ORDER', payload: { project_id, subject_order } });
         ProjectsAPI.updateProject(project_id, { subject_order });
      }
   } catch (e) {
      console.log('e:::', e);
   }
}