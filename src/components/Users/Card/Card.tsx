import React from "react";
import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  readonly icon: IconDefinition;
  readonly text: string;
};

function Card({ icon, text }: Props) {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <h2>{text}</h2>
    </div>
  );
}

export default Card;
