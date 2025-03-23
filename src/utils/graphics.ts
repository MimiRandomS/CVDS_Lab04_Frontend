import Reservation from "../model/Reservation";
import { getLabNamesDictionary } from "../services/labService";

export const countReservationsByDate = (reservations: Reservation[]) => {
  return reservations.reduce((acc, reservation) => {
    const date = reservation.date;
    acc[date] = (acc[date] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
};

export const countReservationsByLab = async (reservations: Reservation[]) => {
  const uniqueLabIds = [...new Set(reservations.map(r => r.labId))];
  const labNamesDictionary = await getLabNamesDictionary(uniqueLabIds);

  return reservations.reduce((acc, reservation) => {
    const labName = labNamesDictionary[reservation.labId] || "Desconocido";
    acc[labName] = (acc[labName] || 0) + 1;
    console.log(acc);
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
