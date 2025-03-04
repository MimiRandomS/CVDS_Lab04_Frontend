import React from "react";
import styles from "./AuthForm.module.css";
import Button from "../Button/Button";

type Props = {
  readonly type: "login" | "signup";
  readonly children: React.ReactNode;
};

function AuthForm({ type, children }: Props) {
  const text = type === "login" ? "Iniciar sesion" : "Registrarse";
  const linkText =
    type === "login" ? "¿No tienes cuenta? " : "¿Ya tienes una cuenta? ";
  const linkAction = type === "login" ? "Regístrate" : "Inicia sesión";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{text}</h1>
      <div className={styles.form}>{children}</div>
      <Button text={text} className={styles.btn}></Button>
      <p className={styles.linkText}>
        {linkText}
        <span className={styles.link}>{linkAction}</span>
      </p>
    </div>
  );
}

export default AuthForm;
