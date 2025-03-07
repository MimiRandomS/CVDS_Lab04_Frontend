import styles from "./Card.module.css";
import { ReactNode } from "react";

type Props = {
  readonly title: string;
  readonly children: ReactNode;
  readonly className?: string;
};

function Card({ title, children, className }: Props) {
  return (
    <div className={`${styles.card} ${className ?? ""}`}>
      <div className={styles.titleCard}>
        <h3>{title}</h3>
      </div>
      <div className={styles.bodyCard}>{children}</div>
    </div>
  );
}

export default Card;
