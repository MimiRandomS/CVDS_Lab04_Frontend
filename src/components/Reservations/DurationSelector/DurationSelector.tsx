import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DurationSelector.module.css";
import inputFieldStyles from "../sharedStyles/inputField.module.css";
import listStyles from "../sharedStyles/labsList.module.css";

type Props = {
  readonly items: number[];
  readonly selectedDuration: number;
  readonly onChange: (duration: number) => void;
};

function DurationSelector({ items, selectedDuration, onChange }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${inputFieldStyles.container} ${listStyles.container}`}>
      <FontAwesomeIcon
        className={inputFieldStyles.icon}
        icon="clock"
      ></FontAwesomeIcon>
      <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
        {selectedDuration} min
      </button>
      <ul
        className={`${listStyles.list} ${
          isOpen ? listStyles.listVisible : ""
        }  ${styles.list}`}
      >
        {items.map((item) => (
          <li key={item} className={listStyles.item}>
            <button
              className={listStyles.itemBtn}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
            >
              {item} min
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DurationSelector;
