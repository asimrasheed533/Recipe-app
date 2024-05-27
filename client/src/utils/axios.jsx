import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosBase from "axios";

const axios = axiosBase.create({
  // baseURL: "http://192.168.100.198:9000/api",
  baseURL: "https://recipe-app-production-636b.up.railway.app/api",
});

axios.interceptors.request.use(async (config) => {
  const token = JSON.parse(await AsyncStorage.getItem("user"));

  console.log("Token:", token);

  if (token) {
    config.headers["x-access-token"] = `${token}`;
  }
  return config;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Error response:", error.response.data);
    switch (error.response.status) {
      case 500:
        alert("Something went wrong");
        break;
      default:
        alert("Something went wrong");
    }

    return Promise.reject(error);
  }
);

export default axios;
