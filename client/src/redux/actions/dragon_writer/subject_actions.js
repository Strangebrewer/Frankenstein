import * as SubjectsAPI from '../../../api/Subjects';

export function getAllSubjects(project_id) {
   return async dispatch => {
      try {
         const subjects = await SubjectsAPI.getAllSubjects(project_id);
         console.log('subjects:::', subjects);
         dispatch({ type: 'SET_ALL_SUBJECTS', payload: subjects.data })
      } catch (e) {

      }
   }
}