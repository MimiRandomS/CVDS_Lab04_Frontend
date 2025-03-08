import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./utils/icons.ts";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";
import AuthLayout from "./layouts/AuthLayout/AuthLayout.tsx";
import LateralBar from "./components/LateralBar/LateralBar.tsx";
import Reservations from "./components/Reservations/Reservations.tsx";
import AuthLogo from "./components/AuthLogo/AuthLogo.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainLayout leftContent={<LateralBar />} rightContent={<Reservations />} />
  </StrictMode>
);
