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
   return async dispatch => {
      try {
         console.log('project_order:::', project_order);
         dispatch({ type: 'SET_PROJECT_ORDER', payload: project_order });
         UserAPI.updateCurrentUser({ project_order });
      } catch (e) {
         console.log('e:::', e);
      }
   }
}

// export function createNewProject(project) {
//    return async dispatch => {
//       try {
//          await ProjectsAPI.postNewProject(project);
//          const projects = await ProjectsAPI.getAllProjects();
//          dispatch({ type: 'SET_ALL_PROJECTS', payload: projects.data })
//       } catch (e) {
//          console.log('e:::', e);
//       }
//    }
// }

export const createNewProject = project => dispatch => {
   return new Promise(async (deliver, reneg) => {
      try {
         await ProjectsAPI.postNewProject(project);
         const projects = await ProjectsAPI.getAllProjects();
         dispatch({ type: 'SET_ALL_PROJECTS', payload: projects.data });
         deliver('success!');
      } catch (e) {
         console.log('e:::', e);
         reneg(e)
      }
   })
}

export const deleteProject = project_id => dispatch => {
   return new Promise(async (deliver, reneg) => {
      try {
         await ProjectsAPI.deleteProject(project_id);
         const projects = await ProjectsAPI.getAllProjects();
         dispatch({ type: 'SET_ALL_PROJECTS', payload: projects.data });
         deliver('success!');
      } catch (e) {
         console.log('e:::', e);
         reneg(e)
      }
   })
}