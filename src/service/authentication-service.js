import axios from 'axios'

export const apiLogin = (email, password) => {
    return axios.post("http://localhost:3000/login", {
        email,
        password
    })
}
