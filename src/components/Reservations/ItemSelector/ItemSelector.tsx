import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ItemSelector.module.css";
import inputFieldStyles from "../sharedStyles/inputField.module.css";
import listStyles from "../sharedStyles/labsList.module.css";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

type Props = {
  readonly className?: string;
  readonly items: number[];
  readonly text: string;
  readonly icon: IconDefinition;
  readonly suffix?: string;
  readonly onChange: (item: number) => void;
};

function ItemSelector({
  className,
  items,
  text,
  icon,
  suffix,
  onChange,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`${inputFieldStyles.container} ${listStyles.container} ${className}`}
    >
      <FontAwesomeIcon
        className={inputFieldStyles.icon}
        icon={icon}
      ></FontAwesomeIcon>
      <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
        {text}
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
              {item} {suffix ?? ""}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemSelector;
