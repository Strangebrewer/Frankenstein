import API from './API';

export function getAllTexts() {
   return API().get(`/dragons/texts`);
}

export function updateText(text_id, update) {
   return API().put(`/dragons/texts/${text_id}`, update);
}