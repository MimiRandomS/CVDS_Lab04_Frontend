import { useEffect, useState } from "react";
import MainLayout from "../../../layouts/MainLayout/MainLayout";
import LateralBar from "../../../components/LateralBar/LateralBar";
import UserReservations from "../../../components/UserReservations/UserReservations";
import { getUserReservations } from "../../../services/reservationService";
import Reservation from "../../../model/Reservation";
import { TailSpin } from "react-loading-icons";
import getUserFromSessionStorage from "../../../utils/getFromSessionStorage";

const UserReservationsPage: React.FC = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReservations = async () => {
      const user = getUserFromSessionStorage();
      const userId = user.id;

      try {
        const data = await getUserReservations(userId);
        setReservations(data.data!);
      } catch (err) {
        console.error("Error fetching reservations", err);
        setError("No se pudieron cargar las reservas. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

  return (
    <MainLayout
      leftContent={<LateralBar />}
      rightContent={
        loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "white",
            }}
          >
            <TailSpin stroke="#4F46E5" width={80} height={80} />
          </div>
        ) : error ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              backgroundColor: "white",
              color: "red",
              fontWeight: "bold",
            }}
          >
            <p>{error}</p>
          </div>
        ) : (
          <UserReservations reservations={reservations} />
        )
      }
    />
  );
};

export default UserReservationsPage;
