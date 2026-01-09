import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ap-backend-nyel.onrender.com',
    withCredentials: true,
});

export default api;
