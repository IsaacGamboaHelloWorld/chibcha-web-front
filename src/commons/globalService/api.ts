import axios from 'axios';

const port: string = import.meta.env.VITE_PORT;
const appCtx: string = import.meta.env.VITE_CTX;
const url: string = import.meta.env.VITE_BASE_URL;
const pathLastPart: string = import.meta.env.VITE_PATH_LAST_PART;
const apiKey: string = import.meta.env.VITE_API_KEY;


const api = axios.create({
  baseURL: `${url}${port}${appCtx}${pathLastPart}`,
});

api.defaults.headers.common['x-api-key'] = !!apiKey ? apiKey : null;
api.defaults.headers.common['X-Channel'] = 'BBS';



api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      error.response.data.status === '401' &&
      error.response.data.message ===
        'Full authentication is required to access this resource'
    ) {
      localStorage.clear();
      location.reload();
    }

    return Promise.reject(error);
  },
);
export default api;
