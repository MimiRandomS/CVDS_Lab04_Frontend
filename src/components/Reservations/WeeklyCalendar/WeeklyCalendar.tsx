import React, { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./WeeklyCalendar.module.css";
import { formatWeekRange, getWeekRange } from "./calculateWeek";
import useWeekReservations from "../../../hooks/useWeekReservations";
import { getReservationsGrid, reserved, twoBlocks } from "./paintReservations";
import { TailSpin } from "react-loading-icons";

type Props = {
  readonly labId: string;
  readonly reservationCreated: boolean;
};

function WeeklyCalendar({ labId, reservationCreated }: Props) {
  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
  const hours = Array.from({ length: 9 }, (_, i) => {
    const hour = Math.floor(i * 1.5) + 7;
    const minutes = i % 2 === 0 ? "00" : "30";
    return `${hour}:${minutes}`;
  });

  const [weekOffset, setWeekOffset] = useState(0);
  const { monday, sunday } = useMemo(
    () => getWeekRange(weekOffset),
    [weekOffset]
  );
  const { reservations, isLoading } = useWeekReservations({
    labId,
    monday,
    sunday,
    reservationCreated,
  });
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
      {isLoading ? (
        <TailSpin
          stroke="#4F46E5"
          width={80}
          height={80}
          className={styles.loading}
        />
      ) : (
        <div className={styles.calendar}>
          <div className={styles.calendar__header}>Hora</div>
          {days.map((day) => (
            <div key={day} className={styles.calendar__header}>
              {day}
            </div>
          ))}
          {hours.map((hour, rowIndex) => (
            <React.Fragment key={hour}>
              <div className={styles.calendar__hour}>{hour}</div>
              {days.map((day, colIndex) => {
                const isReserved = reserved(
                  reservationsGrid,
                  colIndex,
                  rowIndex
                );
                const isTwoBlocks = twoBlocks(
                  reservationsGrid[rowIndex][colIndex]
                );

                let classBlock = "";
                if (isTwoBlocks) {
                  let isFirstBlock = true;
                  if (rowIndex !== 0) {
                    isFirstBlock = !reserved(
                      reservationsGrid,
                      colIndex,
                      rowIndex - 1
                    );
                  }
                  classBlock = isFirstBlock
                    ? "two-blocks--first"
                    : "two-blocks--last";
                }

                return (
                  <div
                    key={`${day}-${hour}`}
                    className={`${styles.calendar__cell} ${
                      isReserved ? styles.reserved : ""
                    } ${styles[classBlock]}`}
                  ></div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}

export default WeeklyCalendar;
