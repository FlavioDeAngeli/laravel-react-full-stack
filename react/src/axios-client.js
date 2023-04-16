import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`,
});

//function executed before http request (to check auth token)
axiosClient.interceptors.request.use((config) => {
    const token = localStorage.get("ACCESS_TOKEN");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
});

//function executed after http request (...)
axiosClient.interceptors.response.use(
    //request fullfilled
    (response) => {
        return response;
    },
    //request rejected
    (error) => {
        const { response } = error;
        if (response.status === 401) {
            localStorage.removeItem("ACCESS_TOKEN");
        }
        throw error;
    }
);
export default axiosClient;
