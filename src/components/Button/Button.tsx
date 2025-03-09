import styles from "./Button.module.css";

type Props = {
  readonly text: string;
  readonly className?: string;
  readonly type?: "button" | "submit" | "reset";
};

function Button({ text, className, type }: Props) {
  return (
    <button className={`${styles.btn} ${className ?? ""}`} type={type}>
      <span>{text}</span>
    </button>
  );
}

export default Button;
