import API from './API';

export function getAllProjects() {
   return API().get('/dragons/projects');
}