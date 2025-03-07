import { Routes, Route, Navigate } from "react-router-dom";
import UserReservations from "../features/User/userReservations/userReservations";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/userReservations" replace />} />
      <Route path="/userReservations" element={<UserReservations />} />
    </Routes>
  );
}

export default AppRoutes;
