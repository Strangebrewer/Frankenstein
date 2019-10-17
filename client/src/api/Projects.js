import API from './API';

export function getAllProjects() {
   return API().get('/dragons/projects');
}

export function getCurrentProject(project_id) {
   return API().get(`/dragons/projects/${project_id}`);
}

export function postNewProject(project) {
   return API().post('/dragons/projects', project);
}

export function updateProject(project_id, update) {
   return API().put(`/dragons/projects/${project_id}`, update);
}

export function deleteProject(project_id) {
   return API().delete(`/dragons/projects/${project_id}`);
}