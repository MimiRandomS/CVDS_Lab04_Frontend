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

export const signup = async (data: SignUpRequest) => {
  try {
    const response = await api.post<User>("/auth/signup", data);
    localStorage.setItem("userId", response.data.id.toString());
    return response.data;
  } catch (error: any) {
    const errorMessage =
      typeof error.response?.data === "string"
        ? error.response.data
        : error.response?.data?.error || "Error en la autenticación";

    throw new Error(errorMessage);
  }
};
