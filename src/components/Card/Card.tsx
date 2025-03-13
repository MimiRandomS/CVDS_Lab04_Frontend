import styles from "./Card.module.css";
import { ReactNode } from "react";

type Props = {
  readonly title: string;
  readonly children: ReactNode;
  readonly className?: string;
  readonly titleCardClassName?: string;
  readonly bodyCardClassName?: string;
};

function Card({ title, children, className, titleCardClassName, bodyCardClassName }: Props) {
  return (
    <div className={`${styles.card} ${className ?? ""}`}>
      <div className={`${styles.titleCard} ${titleCardClassName ?? ""}`}>
        <h3>{title}</h3>
      </div>
      <div className={`${styles.bodyCard} ${bodyCardClassName ?? ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Card;
