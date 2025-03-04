import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../sharedStyles/selector.module.css";
import DatePicker from "react-datepicker";

function DateSelector() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className={styles.container}>
      <FontAwesomeIcon
        className={styles.icon}
        icon="calendar"
      ></FontAwesomeIcon>
      <DatePicker
        className={styles.picker}
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText="Fecha"
        minDate={new Date()}
      ></DatePicker>
    </div>
  );
}

export default DateSelector;
