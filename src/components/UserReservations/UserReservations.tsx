import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./UserReservations.module.css";
import Card from "../Card/Card";
import IconLink from "../IconLink/IconLink";
import CancelReservation from "./CancelReservation/CancelReservation";
import CancelIcon from "../../assets/public/cancel.ico";
import { cancelReservation } from "../../services/reservationService";
import { getLabName } from "../../services/labService";
import Carrousel from "../Carousel/Carousel";
import Reservation from "../../model/Reservation";

type Props = {
  readonly reservations: Reservation[];
};

const ITEMS_PER_PAGE = 4; // Máximo de reservas por página

function UserReservations({ reservations }: Props) {
  const [reservationsList, setReservationsList] = useState<Reservation[]>(reservations);
  const [cancelModalOpen, setCancelModalOpen] = useState(false);
  const [reservationToCancel, setReservationToCancel] = useState<Reservation | null>(null);
  const [labNames, setLabNames] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchLabNames = async () => {
      const uniqueLabIds = [...new Set(reservations.map((res) => res.labId))];
      const labNamesMap: Record<string, string> = {};

      await Promise.all(
        uniqueLabIds.map(async (labId) => {
          try {
            const response = await getLabName(labId);
            labNamesMap[labId] = response.data!;
          } catch (error) {
            console.error(`Error al obtener el nombre del laboratorio con ID ${labId}`, error);
            labNamesMap[labId] = "Desconocido";
          }
        })
      );

      setLabNames(labNamesMap);
    };

    fetchLabNames();
  }, [reservations]);

  const handleCancelReservation = async (reservationId: string) => {
    try {
      await cancelReservation(reservationId);
      setReservationsList((prevList) => prevList.filter((res) => res.id !== reservationId));
    } catch (error) {
      console.error("Error al cancelar la reserva", error);
      alert("Hubo un problema al cancelar la reserva. Intenta de nuevo.");
    } finally {
      closeCancelModal();
    }
  };

  const openCancelModal = (reservation: Reservation) => {
    setReservationToCancel(reservation);
    setCancelModalOpen(true);
  };

  const closeCancelModal = () => {
    setReservationToCancel(null);
    setCancelModalOpen(false);
  };

  // Filtrar reservas confirmadas y dividir en páginas
  const confirmedReservations = reservationsList.filter((res) => res.status === "CONFIRMED");
  const totalPages = Math.ceil(confirmedReservations.length / ITEMS_PER_PAGE);
  const paginatedReservations = confirmedReservations.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerCarrosel}>
        <Carrousel
          title="Mis Reservas"
          onNext={nextPage}
          onPrev={prevPage}
          canNext={currentPage < totalPages - 1}
          canPrev={currentPage > 0}
        >
          <AnimatePresence mode="wait">
            {paginatedReservations.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <Card title="No tienes reservas confirmadas" className={styles.noReservationsCard}>
                  <p className={styles.noReservationsText}>Parece que aún no has realizado ninguna reserva.</p>
                </Card>
              </motion.div>
            ) : (
              paginatedReservations.map((reservation) => (
                <motion.div
                  key={reservation.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <Card
                    title={reservation.purpose}
                    subtitle={reservation.date}
                    className={styles.card}
                    footer={
                      <div className={styles.cardFooter}>
                        <span className={styles.priority}>Prioridad: {reservation.priority}</span>
                        <IconLink src={CancelIcon} alt="Cancelar reserva" onClick={() => openCancelModal(reservation)} />
                      </div>
                    }
                  >
                    <div className={styles.cardBody}>
                      <p className={styles.labName}>Laboratorio: {labNames[reservation.labId] || "Cargando..."}</p>
                      <p className={styles.schedule}>Hora: {reservation.startTime} - {reservation.endTime}</p>
                    </div>
                  </Card>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </Carrousel>
      </div>
      <CancelReservation isOpen={cancelModalOpen} onClose={closeCancelModal} onConfirm={() => reservationToCancel && handleCancelReservation(reservationToCancel.id)} />
    </div>
  );
}

export default UserReservations;
