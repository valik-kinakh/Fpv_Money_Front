import axios from "axios";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const addProduct = (product) => {
    return axios.post('/Product/add', product).then(({data})=> data);
}

const deleteProduct = (id) => {
    return axios.delete(`/Product/delete/${id}`);
}

const getProducts = (state) => {
    return axios.get(`/Product/GetAll?state=${state}`).then(({data})=> data);
}

const changeProductName = (id, name) => {
    return axios.post(`Product/changeProductName/${id}?name=${name}`).then(({data})=> data);
}

const changeProductCategory = (id, categoryName) => {
    return axios.post(`Product/moveToCategory/${id}?categoryName=${categoryName}`).then(({data})=> data);
}

const changeSellingPrice = (id, price) => {
    return axios.post(`Product/addSallingPrice/${id}?price=${price}`).then(({data})=> data);
}

const addArrivalDate = (id, date) => {
    return axios.post(`Product/addArrivalDate/${id}?time=${date}`).then(({data})=> data);
}

const addSellingDate = (id, date) => {
    return axios.post(`Product/addSallingDate/${id}?time=${date}`).then(({data})=> data);
}

const productsApi = {
    addProduct,
    deleteProduct,
    getProducts,
    changeProductName,
    changeProductCategory,
    changeSellingPrice,
    addArrivalDate,
    addSellingDate
}

export default productsApi;