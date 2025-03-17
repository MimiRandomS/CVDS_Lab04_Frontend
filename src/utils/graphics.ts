import Reservation from "../model/Reservation";

export const countReservationsByDate = (reservations: Reservation[]) => {
  return reservations.reduce((acc, reservation) => {
    const date = reservation.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};

export const countReservationsByLab = (reservations: Reservation[]) => {
  return reservations.reduce((acc, reservation) => {
    const lab = reservation.labId;
    acc[lab] = (acc[lab] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};

export const calculateAverageByPriority = (reservations: Reservation[]) => {
  const priorityCounts: Record<number, { total: number; count: number }> = {};

  reservations.forEach((reservation) => {
    const priority = reservation.priority;

    if (!priorityCounts[priority]) {
      priorityCounts[priority] = { total: 0, count: 0 };
    }

    priorityCounts[priority].total += 1;
    priorityCounts[priority].count += 1;
  });

  const averages: Record<number, number> = {};
  Object.keys(priorityCounts).forEach((priority) => {
    const key = Number(priority);
    averages[key] = priorityCounts[key].total / priorityCounts[key].count;
  });

  return averages;
};
