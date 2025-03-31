import Reservation from "../../../model/Reservation";

const getReservationsGrid = (reservations: Reservation[]) => {
  const calendarGrid: (Reservation | null)[][] = resetReservationsGrid();

  reservations.forEach((reservation) => {
    const col = dayIndex(reservation.date);
    const startRow = timeIndex(reservation.startTime)!;
    const endRow = timeIndex(reservation.endTime)!;

    for (let row = startRow; row < endRow; row++) {
      calendarGrid[row][col] = reservation;
    }
  });

  return calendarGrid;
};

const reserved = (
  reservationsGrid: (Reservation | null)[][],
  col: number,
  row: number
) => {
  return !!reservationsGrid[row][col];
};

const twoBlocks = (reservation: Reservation | null) => {
  if (reservation === null) {
    return false;
  }
  return calMinutes(reservation.startTime, reservation.endTime) === 180;
};

const resetReservationsGrid = () => {
  return Array.from({ length: 9 }, () => Array.from({ length: 7 }, () => null));
};

const dayIndex = (date: string) => {
  const day = new Date(date).getDay();
  return day;
};

const timeIndex = (time: string) => {
  const timeMap: Record<string, number> = {
    "07:00": 0,
    "08:30": 1,
    "10:00": 2,
    "11:30": 3,
    "13:00": 4,
    "14:30": 5,
    "16:00": 6,
    "17:30": 7,
    "19:00": 8,
  };

  return timeMap[time];
};

function calMinutes(startTime: string, endTime: string): number {
  const [h1, m1] = startTime.split(":").map(Number);
  const [h2, m2] = endTime.split(":").map(Number);

  return h2 * 60 + m2 - (h1 * 60 + m1);
}

export { getReservationsGrid, reserved, resetReservationsGrid, twoBlocks };
