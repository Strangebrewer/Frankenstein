import API from './API';

export function getAllTexts(project_id) {
   return API().get(`/dragons/texts/all/${project_id}`);
}