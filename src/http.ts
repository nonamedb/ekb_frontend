import axios from 'axios';

export const http = axios.create({
    baseURL: 'http://83.220.170.234:8080/',
});
