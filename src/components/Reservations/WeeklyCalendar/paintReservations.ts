import { Reservation } from "../../../services/reservationService";

const dayIndex = (date: string) => {
  const day = new Date(date).getDay();
  return ((day + 6) % 7) + 1;
};

const timeIndex = (time: string) => {
  const [hour, minute] = time.split(":").map(Number);
  return (hour - 7) * 2 + (minute === 30 ? 1 : 0);
};

const getReservationsGrid = (reservations: Reservation[]) => {
  const calendarGrid: (string | null)[][] = Array.from({ length: 25 }, () =>
    Array(7).fill(null)
  );

  reservations.forEach((reservation) => {
    const col = dayIndex(reservation.date);
    const startRow = timeIndex(reservation.startTime);
    const endRow = timeIndex(reservation.endTime);

    for (let i = startRow; i < endRow; i++) {
      calendarGrid[i][col] = reservation.id;
    }
  });

  return calendarGrid;
};

const reserved = (
  reservationsGrid: (string | null)[][],
  col: number,
  row: number
) => {
  return !!reservationsGrid[row][col];
};

export { getReservationsGrid, reserved };
