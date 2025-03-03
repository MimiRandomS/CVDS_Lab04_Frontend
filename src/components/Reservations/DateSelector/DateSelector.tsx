import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./DateSelector.module.css";
import selectorStyles from "../sharedStyles/selector.module.css";
import DatePicker from "react-datepicker";

function DateSelector() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className={selectorStyles.container}>
      <FontAwesomeIcon
        className={selectorStyles.icon}
        icon="calendar"
      ></FontAwesomeIcon>
      <DatePicker
        className={selectorStyles.picker}
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
