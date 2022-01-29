import axios from "axios";

import localConfig from "./config.local"; // do not change this line!!!

const axiosConfig = {
    baseURL: localConfig.baseURL,
};

const axiosInit = () => {
    axios.defaults.baseURL = axiosConfig.baseURL;
};

export default axiosInit();