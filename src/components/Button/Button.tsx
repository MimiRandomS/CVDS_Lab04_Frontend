import React from "react";
import styles from "./Button.module.css";

type Props = {
  readonly text: string;
  readonly className?: string;
};

function Button({ text, className }: Props) {
  return (
    <button className={`${styles.btn} ${className}`}>
      <span>{text}</span>
    </button>
  );
}

export default Button;
