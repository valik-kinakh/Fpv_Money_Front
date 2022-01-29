import axios from "axios";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const userRegister = (user) => {
    return axios.post('/User/register', user).then(({data})=> data);
}

const userLogin = (user) => {
    return axios.post('/User/login', user).then(({data})=>{
        token.set(data.token);
        return data;
    });
}

const deleteUser = (id) => {
    return axios.delete(`/User/delete/${id}`).then(({data})=>data);
}

const addUserCash = (cash, id) => {
    return axios.post(`/User/addcashformonth/${id}`, cash).then(({data})=> data);
}

const getAllUserMoney = (id) => {
    return axios.get(`User/getAllUserMoney/${id}`).then(({data})=> data);
}

const getAllUsers = () => {
    return axios.get('User/getAllUsers').then(({data})=> data);
}

const editLogin = (id,login) => {
    return axios.post(`User/editLogin/${id}?newLogin=${login}`).then(({data})=> data);
}

const usersApi = {
    userRegister,
    userLogin,
    deleteUser,
    addUserCash,
    getAllUserMoney,
    getAllUsers,
    editLogin
}

export default usersApi;