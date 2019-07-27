import * as ProjectsAPI from '../../../api/Projects';
import UserAPI from '../../../api/Authentication';

export function getAllProjects() {
   return async dispatch => {
      try {
         const projects = await ProjectsAPI.getAllProjects();
         // console.log('projects:::', projects);
         dispatch({ type: 'SET_ALL_PROJECTS', payload: projects.data })
      } catch (e) {
         console.log('e:::', e);
      }
   }
}

export function getCurrentProject(project_id) {
   return async dispatch => {
      try {
         const project = await ProjectsAPI.getCurrentProject(project_id);
         console.log('project:::', project);
         dispatch({ type: 'SET_CURRENT_PROJECT', payload: project.data });
      } catch (e) {
         console.log('e:::', e);
      }
   }
}

export function saveProjectOrder(project_order) {
   console.log('Here');
   return async dispatch => {
      console.log('project_order:::', project_order);
      dispatch({ type: 'SET_PROJECT_ORDER', payload: project_order });
      UserAPI.updateCurrentUser({ project_order });
   }
}