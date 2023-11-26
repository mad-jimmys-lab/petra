import axios from 'axios'

const BASE_URL_LOCAL = 'http://localhost:3000';

const getTest = () => {
  return new Promise((resolve, reject) => {
    axios.get(BASE_URL_LOCAL + '/test')
    .then(response => {
      const result = response.data;
      resolve(result);
    })
    .catch(error => {
      reject(error);
    });
  })
} 

export {
  getTest
}