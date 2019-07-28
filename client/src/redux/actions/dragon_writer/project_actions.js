import * as ProjectsAPI from '../../../api/Projects';
import UserAPI from '../../../api/Authentication';

export function getAllProjects() {
   return async dispatch => {
      try {
         const projects = await ProjectsAPI.getAllProjects();
         dispatch({ type: 'SET_ALL_PROJECTS', payload: projects.data })
      } catch (e) {
         console.log('e:::', e);
      }
   }
}

export function saveProjectOrder(project_order) {
   try {
      return async dispatch => {
         console.log('project_order:::', project_order);
         dispatch({ type: 'SET_PROJECT_ORDER', payload: project_order });
         UserAPI.updateCurrentUser({ project_order });
      }
   } catch (e) {
      console.log('e:::', e);
   }
}