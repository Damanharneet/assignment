import axios from "axios";

//fake-store api
const fakeStoreApiServer = "http://localhost:5000/api/";

const axiosInstanceServer = axios.create({
  baseURL: fakeStoreApiServer,
});

export default axiosInstanceServer;
