import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Reservations.module.css";
import inputFieldStyles from "./sharedStyles/inputField.module.css";
import "react-datepicker/dist/react-datepicker.css";
import LabSelection from "./LabSelection/LabSelection";
import LabInfo from "./LabInfo/LabInfo";
import DateSelector from "./DateSelector/DateSelector";
import TimeSelector from "./TimeSelector/TimeSelector";
import ItemSelector from "./ItemSelector/ItemSelector";
import Button from "../Button/Button";
import WeeklyCalendar from "./WeeklyCalendar/WeeklyCalendar";
import { useReservationForm } from "../../hooks/useReservationForm";
import { useLabs } from "../../hooks/useLabs";
import { useState } from "react";

const durations = [30, 60, 90, 120, 150, 180];
const priority = [1, 2, 3, 4, 5];

function Reservations() {
  const [reservationCreated, setReservationCreated] = useState(false);
  const { labs, isLoading } = useLabs();
  const { form, setForm, handleSubmit } = useReservationForm({
    labs,
    onReservationCreated: () => setReservationCreated((prev) => !prev),
  });

  if (isLoading) {
    return <h2>No hay laboratorios disponibles</h2>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.labs__container}>
          <h2 className={styles.labs__labName}>
            {labs.find((lab) => lab.id === form.selectedLab)?.name}
          </h2>
          <div className={styles.labs__icons}>
            <LabSelection
              items={labs}
              onSelectLab={(labId) =>
                setForm((prev) => ({ ...prev, selectedLab: labId }))
              }
            ></LabSelection>
            <LabInfo labId={form.selectedLab}></LabInfo>
          </div>
        </div>
        <div className={styles.data}>
          <div className={styles.data__selector}>
            <DateSelector
              selectedDate={form.selectedDate}
              onChange={(date) =>
                setForm((prev) => ({ ...prev, selectedDate: date }))
              }
            ></DateSelector>
            <TimeSelector
              selectedTime={form.selectedTime}
              onChange={(time) =>
                setForm((prev) => ({ ...prev, selectedTime: time }))
              }
            ></TimeSelector>
            <ItemSelector
              items={durations}
              text={`${form.selectedDuration} min`}
              icon={faClock}
              suffix="min"
              onChange={(duration) =>
                setForm((prev) => ({ ...prev, selectedDuration: duration }))
              }
            ></ItemSelector>
          </div>
          <div className={styles.data__selector}>
            <ItemSelector
              className={styles.selector__priority}
              items={priority}
              text={String(form.selectedPriority)}
              icon={faCircleExclamation}
              onChange={(duration) =>
                setForm((prev) => ({ ...prev, selectedPriority: duration }))
              }
            ></ItemSelector>
            <div className={`${inputFieldStyles.container} ${styles.purpose}`}>
              <FontAwesomeIcon icon="pencil" />
              <input
                placeholder="Proposito de la reserva"
                type="text"
                className={styles.purpose__input}
                value={form.purpose}
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, purpose: e.target.value }))
                }
              />
            </div>
          </div>
          <Button
            className={styles.data__btn}
            text="Reservar"
            onClick={handleSubmit}
          ></Button>
        </div>
      </div>
      <WeeklyCalendar
        labId={form.selectedLab}
        reservationCreated={reservationCreated}
      />
    </div>
  );
}

export default Reservations;
