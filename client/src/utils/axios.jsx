import axiosBase from "axios";

const axios = axiosBase.create({
  // baseURL: "http://192.168.100.198:9000/api",
  baseURL: "http://192.168.0.111:9000/api",
});

export default axios;
