import axios from 'axios';

export const api = axios.create({
    baseURL: "http://newsapi.org/v2"
});

export const API_KEY = "f7c12929c3ce471e99e84f5a23457906";