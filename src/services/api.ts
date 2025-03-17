import axios from "axios";

const api = axios.create({
  baseURL:
    "https://unireserva-haa2a4e3aueeeqes.brazilsouth-01.azurewebsites.net",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      sessionStorage.clear();
      window.location.href = "/login";
    }

    return Promise.reject(new Error(error.message || "Ocurrio un error"));
  }
);

export default api;
