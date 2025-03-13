import api from "./api";

interface Lab {
  id: string;
  name: string;
  capacity: number;
  reservations: string[];
  equipment: Record<string, number>;
  location: string;
}

const handleError = (error: any): never => {
  const errorMessage =
    error.response?.data?.error ||
    (typeof error.response?.data === "string"
      ? error.response.data
      : "Error en la autenticación");

  throw new Error(errorMessage);
};

const getLabs = async (): Promise<Lab[]> => {
  try {
    const response = await api.get<Lab[]>("/labs/allLabs");
    return response.data;
  } catch (error: any) {
    return handleError(error);
  }
};

export { getLabs };
