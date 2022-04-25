import axios from "axios";
import { API_URL } from "./config";

const customAxios = axios.create({
    baseURL: API_URL
})

customAxios.interceptors.request.use(
    async (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)
  
customAxios.interceptors.response.use(
    async (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default customAxios