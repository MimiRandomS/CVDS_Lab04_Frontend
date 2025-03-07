import styles from "./Button2.module.css";
import Button from "../../../Button/Button";

type Props = {
  readonly text1: string;
  readonly text2: string;
  readonly className?: string;
  readonly onCancel?: () => void;
  readonly onSave?: () => void;
};

function Button2({ text1, text2, className, onCancel, onSave }: Props) {
  return (
    <div className={`${styles.container} ${className ?? ""}`}>
      <Button text={text1} className={styles["btn-1"]} onClick={onCancel} />
      <Button text={text2} className={styles["btn-2"]} onClick={onSave} />
    </div>
  );
}

export default Button2;
