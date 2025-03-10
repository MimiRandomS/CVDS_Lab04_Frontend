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
