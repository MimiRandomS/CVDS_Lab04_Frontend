import Modal from "../../User/Update/Modal/Modal";
import Styles from "./CancelReservation.module.css";
import Button from "../../Button/Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

function CancelReservation({ isOpen, onClose, onConfirm }: Props) {
  return (
    <Modal
      title="¿Estás seguro de cancelar esta reserva?"
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={Styles.container}>
        <Button className={Styles.btn2} text="Cancelar" onClick={onClose} />
        <Button
          className={Styles.btn1}
          text="Confirmar"
          onClick={onConfirm}
        ></Button>
      </div>
    </Modal>
  );
}

export default CancelReservation;
