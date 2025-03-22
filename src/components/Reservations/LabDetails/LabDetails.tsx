import React, { useState } from "react";
import Modal from "../../User/Update/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./LabDetails.module.css";
import { useLab } from "../../../hooks/useLabs";

type Props = {
  readonly isOpen: boolean;
  readonly labId: string;
  readonly onClose: () => void;
};

function LabDetails({ isOpen, labId, onClose }: Props) {
  const { lab, isLoading } = useLab(labId);

  if (isLoading) return;

  return (
    <Modal title={lab!.name} isOpen={isOpen} onClose={onClose}>
      <div className={styles.content}>
        <div className={styles["content__room-info"]}>
          <p>Ubicacion: Edificio B</p>
          <p>Capacidad: {lab!.capacity}</p>
        </div>
        <FontAwesomeIcon icon="image" className={styles["content__icon"]} />
      </div>
      <p className={styles.equipment}>
        Equipamiento:{" "}
        {lab?.equipment
          ? Object.entries(lab.equipment)
              .map(([key, value]) => `${value} ${key.toLowerCase()}`)
              .join(", ")
          : "Información no disponible"}
      </p>
    </Modal>
  );
}

export default LabDetails;
