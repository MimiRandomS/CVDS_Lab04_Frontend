import styles from "./InputField.module.css";

type Props = {
  readonly type: "text" | "number" | "password";
  readonly text: string;
  readonly name?: string;
  readonly value?: string;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ type, text, name, value, onChange }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={styles.input}
          placeholder=" "
        />
        <label className={styles.label}>{text}</label>
      </div>
    </div>
  );
}

export default InputField;
