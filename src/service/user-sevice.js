import axios from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_API_ENDPOINT}/users`;

export const apiAllUsers = () => {
  return axios.get("/all");
};

export const apiSearch = (keyword) => {
  return axios.get(`/search?keyword=${keyword}`);
};

export const apiGetUserById = (id) => {
  return axios.get(`http://localhost:3000/users/${id}`);
};
