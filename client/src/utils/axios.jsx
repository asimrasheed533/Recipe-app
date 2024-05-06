import axiosBase from "axios";

const axios = axiosBase.create({
  baseURL: "http://10.0.2.2:5000/api",
});

export default axios;
