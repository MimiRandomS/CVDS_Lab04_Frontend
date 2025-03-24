import styles from "./InputField.module.css";

type Props = {
  readonly type: "text" | "number" | "password";
  readonly text: string;
  readonly name?: string;
  readonly value?: string;
  readonly error?: boolean;
  readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputField({ type, text, name, value, error, onChange }: Props) {
  let inputClass = styles.input;
  let labelClass = styles.label;

  if (value !== "" && error !== undefined) {
    if (error) {
      inputClass += ` ${styles.inputError}`;
      labelClass += ` ${styles.labelError}`;
    } else {
      inputClass += ` ${styles.inputCorrect}`;
      labelClass += ` ${styles.labelCorrect}`;
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={inputClass}
          placeholder=" "
        />
        <label className={labelClass}>{text}</label>
      </div>
    </div>
  );
}

export default InputField;
