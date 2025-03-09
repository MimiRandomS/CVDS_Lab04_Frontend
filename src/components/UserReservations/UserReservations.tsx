import { useState } from "react";
import styles from "./UserReservations.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import IconLink from "../IconLink/IconLink";
import DetailReservation from "./DetailReservation/DetailReservation";
import CancelReservation from "./CancelReservation/CancelReservation";
import infoIcon from "../../assets/public/info.ico";

type Reservation = {
  id: string;
  lab: string;
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
};

type Props = {
  readonly reservations: Reservation[];
};

function UserReservations({ reservations }: Props) {
  const [reservationsList, setReservationsList] = useState<Reservation[]>(reservations);

  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [reservationToCancel, setReservationToCancel] = useState<Reservation | null>(null);

  const handleCancelReservation = (reservationId: string) => {
    // Call to backend to cancel reservation
    setReservationsList((prevList) => prevList.filter((res) => res.id !== reservationId));
    closeCancelModal();
  };
  

  const openModal = (reservation: Reservation) => {
    setSelectedReservation(reservation);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedReservation(null);
    setModalOpen(false);
  };

  const openCancelModal = (reservation: Reservation) => {
    setReservationToCancel(reservation);
    setCancelModalOpen(true);
  };

  const closeCancelModal = () => {
    setReservationToCancel(null);
    setCancelModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.listReservations}>
        {reservationsList.map((reservation) => (
          <Card key={reservation.id} title={`Reserva del ${reservation.date}`} className={styles.card}>
            <Button text="Ver" className={styles.btn} onClick={() => console.log("Abrir nuevo componente")} />
            <IconLink src={infoIcon} alt="Información reserva" onClick={() => openModal(reservation)} />
          </Card>
        ))}
      </div>

      <DetailReservation
        reservation={selectedReservation}
        isOpen={modalOpen}
        onClose={closeModal}
        onCancelReservation={() => {
          closeModal();
          if (selectedReservation) openCancelModal(selectedReservation);
        }}
      />

      <CancelReservation
        isOpen={cancelModalOpen}
        onClose={closeCancelModal}
        onConfirm={() => reservationToCancel && handleCancelReservation(reservationToCancel.id)}
      />
    </div>
  );
}

export default UserReservations;
