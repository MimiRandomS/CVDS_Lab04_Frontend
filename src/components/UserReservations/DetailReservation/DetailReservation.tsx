import Modal from "../../Modal/Modal";
import Styles from "./DetailReservation.module.css";
import Button from "../../Button/Button";

type Reservation = {
  id: string;
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
  onCancelReservation: () => void;
};

function DetailReservation({
  reservation,
  isOpen,
  onClose,
  onCancelReservation,
}: Props) {
  return (
    <Modal title="Reserva" isOpen={isOpen} onClose={onClose}>
      {reservation ? (
        <div className={Styles.main}>
          <div className={Styles.container}>
            <div className={Styles.row}>
              <div>
                <span>Fecha:</span> {reservation.date}
              </div>
              <div>
                <span>Laboratorio:</span> {reservation.lab}
              </div>
            </div>
            <div className={Styles.row}>
              <div>
                <span>Hora:</span> {reservation.startTime} -{" "}
                {reservation.endTime}
              </div>
            </div>
            <div className={Styles.row}>
              <div>
                <span>Propósito:</span> {reservation.purpose}
              </div>
            </div>
            <div className={Styles.row}>
              <Button
                text="Cancelar Reserva"
                className={Styles.btn1}
                onClick={onCancelReservation}
              />
              <Button text="Ok" className={Styles.btn2} onClick={onClose} />
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
