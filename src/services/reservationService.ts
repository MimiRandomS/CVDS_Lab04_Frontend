import ApiResponse from "../model/ApiResponse";
import handleApiError from "../utils/HandleError";
import api from "./api";
import Reservation from "../model/Reservation";

type CreateReservationRequest = Omit<Reservation, "id" | "status">;

type GetWeekReservationsRequest = {
  labId: string;
  startDate: string;
  endDate: string;
};

export const createReservation = async (
  data: CreateReservationRequest
): Promise<ApiResponse<Reservation>> => {
  try {
    const response = await api.post<ApiResponse<Reservation>>(
      "/reservations",
      data
    );
    return response.data;
  } catch (error: any) {
    return handleApiError(error);
  }
};

export const getWeekReservations = async (
  data: GetWeekReservationsRequest
): Promise<ApiResponse<Reservation[]>> => {
  if (!data.labId) {
    console.error("Error: Lab ID está vacío");
    return Promise.reject(new Error("Lab ID es obligatorio"));
  }
  try {
    const response = await api.get<ApiResponse<Reservation[]>>(
      "/reservations/range",
      {
        params: { lab: data.labId, date1: data.startDate, date2: data.endDate },
      }
    );
    return response.data;
  } catch (error: any) {
    return handleApiError(error);
  }
};

export const getUserReservations = async (
  userId: string
): Promise<Reservation[]> => {
  try {
    const response = await api.get<Reservation[]>(
      `reservations/user/${userId}`
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Error al obtener reservas:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const cancelReservation = async (
  reservationId: string
): Promise<string> => {
  try {
    const response = await api.put<string>(
      `reservations/cancel/${reservationId}`
    );
    return response.data;
  } catch (error: any) {
    console.error(
      "Error al cancelar reserva:",
      error.response?.data || error.message
    );
    throw error;
  }
};
