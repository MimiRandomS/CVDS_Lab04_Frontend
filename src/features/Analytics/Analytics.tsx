import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import LateralBar from "../../components/LateralBar/LateralBar";
import AnalyticsPage from "../../components/Analytics/Analytics";
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
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchReservations = async () => {
      setLoading(true);
      const response: ApiResponse<Reservation[]> = await getAllReservations();
      if (response && response.status === "success") {
        const reservations: Reservation[] = response.data ?? [];
        setReservationsByDate(countReservationsByDate(reservations));
        const reservationsByLabData = await countReservationsByLab(reservations);
        setReservationsByLab(reservationsByLabData);
        setAverageByPriority(calculateAverageByPriority(reservations));
      }
      setLoading(false);
    };
    fetchReservations();
  }, []);

  return (
    <MainLayout
      leftContent={<LateralBar />}
      rightContent={
        <AnalyticsPage
          reservationsByDate={reservationsByDate}
          reservationsByLab={reservationsByLab}
          averageByPriority={averageByPriority}
          loading={loading}
        />
      }
    />
  );
};

export default Reservations;
