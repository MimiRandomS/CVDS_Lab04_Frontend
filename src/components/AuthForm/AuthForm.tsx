import React from "react";
import styles from "./AuthForm.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

type Props = {
  readonly type: "login" | "signup";
  readonly children: React.ReactNode;
  readonly onSubmit: (e: React.FormEvent) => void;
};

function AuthForm({ type, children, onSubmit }: Props) {
  const text = type === "login" ? "Iniciar sesion" : "Registrarse";
  const linkText =
    type === "login" ? "¿No tienes cuenta? " : "¿Ya tienes una cuenta? ";
  const linkAction = type === "login" ? "Regístrate" : "Inicia sesión";
  const linkPath = type === "login" ? "/signup" : "/login";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{text}</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        {children}
        <Button type="submit" text={text} className={styles.btn}></Button>
      </form>
      <p className={styles.linkText}>
        {linkText}
        <Link to={linkPath} className={styles.link}>
          {linkAction}
        </Link>
      </p>
    </div>
  );
}

export default AuthForm;
