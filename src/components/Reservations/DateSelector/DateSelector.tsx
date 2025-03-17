import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pickerStyles from "../sharedStyles/picker.module.css";
import inputFieldStyles from "../sharedStyles/inputField.module.css";
import DatePicker from "react-datepicker";

type props = {
  readonly selectedDate: Date | null;
  readonly onChange: (date: Date | null) => void;
};

function DateSelector({ selectedDate, onChange }: props) {
  return (
    <div className={inputFieldStyles.container}>
      <FontAwesomeIcon
        className={inputFieldStyles.icon}
        icon="calendar"
      ></FontAwesomeIcon>
      <DatePicker
        className={pickerStyles.picker}
        selected={selectedDate}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Fecha"
        minDate={new Date()}
      ></DatePicker>
    </div>
  );
}

export default DateSelector;
