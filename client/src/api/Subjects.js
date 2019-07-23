import API from './API';

export function getAllSubjects(project_id) {
   return API().get(`/dragons/subjects/all/${project_id}`);
}