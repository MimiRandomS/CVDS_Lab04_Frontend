import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./utils/icons.ts";
import Signup from "./features/signup/Signup.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Signup />
  </StrictMode>
);
