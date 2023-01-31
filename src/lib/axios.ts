import Axios from "axios";
import { BASE_URL } from "@/config";

const apiClient = Axios.create({
    baseURL: BASE_URL,
})

apiClient.interceptors.response.use(res => res.data);

export {
    apiClient,
}