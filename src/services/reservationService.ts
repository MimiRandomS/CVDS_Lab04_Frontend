import api from "./api";

export type Reservation = {
    id: string;
    user: string;
    lab: string;
    date: string;
    startTime: string;
    endTime: string;
    purpose: string;
    status: "CONFIRMED" | "CANCELED";
};


type CreateReservationRequest = Reservation;

const handleError = (error: any): never => {
  const errorMessage =
    error.response?.data?.error ||
    (typeof error.response?.data === "string"
      ? error.response.data
      : "Error en la autenticación");

  throw new Error(errorMessage);
};

export const createReservation = async (data: CreateReservationRequest) => {
  try {
    const response = await api.post<Reservation>("/reservations", data);
    return response.data;
  } catch (error: any) {
    return handleError(error);
  }
};

export const getUserReservations = async (
  userId: string
): Promise<Reservation[]> => {
  try {
    const response = await api.get<Reservation[]>(`reservations/user/${userId}`);
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
    const response = await api.put<string>(`reservations/cancel/${reservationId}`);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error al cancelar reserva:",
      error.response?.data || error.message
    );
    throw error;
  }
};
