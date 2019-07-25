import API from './API';

export function getAllSubjects() {
   return API().get(`/dragons/subjects`);
}