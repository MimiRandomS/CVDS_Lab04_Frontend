import { useEffect, useState } from "react";
import { getWeekReservations } from "../services/reservationService";
import Reservation from "../model/Reservation";

const useWeekReservations = (labId: string, date1: Date, date2: Date) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  const formatDate = () => ({
    startDate: date1.toISOString().split("T")[0],
    endDate: date2.toISOString().split("T")[0],
  });

  useEffect(() => {
    const fetchWeekReservations = async () => {
      try {
        const { startDate, endDate } = formatDate();
        const response = await getWeekReservations({
          labId,
          startDate,
          endDate,
        });
        setReservations(response.data!);
      } catch (error) {
        alert("Error obteniendo los laboratorios");
      }
    };

    fetchWeekReservations();
  }, [labId, date1, date2]);

  return reservations;
};

export default useWeekReservations;
