interface Reservation {
  id: string;
  userId: string;
  labId: string;
  date: string;
  startTime: string;
  endTime: string;
  purpose: string;
  status: "CONFIRMED" | "CANCELED";
  priority: number;
}

export default Reservation;
