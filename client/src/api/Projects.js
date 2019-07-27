import API from './API';

export function getAllProjects() {
   return API().get('/dragons/projects');
}

export function getCurrentProject(project_id) {
   return API().get(`/dragons/projects/${project_id}`);
}

export function updateProject(project_id, update) {
   return API().put(`/dragons/projects/${project_id}`, update);
}