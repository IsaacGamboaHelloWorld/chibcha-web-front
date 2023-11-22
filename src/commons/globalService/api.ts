import axios from 'axios';

const port: string = '3000';
const url: string = 'http://localhost:';

const api = axios.create({
  baseURL: `${url}${port}`,
});




// api.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   function (error) {
//     if (
//       error.response.data.status === '401' &&
//       error.response.data.message ===
//         'Full authentication is required to access this resource'
//     ) {
//       localStorage.clear();
//       location.reload();
//     }

//     return Promise.reject(error);
//   },
// );
export default api;
