import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Reservations.module.css";
import inputFieldStyles from "./sharedStyles/inputField.module.css";
import "react-datepicker/dist/react-datepicker.css";
import LabSelection from "./LabSelection/LabSelection";
import LabInfo from "./LabInfo/LabInfo";
import DateSelector from "./DateSelector/DateSelector";
import TimeSelector from "./TimeSelector/TimeSelector";
import DurationSelector from "./DurationSelector/DurationSelector";
import Button from "../Button/Button";
import WeeklyCalendar from "./WeeklyCalendar/WeeklyCalendar";
import { createReservation } from "../../services/reservationService";
import { getLabs } from "../../services/labService";

interface Lab {
  id: string;
  name: string;
}

const initialFormState = {
  selectedLab: "",
  selectedDate: null as Date | null,
  selectedTime: null as Date | null,
  selectedDuration: 30,
  purpose: "",
};

function Reservations() {
  const durations = [30, 60, 90, 120, 150, 180];
  const [labs, setLabs] = useState<Lab[]>([]);
  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const data = await getLabs();
        setLabs(data);
        if (data.length > 0) {
          setForm((prev) => ({ ...prev, selectedLab: data[0].id }));
        }
      } catch (error) {
        alert("Error obteniendo los laboratorios");
      }
    };

    fetchLabs();
  }, []);

  const validateForm = () => {
    if (!form.selectedDate) return "Por favor, selecciona una fecha";
    if (!form.selectedTime) return "Por favor, selecciona una hora de inicio";
    if (!form.selectedDuration) return "Por favor, selecciona la duración";
    if (form.purpose.trim() === "") return "Por favor, ingresa el propósito";
    return null;
  };

  const formatDateAndTime = () => {
    const dateStr = form.selectedDate!.toISOString().split("T")[0];

    const startTime = form.selectedTime!.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const endDate = new Date(form.selectedTime!);
    endDate.setMinutes(endDate.getMinutes() + form.selectedDuration);
    const endTime = endDate.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return { dateStr, startTime, endTime };
  };

  const handleSubmit = async () => {
    const errorMessage = validateForm();
    if (errorMessage) {
      alert(errorMessage);
      return;
    }

    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("No se encontró el usuario");
      return;
    }

    const { dateStr, startTime, endTime } = formatDateAndTime();
    const reservationData = {
      userId,
      labId: form.selectedLab,
      date: dateStr,
      startTime,
      endTime,
      purpose: form.purpose,
    };

    try {
      await createReservation(reservationData);
      alert("Reserva creada con éxito");
      const lastLabSelected = form.selectedLab;
      setForm({ ...initialFormState, selectedLab: lastLabSelected });
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.labs__container}>
          <h2 className={styles.labs__labName}>
            {labs.find((lab) => lab.id === form.selectedLab)?.name ||
              "Seleccionar laboratorio"}
          </h2>
          <div className={styles.labs__icons}>
            <LabSelection
              items={labs}
              onSelectLab={(labId) =>
                setForm((prev) => ({ ...prev, selectedLab: labId }))
              }
            ></LabSelection>
            <LabInfo></LabInfo>
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
            <DurationSelector
              items={durations}
              selectedDuration={form.selectedDuration}
              onChange={(duration) =>
                setForm((prev) => ({ ...prev, selectedDuration: duration }))
              }
            ></DurationSelector>
          </div>
          <div className={inputFieldStyles.container}>
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
          <Button
            className={styles.data__btn}
            text="Reservar"
            onClick={handleSubmit}
          ></Button>
        </div>
      </div>
      <WeeklyCalendar />
    </div>
  );
}

export default Reservations;