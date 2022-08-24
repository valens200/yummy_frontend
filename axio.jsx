import axios from "axios";


export const server = axios.baseUrl({
    baseUrl: "http://localhost:5000"
})