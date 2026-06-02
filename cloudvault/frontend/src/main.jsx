import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CloudVault from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CloudVault />
  </StrictMode>
);
