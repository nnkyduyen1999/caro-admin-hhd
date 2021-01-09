import axios from 'axios'

axios.defaults.baseURL = `${process.env.REACT_APP_API_ENDPOINT}`;
// axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')

export const apiLogin = (email, password) => {
    return axios.post(`/login`, {
        email,
        password
    });
}
