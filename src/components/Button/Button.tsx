import styles from "./Button.module.css";

type Props = {
  readonly text: string;
  readonly className?: string;
  readonly type?: "button" | "submit" | "reset";
  readonly onClick?: () => void;
};

function Button({ text, className, type, onClick }: Props) {
  return (
    <button
      className={`${styles.btn} ${className ?? ""}`}
      type={type}
      onClick={onClick}
    >
      <span>{text}</span>
    </button>
  );
}

export default Button;
