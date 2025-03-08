import { Routes, Route, Navigate } from "react-router-dom";
import Reservations from "../features/reservations/reservations";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Reservations" replace />} />
      <Route path="/Reservations" element={<Reservations />}></Route>
    </Routes>
  );
}

export default AppRoutes;
