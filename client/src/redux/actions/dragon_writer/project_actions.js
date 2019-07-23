import * as ProjectsAPI from '../../../api/Projects';

export function getAllProjects() {
   return async dispatch => {
      try {
         const projects = await ProjectsAPI.getAllProjects();
         console.log('projects:::', projects);
         dispatch({ type: 'SET_ALL_PROJECTS', payload: projects.data })
      } catch (e) {

      }
   }
}