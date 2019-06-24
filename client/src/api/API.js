import axios from 'axios'

export default () => {
   return axios.create({
      // baseURL: 'http://localhost:3001', // use this at work
      baseURL: 'http://localhost:8080', // use this at home
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
   });
}