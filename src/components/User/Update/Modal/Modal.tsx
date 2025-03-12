import { ReactNode } from "react";
import styles from "./Modal.module.css";

type Props = {
  readonly title: string;
  readonly children: ReactNode;
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

function Modal({ title, children, isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

export default Modal;