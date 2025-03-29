import styles from "./Card.module.css";
import { ReactNode } from "react";

type Props = {
  readonly title: string;
  readonly subtitle?: string;
  readonly children: ReactNode;
  readonly footer?: ReactNode;
  readonly className?: string;
  readonly titleCardClassName?: string;
  readonly bodyCardClassName?: string;
  readonly footerCardClassName?: string;
};

function Card({ title, subtitle, children, footer, className, titleCardClassName, bodyCardClassName, footerCardClassName }: Props) {
  return (
    <div className={`${styles.card} ${className ?? ""}`}>
      <div className={`${styles.titleCard} ${titleCardClassName ?? ""}`}>
        <h3>{title}</h3>
        {subtitle && (
          <>
            <hr className={styles.divider} />
            <h4 className={styles.subtitle}>{subtitle}</h4>
          </>
        )}
      </div>
      <div className={`${styles.bodyCard} ${bodyCardClassName ?? ""}`}>
        {children}
      </div>
      {footer && <div className={`${styles.footerCard} ${footerCardClassName ?? ""}`}>{footer}</div>}
    </div>
  );
}

export default Card;
