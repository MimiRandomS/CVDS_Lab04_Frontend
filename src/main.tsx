import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./utils/icons.ts";
import LateralBar from "./components/LateralBar/LateralBar.tsx";
import MainLayout from "./layouts/MainLayout/MainLayout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainLayout leftContent={<LateralBar />} rightContent={<h2>Titulo</h2>} />
  </StrictMode>
);
