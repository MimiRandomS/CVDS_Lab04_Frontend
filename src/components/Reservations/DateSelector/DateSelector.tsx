import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../sharedStyles/selector.module.css";
import DatePicker from "react-datepicker";
import clsx from "clsx";

type Props = {
  initialDate: Date | null;
  className?: string;
};

function DateSelector({ initialDate, className }: Props) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate);

  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.icon} icon="calendar" />
      <DatePicker
        className={clsx(styles.picker, className)}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Fecha"
        minDate={new Date()}
      />
    </div>
  );
}

export default DateSelector;
