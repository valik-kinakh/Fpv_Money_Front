import axios from "axios";

const generateExel = () => {
    return axios.get('/Common/generateExcel').then(({data}) => data);
}

const getCashFlow = () => {
    return axios.get('/Common/chashFlow').then(({data}) => data);
}

const convertMoney = (from) => {
    return axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
        .then(({data}) => data);
}

const commonApi = {
    generateExel,
    getCashFlow,
    convertMoney
}

export default commonApi;