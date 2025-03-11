import styles from "./Button.module.css";

type Props = {
  readonly text: string;
  readonly className?: string;
  readonly onClick?: () => void;
};

function Button({ text, className, onClick }: Props) {
  return (
    <button className={`${styles.btn} ${className ?? ""}`} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
}

export default Button;

