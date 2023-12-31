import axios from 'axios';

const port: string = '';
const url: string = 'https://chibchawebholamundo.onrender.com';
// const port: string = '';
// const url: string = 'http://localhost:3000/';

const api = axios.create({
  baseURL: `${url}${port}`,
});

api.defaults.headers.common['Authorization'] = localStorage.getItem('token') || '';


api.interceptors.request.use(function (config) {
  // @ts-ignore
  config.headers={
    ...config.headers,
    Authorization:  localStorage.getItem('token') || ''
  }
  return config;
});

api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response.request.status == 403){
    console.log(error)
    localStorage.clear()
    location.reload()
  }
 
  return Promise.reject(error);
});
export default api;
