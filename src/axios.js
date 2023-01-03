import axios from "axios";

export const loginApiURL = "login/";
export const eventsApiURL = "events/";

const token = sessionStorage.getItem("token");
const instance = axios.create({
  baseURL: "http://109.205.28.225:8443/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${token}`,
  },
});

export default instance;
