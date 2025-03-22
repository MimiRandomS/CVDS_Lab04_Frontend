import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./InputError.module.css";

type Props = {
  readonly text: string;
};

function InputError({ text }: Props) {
  return (
    <p className={styles.error__text}>
      <FontAwesomeIcon
        icon="circle-exclamation"
        className={styles.error__icon}
      ></FontAwesomeIcon>
      {text}
    </p>
  );
}

export default InputError;
