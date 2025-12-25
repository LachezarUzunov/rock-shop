import axios from "axios";
import { auth } from "@/store/auth.js";

export const http = axios.create({
    baseURL: 'http://localhost:3000'
});

// Attach token if available
http.interceptors.request.use((config) => {
    if (auth.token.value) {
        config.headers.Authorization = `Beader ${auth.token.value}`;
    }

    return config;
})