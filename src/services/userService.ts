import ApiResponse from "../model/ApiResponse";
import RegisterUserDto from "../model/RegisterUserDto";
import UserDto from "../model/UserDto";
import handleApiError from "../utils/HandleError";
import api from "./api";

const createUser = async (
  data: RegisterUserDto
): Promise<ApiResponse<UserDto>> => {
  try {
    const response = await api.post<ApiResponse<UserDto>>(
      "/admin/createUser",
      data
    );

    return response.data;
  } catch (error: any) {
    return handleApiError(error);
  }
};

export { createUser };
