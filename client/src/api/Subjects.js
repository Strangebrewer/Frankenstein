import API from './API';

export function getAllSubjects() {
   return API().get(`/dragons/subjects`);
}

export function postNewSubject(subject) {
   return API().post('/dragons/subjects', subject);
}

export function updateSubject(subject_id, update) {
   API().put(`/dragons/subjects/${subject_id}`, update);
}