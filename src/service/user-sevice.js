import axios from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_API_ENDPOINT}`;

export const apiAllUsers = () => {
  return axios.get("/users/all", {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  });
};

export const apiSearch = (keyword) => {
  return axios.get(`/users/search?keyword=${keyword}`, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  });
};

export const apiBlockUser = (userId) => {
  return axios.get(`/users/${userId}/block`, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  });
};

export const apiGetUserById = (id) => {
  return axios.get(`users/${id}`, {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  });
};
