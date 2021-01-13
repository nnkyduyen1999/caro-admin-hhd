import axios from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_API_ENDPOINT}`;

export const apiAllFinishGames = () => {
  return axios.get("/games/finish", {
    headers: {
      "Authorization": `Bearer ${localStorage.getItem('token')}`
    }
  });
};