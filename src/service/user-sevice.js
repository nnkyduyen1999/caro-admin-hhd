import axios from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_API_ENDPOINT}`;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

export const apiAllUsers = () => {
  return axios.get("/users/all");
};

export const apiSearch = (keyword) => {
  return axios.get(`/users/search?keyword=${keyword}`);
};

export const apiBlockUser = (userId) => {
  return axios.get(`/users/${userId}/block`);
};

export const apiGetUserById = (id) => {
  return axios.get(`users/${id}`);
};
