import API from './API';

export function getAllSubjects() {
   return API().get(`/dragons/subjects`);
}

export function postNewSubject(subject) {
   return API().post('/dragons/subjects', subject);
}

export function updateSubject(subject_id, subject) {
   return API().put(`/dragons/subjects/${subject_id}`, subject);
}

export function deleteSubject(subject_id) {
   return API().delete(`/dragons/subjects/${subject_id}`);
}