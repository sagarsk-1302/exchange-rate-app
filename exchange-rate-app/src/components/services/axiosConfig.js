import axios from "axios";
// Create instance called axiosInstance
const axiosInstance = axios.create({
    baseURL: "http://localhost:5000/api/exchange-rates",
});

export default axiosInstance;