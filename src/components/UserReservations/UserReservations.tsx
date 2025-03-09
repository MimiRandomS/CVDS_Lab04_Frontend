import { useState } from "react";
import styles from "./UserReservations.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";
import IconLink from "../IconLink/IconLink";
import DetailReservation from "./DetailReservation/DetailReservation";
import infoIcon from "../../assets/public/info.ico";

type Reservation = {
  id: number;
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
  const [selectedReservation, setSelectedReservation] = useState<Reservation | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (reservation: Reservation) => {
    setSelectedReservation(reservation);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedReservation(null);
    setModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.listReservations}>
        {reservations.map((reservation, index) => (
          <Card key={reservation.id} title={`Reserva ${index + 1}`} className={styles.card}>
            <Button text="Ver" className={styles.btn} onClick={() => console.log("Abrir nuevo componente")} />
            <IconLink src={infoIcon} alt="Información reserva" onClick={() => openModal(reservation)} />
          </Card>
        ))}
      </div>

      <DetailReservation
        reservation={selectedReservation}
        isOpen={modalOpen}
        onClose={closeModal}
      />
    </div>
  );
}

export default UserReservations;
