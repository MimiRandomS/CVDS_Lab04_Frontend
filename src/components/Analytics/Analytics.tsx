import styles from "./Analytics.module.css";
import HistogramChart from "../Graphic/HistogramChart";
import ReservationsByLabChart from "../Graphic/ReservationsByLabChart";
import PriorityAverageChart from "../Graphic/PriorityAverageChart";
import MostDemandedLabsChart from "../Graphic/MostDemandedLabsChart";
import { TailSpin } from "react-loading-icons";

interface AnalyticsPageProps {
  reservationsByDate: { [date: string]: number };
  reservationsByLab: { [lab: string]: number };
  averageByPriority: { [priority: number]: number };
  loading: boolean;
}

export default function AnalyticsPage({
  reservationsByDate,
  reservationsByLab,
  averageByPriority,
  loading,
}: AnalyticsPageProps) {
  if (loading) {
    return (
      <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "white",
      }}
    >
      <TailSpin stroke="#4F46E5" width={80} height={80} />
    </div>
    );
  }

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
    <div className={styles.main}>
      <div className={styles.container_graphics}>
        <div className={styles.graphic}>
          <h3>Histograma de Reservas</h3>
          <HistogramChart data={histogramData} />
        </div>

        <div className={styles.graphic}>
          <h3>Número de Reservas por Laboratorio</h3>
          <ReservationsByLabChart data={labData1} />
        </div>

        <div className={styles.graphic}>
          <h3>Promedio de Reservas por Prioridad</h3>
          <PriorityAverageChart data={priorityData} />
        </div>

        <div className={styles.graphic}>
          <h3>Laboratorios más Demandados</h3>
          <MostDemandedLabsChart data={labData2} />
        </div>
      </div>

    </div>
  );
}
