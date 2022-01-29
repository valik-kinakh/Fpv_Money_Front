import axios from "axios";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const addCategory = (name) => {
    return axios.post(`/Catigories/add/${name}`).then(({data}) => data);
}

const removeCategory = (id) => {
    return axios.delete(`/Catigories/delete/${id}`)
}

const editCategory = (newName, id) => {
    return axios.post(`Catigories/changeName/${id}?newName=${newName}`)
        .then(({data})=>data);
}

const getCategories = () => {
    return axios.get('/Catigories/GetAll').then(({data})=>data);
}

const categoriesApi = {
    addCategory,
    removeCategory,
    editCategory,
    getCategories
}

export default categoriesApi;