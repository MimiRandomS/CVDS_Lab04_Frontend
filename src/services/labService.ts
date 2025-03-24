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

const getLab = async (labId: string): Promise<ApiResponse<Lab>> => {
  try {
    const response = await api.get<ApiResponse<Lab>>(`/labs/lab/${labId}`);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

const getLabNamesDictionary = async (labIds: string[]) => {
  const labNames: Record<string, string> = {};

  for (const labId of labIds) {
    try {
      const response = await getLabName(labId);
      labNames[labId] = response.data ?? "Desconocido";
    } catch (error) {
      console.error(`Error obteniendo el nombre del laboratorio ${labId}`, error);
      labNames[labId] = "Desconocido";
    }
  }

  return labNames;
};

export { getLabs, getLabName, getLab, getLabNamesDictionary};
