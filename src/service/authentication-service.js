import axios from 'axios'

export const apiLogin = (email, password) => {
    return axios.post(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
        email,
        password
    })
}
