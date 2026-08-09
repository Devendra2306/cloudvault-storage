import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CloudVault from "./App";
import ChatWidget from "./components/ChatWidget";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CloudVault />
    <ChatWidget />
  </StrictMode>
);
