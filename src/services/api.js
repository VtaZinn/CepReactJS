import axios from "axios";

// 08615120/json/

const api = axios.create({
  baseURL: "http://viacep.com.br/ws/"
});

export default api;