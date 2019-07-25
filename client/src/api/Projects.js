import API from './API';

export function getAllProjects() {
   return API().get('/dragons/projects');
}

export function updateProject(project_id, update) {
   return API().put(`/dragons/projects/${project_id}`, update);
}