import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: "http://192.168.100.37:5000/api",
});

export default axios;
