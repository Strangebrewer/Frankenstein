import API from './API';

export default {
   register(credentials) {
      return API().post('/users/register', credentials);
   },
   login(credentials) {
      console.log('credentials:::', credentials);
      return API().post('/users/login', credentials);
   },
   getCurrentUser() {
      return API().get('/users');
   },
   updateCurrentUser(update) {
      return API().put('/users', update);
   },
   updatePassword(update) {
      return API().put('/users/password', update);
   },
   deleteUser(id) {
      return API().delete(`/users/${id}`);
   }
}