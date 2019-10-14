import axios from 'axios'

export default () => {
   return axios.create({
      baseURL: 'http://localhost:3001',
      // baseURL: 'https://bkashambhala.com',
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
   });
}