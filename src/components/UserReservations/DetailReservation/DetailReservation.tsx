import Modal from "../../User/Update/Modal/Modal";
import Styles from "./DetailReservation.module.css";
import Button from "../../Button/Button";
import Reservation from "../../../model/Reservation";
import { useLabName } from "../../../hooks/useLabName";

type Props = {
  reservation: Reservation | null;
  isOpen: boolean;
  onClose: () => void;
  onCancelReservation: () => void;
  labName: string;
};

function DetailReservation({
  reservation,
  isOpen,
  onClose,
  onCancelReservation,
  labName,
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
                <span>Laboratorio:</span> {labName}
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
