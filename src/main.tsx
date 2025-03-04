import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./utils/icons.ts";
import Signup from "./features/signup/Signup.tsx";
import Login from "./features/login/login.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Signup /> */}
    <Login />
  </StrictMode>
);
