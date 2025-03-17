import React from "react";
import HistogramChart from "../Graphic/HistogramChart";
import ReservationsByLabChart from "../Graphic/ReservationsByLabChart";
import PriorityAverageChart from "../Graphic/PriorityAverageChart";
import MostDemandedLabsChart from "../Graphic/MostDemandedLabsChart";

interface AnalyticsPageProps {
  reservationsByDate: { [date: string]: number };
  reservationsByLab: { [lab: string]: number };
  averageByPriority: { [priority: number]: number };
}

export default function AnalyticsPage({
  reservationsByDate,
  reservationsByLab,
  averageByPriority,
}: AnalyticsPageProps) {
  const histogramData = Object.keys(reservationsByDate).map((date) => ({
    date,
    count: reservationsByDate[date],
  }));

  const labData1 = Object.keys(reservationsByLab).map((lab) => ({
    lab,
    count: reservationsByLab[lab],
  }));

  const labData2 = Object.keys(reservationsByLab).map((lab) => ({
    lab,
    value: reservationsByLab[lab],
  }));

  const priorityData = Object.keys(averageByPriority).map((priority) => ({
    priority: `Prioridad ${priority}`,
    avg: averageByPriority[Number(priority)],
  }));

  return (
    <div>
      <h3>Histograma de Reservas</h3>
      <HistogramChart data={histogramData} />

      <h3>Número de Reservas por Laboratorio</h3>
      <ReservationsByLabChart data={labData1} />

      <h3>Promedio de Reservas por Prioridad</h3>
      <PriorityAverageChart data={priorityData} />

      <h3>Laboratorios más Demandados</h3>
      <MostDemandedLabsChart data={labData2} />
    </div>
  );
}
