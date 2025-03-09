import Modal from "../../Modal/Modal";
import Styles from "./DetailReservation.module.css";
import DateSelector from "../../Reservations/DateSelector/DateSelector";

type Reservation = {
  lab: string;
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
};

type Props = {
  reservation: Reservation | null;
  isOpen: boolean;
  onClose: () => void;
};

function DetailReservation({ reservation, isOpen, onClose }: Props) {
  const parsedDate = reservation ? new Date(reservation.date) : null;

  return (
    <Modal title="Reserva" isOpen={isOpen} onClose={onClose}>
      {reservation ? (
        <div className={Styles.main}>
          <div className={Styles.container}>
            <div className={Styles.row}>
              <p>
                <strong>Laboratorio:</strong> {reservation.lab}
              </p>
              <p>
                <strong>Hora de inicio:</strong> {reservation.startTime}
              </p>
              <p>
                <strong>Hora de fin:</strong> {reservation.endTime}
              </p>
              <p>
                <strong>Propósito:</strong> {reservation.purpose}
              </p>
              
              <DateSelector initialDate={parsedDate} className={Styles.date} />
            </div>
          </div>
        </div>
      ) : (
        <p>No hay detalles disponibles.</p>
      )}
    </Modal>
  );
}

export default DetailReservation;
