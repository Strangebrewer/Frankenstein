import API from './API';

export function getAllTexts() {
   return API().get(`/dragons/texts`);
}