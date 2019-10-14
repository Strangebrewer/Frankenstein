import axios from 'axios'

const { REACT_APP_NODE_ENV } = process.env;
let BASE_URL = 'http://localhost:3001';
if (REACT_APP_NODE_ENV === 'production') {
   BASE_URL = 'https://bkashambhala.com';
}

export default () => {
   return axios.create({
      baseURL: BASE_URL,
      headers: {
         Authorization: `Bearer ${localStorage.getItem('token')}`
      }
   });
}