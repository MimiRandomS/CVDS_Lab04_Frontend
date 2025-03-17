import ApiResponse from "../model/ApiResponse";
import LoginUserDto from "../model/LoginUserDto";
import RegisterUserDto from "../model/RegisterUserDto";
import UserDto from "../model/UserDto";
import handleApiError from "../utils/HandleError";
import api from "./api";

const saveToken = (token?: string) => {
  if (token) {
    sessionStorage.setItem("token", token);
  }
};

const saveUser = (user?: UserDto) => {
  if (user) {
    sessionStorage.setItem("user", JSON.stringify(user));
  }
};

const signup = async (data: RegisterUserDto): Promise<ApiResponse<UserDto>> => {
  try {
    const response = await api.post<ApiResponse<UserDto>>("/auth/signup", data);

    return response.data;
  } catch (error: any) {
    return handleApiError(error);
  }
};

const login = async (data: LoginUserDto): Promise<ApiResponse<UserDto>> => {
  try {
    const response = await api.post<ApiResponse<UserDto>>("/auth/login", data);
    saveToken(response.data.token);
    saveUser(response.data.data);

    return response.data;
  } catch (error: any) {
    return handleApiError(error);
  }
};

export { signup, login };
