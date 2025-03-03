import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import btnStyles from "../sharedStyles/labsInfoBtn.module.css";

type Props = {};

function LabInfo({}: Props) {
  return (
    <div className={btnStyles.labs}>
      <button className={btnStyles.labs__btn}>
        <FontAwesomeIcon
          className={btnStyles.labs__icon}
          icon="info-circle"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
}

export default LabInfo;
