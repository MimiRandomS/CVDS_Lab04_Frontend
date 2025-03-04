import { Routes, Route } from "react-router-dom";
import Login from "../features/login/login";
import Signup from "../features/signup/Signup";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
}

export default AppRoutes;
