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
  const generateTimeIntervals = () => {
    const times: Date[] = [];
    let currentTime = new Date();
    currentTime.setHours(7, 0, 0, 0);

    while (
      currentTime.getHours() < 17 ||
      (currentTime.getHours() === 17 && currentTime.getMinutes() <= 30)
    ) {
      times.push(new Date(currentTime));
      currentTime.setMinutes(currentTime.getMinutes() + 90);
    }

    return times;
  };

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
        includeTimes={generateTimeIntervals()}
        timeFormat="HH:mm"
        dateFormat="HH:mm"
        placeholderText="Hora"
      ></DatePicker>
    </div>
  );
}

export default TimeSelector;
