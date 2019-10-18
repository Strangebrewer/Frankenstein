import * as SubjectsAPI from '../../../api/Subjects';
import * as ProjectsAPI from '../../../api/Projects';
import * as Auth from '../../action_types/auth_types';
import AuthAPI from '../../../api/Authentication';

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

export const createNewSubject = subject => dispatch => {
   return new Promise(async (deliver, reneg) => {
      try {
         await SubjectsAPI.postNewSubject(subject);
         const subjects = await SubjectsAPI.getAllSubjects();
         const projects = await ProjectsAPI.getAllProjects();
         dispatch({ type: 'SET_ALL_SUBJECTS', payload: subjects.data });
         dispatch({ type: 'SET_ALL_PROJECTS', payload: projects.data });
         deliver('success!');
      } catch (e) {
         console.log('e:::', e);
         reneg(e)
      }
   })
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