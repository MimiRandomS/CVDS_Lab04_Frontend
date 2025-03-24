import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../sharedStyles/labsInfoBtn.module.css";
import LabDetails from "../LabDetails/LabDetails";
import { useLab } from "../../../hooks/useLabs";

type Props = {
  readonly labId: string;
};

function LabInfo({ labId }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className={styles.labs}>
      <button className={styles.labs__btn} onClick={openModal}>
        <FontAwesomeIcon
          className={styles.labs__icon}
          icon="info-circle"
        ></FontAwesomeIcon>
      </button>
      <LabDetails isOpen={isOpen} onClose={closeModal} labId={labId} />
    </div>
  );
}

export default LabInfo;
