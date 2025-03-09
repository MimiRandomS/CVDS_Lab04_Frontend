import api from "./api";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface SignUpRequest {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface LogInRequest {
  email: string;
  password: string;
}

const saveUser = (user: User | null) => {
  if (!user) return;

  localStorage.setItem("userId", user.id);
  localStorage.setItem("userName", user.name);
  localStorage.setItem("userEmail", user.email);
};

const handleError = (error: any): never => {
  const errorMessage =
    error.response?.data?.error ||
    (typeof error.response?.data === "string"
      ? error.response.data
      : "Error en la autenticación");

  throw new Error(errorMessage);
};

export const signup = async (data: SignUpRequest) => {
  try {
    const response = await api.post<User>("/auth/signup", data);
    saveUser(response.data);
    return response.data;
  } catch (error: any) {
    handleError(error);
  }
};

export const login = async (data: LogInRequest) => {
  try {
    const response = await api.post<User>("/auth/login", data);
    saveUser(response.data);
    return response.data;
  } catch (error: any) {
    handleError(error);
  }
};
