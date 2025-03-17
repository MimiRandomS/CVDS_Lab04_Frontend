import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import LateralBar from "../../components/LateralBar/LateralBar";
import Analitycs from "../../components/Analytics/Analitycs";
import { getAllReservations } from "../../services/reservationService";
import {
  countReservationsByDate,
  countReservationsByLab,
  calculateAverageByPriority,
} from "../../utils/graphics";
import Reservation from "../../model/Reservation";
import ApiResponse from "../../model/ApiResponse";

const Reservations = () => {
  const [reservationsByDate, setReservationsByDate] = useState<{
    [date: string]: number;
  }>({});
  const [reservationsByLab, setReservationsByLab] = useState<{
    [lab: string]: number;
  }>({});
  const [averageByPriority, setAverageByPriority] = useState<{
    [priority: number]: number;
  }>({});

  useEffect(() => {
    const fetchReservations = async () => {
      const response: ApiResponse<Reservation[]> = await getAllReservations();
      if (response && response.status === "success") {
        const reservations: Reservation[] = response.data ?? [];
        setReservationsByDate(countReservationsByDate(reservations));
        setReservationsByLab(countReservationsByLab(reservations));
        setAverageByPriority(calculateAverageByPriority(reservations));
      }
    };
    fetchReservations();
  }, []);

  return (
    <MainLayout
      leftContent={<LateralBar />}
      rightContent={
        <Analitycs
          reservationsByDate={reservationsByDate}
          reservationsByLab={reservationsByLab}
          averageByPriority={averageByPriority}
        />
      }
    />
  );
};

export default Reservations;
