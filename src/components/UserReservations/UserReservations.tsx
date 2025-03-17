import { useEffect, useState } from "react";
import styles from "./UserReservations.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import IconLink from "../IconLink/IconLink";
import DetailReservation from "./DetailReservation/DetailReservation";
import CancelReservation from "./CancelReservation/CancelReservation";
import infoIcon from "../../assets/public/info.ico";
import { cancelReservation } from "../../services/reservationService";
import Reservation from "../../model/Reservation";
import { getLabName } from "../../services/labService";

type Props = {
  readonly reservations: Reservation[];
};

function UserReservations({ reservations }: Props) {
  const [reservationsList, setReservationsList] =
    useState<Reservation[]>(reservations);

  const [selectedReservation, setSelectedReservation] =
    useState<Reservation | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [reservationToCancel, setReservationToCancel] =
    useState<Reservation | null>(null);

  const [currentLabName, setCurrentLabName] = useState<string>("Cargando...");

  useEffect(() => {
    if (!selectedReservation) {
      return;
    }

    const fetchLabName = async () => {
      try {
        const name = await getLabName(selectedReservation.labId);
        setCurrentLabName(name.data!);
      } catch (error) {
        console.error("Error al obtener el nombre del laboratorio", error);
        setCurrentLabName("Cargando...");
      }
    };

    fetchLabName();
  }, [selectedReservation]);

  const handleCancelReservation = async (reservationId: string) => {
    try {
      await cancelReservation(reservationId);
      setReservationsList((prevList) =>
        prevList.filter((res) => res.id !== reservationId)
      );
    } catch (error) {
      console.error("Error al cancelar la reserva", error);
      alert("Hubo un problema al cancelar la reserva. Intenta de nuevo.");
    } finally {
      closeCancelModal();
    }
  };

  const openModal = (reservation: Reservation) => {
    setSelectedReservation(reservation);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedReservation(null);
    setCurrentLabName("Cargando...");
    setModalOpen(false);
  };

  const openCancelModal = (reservation: Reservation) => {
    setReservationToCancel(reservation);
    setCancelModalOpen(true);
  };

  const closeCancelModal = () => {
    setReservationToCancel(null);
    setCurrentLabName("Cargando...");
    setCancelModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.listReservations}>
        {reservationsList.filter(
          (reservation) => reservation.status === "CONFIRMED"
        ).length === 0 ? (
          <Card
            title="No tienes reservas confirmadas"
            className={styles.noReservationsCard}
          >
            <p className={styles.noReservationsText}>
              Parece que aún no has realizado ninguna reserva.
            </p>
          </Card>
        ) : (
          reservationsList
            .filter((reservation) => reservation.status === "CONFIRMED")
            .map((reservation) => (
              <Card
                key={reservation.id}
                title={`Reserva del ${reservation.date}`}
                className={styles.card}
              >
                {/*
              TODO: Implementar botón para ver detalles de reserva.
              <Button text="Ver" className={styles.btn} onClick={() => console.log("Abrir nuevo componente")} />
            */}
                <IconLink
                  src={infoIcon}
                  alt="Información reserva"
                  onClick={() => openModal(reservation)}
                />
              </Card>
            ))
        )}
      </div>
      <DetailReservation
        reservation={selectedReservation}
        isOpen={modalOpen}
        onClose={closeModal}
        onCancelReservation={() => {
          closeModal();
          if (selectedReservation) openCancelModal(selectedReservation);
        }}
        labName={currentLabName!}
      />

      <CancelReservation
        isOpen={cancelModalOpen}
        onClose={closeCancelModal}
        onConfirm={() =>
          reservationToCancel && handleCancelReservation(reservationToCancel.id)
        }
      />
    </div>
  );
}

export default UserReservations;
