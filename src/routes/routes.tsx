import { Routes, Route, Navigate } from "react-router-dom";
import Reservations from "../features/reservations/reservations";
import Login from "../features/login/login";
import Signup from "../features/signup/signup";
import Account from "../features/User/account/account";
import ChangeName from "../components/User/Update/ChangeName/changeName";
import ChangePassword from "../components/User/Update/ChangePassword/changePassword";
import DeleteAccount from "../components/User/Update/DeleteAccount/deleteAccount";
import UserReservationsPage from "../features/User/myReservations/userReservations";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Users from "../features/users/Users";
import CreateUser from "../features/users/createUser/CreateUser";
import AdminRoute from "../components/PrivateRoute/AdminRoute";
import Analytics from "../features/Analytics/Analytics";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>

      <Route element={<PrivateRoute />}>
        <Route path="/reservations" element={<Reservations />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/change-name" element={<ChangeName />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/myReservations" element={<UserReservationsPage />} />
      </Route>

      <Route element={<AdminRoute />}>
        <Route path="/users" element={<Users />} />
        <Route path="/users/create" element={<CreateUser />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
