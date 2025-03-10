import api from "./api";

interface Reservation {
  userId: string;
  labId: string;
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
}

type CreateReservationRequest = Reservation;

const handleError = (error: any): never => {
  const errorMessage =
    error.response?.data?.error ||
    (typeof error.response?.data === "string"
      ? error.response.data
      : "Error en la autenticación");

  throw new Error(errorMessage);
};

const createReservation = async (data: CreateReservationRequest) => {
  try {
    const response = await api.post<Reservation>("/reservations", data);
    return response.data;
  } catch (error: any) {
    return handleError(error);
  }
};

export { createReservation };
