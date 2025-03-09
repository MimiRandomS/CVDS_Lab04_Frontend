import { Routes, Route, Navigate } from "react-router-dom";
import Reservations from "../features/reservations/reservations";
import Login from "../features/login/login";
import Signup from "../features/signup/signup";
import Account from "../features/user/account/account";
import ChangeName from "../components/User/Update/ChangeName/changeName";
import ChangePassword from "../components/User/Update/ChangePassword/changePassword";
import DeleteAccount from "../components/User/Update/DeleteAccount/deleteAccount";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/reservations" element={<Reservations />}></Route>
      <Route path="/account" element={<Account />}></Route>
      <Route path="/change-name" element={<ChangeName />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
    </Routes>
  );
}

export default AppRoutes;
