import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./WeeklyCalendar.module.css";
import { formatWeekRange, getWeekRange } from "./calculateWeek";
import useWeekReservations from "../../../hooks/useWeekReservations";
import { getReservationsGrid, reserved } from "./paintReservations";

type Props = {
  readonly labId: string;
};

function WeeklyCalendar({ labId }: Props) {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = Math.floor(i / 2) + 7;
    const minutes = i % 2 === 0 ? "00" : "30";
    return `${hour}:${minutes}`;
  });

  const [weekOffset, setWeekOffset] = useState(0);
  const { monday, sunday } = getWeekRange(weekOffset);
  const reservations = useWeekReservations(labId, monday, sunday);
  const reservationsGrid = useMemo(
    () => getReservationsGrid(reservations),
    [reservations, weekOffset]
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button
          className={styles.header__btn}
          onClick={() => setWeekOffset((prev) => prev - 1)}
        >
          <FontAwesomeIcon icon="arrow-left" className={styles.header__icon} />
        </button>
        <h2>Calendario semanal: {formatWeekRange(weekOffset)}</h2>
        <button
          className={styles.header__btn}
          onClick={() => setWeekOffset((prev) => prev + 1)}
        >
          <FontAwesomeIcon icon="arrow-right" className={styles.header__icon} />
        </button>
      </div>
      <div className={styles.calendar}>
        <div className={styles.calendar__header}>Hora</div>
        {days.map((day) => (
          <div key={day} className={styles.calendar__header}>
            {day}
          </div>
        ))}
        {hours.map((hour, rowIndex) => (
          <>
            <div key={hour} className={styles.calendar__hour}>
              {hour}
            </div>
            {days.map((day, colIndex) => (
              <div
                key={`${day}-${hour}`}
                className={`${styles.calendar__cell} ${
                  reserved(reservationsGrid, colIndex, rowIndex)
                    ? styles.reserved
                    : ""
                }`}
              ></div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}

export default WeeklyCalendar;
