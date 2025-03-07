import { Routes, Route, Navigate } from "react-router-dom";
import ChangeName from "../components/User/Update/ChangeName/changeName";
import ChangePassword from "../components/User/Update/ChangePassword/changePassword";
import DeleteAccount from "../components/User/Update/DeleteAccount/deleteAccount";
import UserActions from "../components/User/Update/UserAction/userAction";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/userAction" replace />} />
      <Route path="/userAction" element={<UserActions />} />
      <Route path="/change-name" element={<ChangeName />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/delete-account" element={<DeleteAccount />} />
    </Routes>
  );
}

export default AppRoutes;
