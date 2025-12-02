import axios from 'axios';

const api = axios.create({
<<<<<<< HEAD
   baseURL: 'https://apbackend-production-b830.up.railway.app/api',
=======
    baseURL: 'https://apbackend-production-b830.up.railway.app/api',
>>>>>>> 3f2e8aca (pre test)
    withCredentials: true,
});

export default api;
