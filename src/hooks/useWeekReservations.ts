import { useEffect, useState } from "react";
import { getWeekReservations } from "../services/reservationService";
import Reservation from "../model/Reservation";

type Props = {
  readonly labId: string;
  readonly monday: Date;
  readonly sunday: Date;
  readonly reservationCreated: boolean;
};

const useWeekReservations = ({
  labId,
  monday,
  sunday,
  reservationCreated,
}: Props) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const formatDate = () => ({
    startDate: monday.toISOString().split("T")[0],
    endDate: sunday.toISOString().split("T")[0],
  });

  useEffect(() => {
    setIsLoading(true);
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
      } finally {
        setIsLoading(false);
      }
    };

    fetchWeekReservations();
  }, [labId, monday, sunday, reservationCreated]);

  return { reservations, isLoading };
};

export default useWeekReservations;
