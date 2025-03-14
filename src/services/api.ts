import axios from "axios";

const api = axios.create({
  baseURL:
    "https://unireserva-haa2a4e3aueeeqes.brazilsouth-01.azurewebsites.net/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
