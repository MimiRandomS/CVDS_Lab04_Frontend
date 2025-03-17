import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pickerStyles from "../sharedStyles/picker.module.css";
import inputFieldStyles from "../sharedStyles/inputField.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type props = {
  readonly selectedTime: Date | null;
  readonly onChange: (time: Date | null) => void;
};

function TimeSelector({ selectedTime, onChange }: props) {
  return (
    <div className={inputFieldStyles.container}>
      <FontAwesomeIcon
        className={inputFieldStyles.icon}
        icon="clock"
      ></FontAwesomeIcon>
      <DatePicker
        className={pickerStyles.picker}
        selected={selectedTime}
        onChange={onChange}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeFormat="HH:mm"
        dateFormat="HH:mm"
        minTime={new Date(new Date().setHours(7, 0, 0, 0))}
        maxTime={new Date(new Date().setHours(19, 0, 0, 0))}
        placeholderText="Hora"
      ></DatePicker>
    </div>
  );
}

export default TimeSelector;
