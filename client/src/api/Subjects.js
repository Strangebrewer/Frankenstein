import API from './API';

export function getAllSubjects() {
   return API().get(`/dragons/subjects`);
}

export function updateSubject(subject_id, update) {
   API().put(`/dragons/subjects/${subject_id}`, update);
}