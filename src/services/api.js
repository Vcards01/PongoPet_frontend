import axios from 'axios';
import variables from "./variables.json"

const api = axios.create({
    baseURL:variables.BACKEND_URL
})

export default api
