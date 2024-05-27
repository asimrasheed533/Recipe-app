import axiosBase from "axios";

const axios = axiosBase.create({
  // baseURL: "http://192.168.100.198:9000/api",
  // baseURL: "http://192.168.100.198:9000/api",
  baseURL: "https://recipe-app-production-636b.up.railway.app/api",
});

export default axios;
