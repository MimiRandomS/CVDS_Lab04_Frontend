import { useEffect, useState } from "react";
import MainLayout from "../../../layouts/MainLayout/MainLayout";
import LateralBar from "../../../components/LateralBar/LateralBar";
import UserReservations from "../../../components/UserReservations/UserReservations";
import { getUserReservations } from "../../../services/reservationService";
import { Reservation } from "../../../services/reservationService";


type UserReservationsPageProps = {
  userId: string;
};

const UserReservationsPage: React.FC<UserReservationsPageProps> = ({
  userId,
}) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const data = await getUserReservations(userId);
        setReservations(data);
      } catch (err) {
        console.error("Error fetching reservations", err);
        setError("No se pudieron cargar las reservas.");
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, [userId]);

  return (
    <MainLayout
      leftContent={<LateralBar />}
      rightContent={
        loading ? (
          <p>Cargando reservas...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <UserReservations reservations={reservations} />
        )
      }
    />
  );
};

export default UserReservationsPage;
