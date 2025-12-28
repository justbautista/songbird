import axios from "axios";

const base = import.meta.env.VITE_LOCAL || import.meta.env.VITE_SERVER;
const instance = axios.create({
    baseURL: base,
});

export default instance;
