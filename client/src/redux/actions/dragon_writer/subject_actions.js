import * as SubjectsAPI from '../../../api/Subjects';
import * as ProjectsAPI from '../../../api/Projects';

export function getAllSubjects() {
   return async dispatch => {
      try {
         const response = await SubjectsAPI.getAllSubjects();
         console.log('response:::', response);
         dispatch({ type: 'SET_ALL_SUBJECTS', payload: response.data });
      } catch (e) {

      }
   }
}

export function saveSubjectOrder(project_id, subject_order) {
   console.log('Here');
   return async dispatch => {
      console.log('subject_order:::', subject_order);
      dispatch({ type: 'SET_SUBJECT_ORDER', payload: { project_id, subject_order } });
      ProjectsAPI.updateProject(project_id, { subject_order });
   }
}