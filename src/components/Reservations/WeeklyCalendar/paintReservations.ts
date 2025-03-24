import Reservation from "../../../model/Reservation";

const dayIndex = (date: string) => {
  const day = new Date(date).getDay();
  return day;
};

const timeIndex = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  return (hour - 7) * 2 + (minute === 30 ? 1 : 0);
};

const getReservationsGrid = (reservations: Reservation[]) => {
  const calendarGrid: ([string, string] | [null, null])[][] = Array.from(
    { length: 25 },
    () =>
      Array(7)
        .fill(null)
        .map(() => [null, null] as [null, null])
  );

  reservations.forEach((reservation) => {
    const col = dayIndex(reservation.date);
    const startRow = timeIndex(reservation.startTime);
    const endRow = timeIndex(reservation.endTime);

    for (let i = startRow; i < endRow; i++) {
      calendarGrid[i][col][0] = reservation.id;
      if (i === startRow) {
        calendarGrid[i][col][1] = "first";
      } else if (i === endRow - 1) {
        calendarGrid[i][col][1] = "last";
      }
    }
  });

  return calendarGrid;
};

const reserved = (
  reservationsGrid: ([string, string] | [null, null])[][],
  col: number,
  row: number
) => {
  return !!reservationsGrid[row][col][0];
};

const isFirst = (
  reservationsGrid: ([string, string] | [null, null])[][],
  col: number,
  row: number
) => {
  return reservationsGrid[row][col][1] === "first";
};

const isLast = (
  reservationsGrid: ([string, string] | [null, null])[][],
  col: number,
  row: number
) => {
  return reservationsGrid[row][col][1] === "last";
};

const resertReservationsGrid = () => {
  return Array.from({ length: 25 }, () => Array(7).fill(null));
};

export {
  getReservationsGrid,
  reserved,
  isFirst,
  isLast,
  resertReservationsGrid,
};
