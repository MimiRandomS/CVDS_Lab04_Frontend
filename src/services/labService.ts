import ApiResponse from "../model/ApiResponse";
import Lab from "../model/Lab";
import handleApiError from "../utils/HandleError";
import api from "./api";

const getLabs = async (): Promise<ApiResponse<Lab[]>> => {
  try {
    const response = await api.get<ApiResponse<Lab[]>>("/labs/allLabs");
    return response.data;
  } catch (error: any) {
    return handleApiError(error);
  }
};

const getLabName = async (labId: string): Promise<ApiResponse<string>> => {
  try {
    const response = await api.get<ApiResponse<string>>(
      `/labs/labName/${labId}`
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export { getLabs, getLabName };
