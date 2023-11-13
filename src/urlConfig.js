import axios from "axios";

//fake-store api
const fakeStoreApi = "https://fakestoreapi.com/";

const axiosInstance = axios.create({
  baseURL: fakeStoreApi,
});

export default axiosInstance;
