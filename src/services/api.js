import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ap-backend-nyel.onrender.com/api',
    withCredentials: true,
});

export default api;
